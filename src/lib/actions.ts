"use server";

import { ISidebarItem } from "@/types";
import { revalidatePath } from "next/cache";

// missing return types
export async function getNavItems() {
  try {
    // const response = await fetch("https://ahmed-radi-daftra.koyeb.app/nav");
    const response = await fetch("http://localhost:8081/nav");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data) {
      throw new Error('Empty JSON response');
    }

    revalidatePath('/');
    return data;
  } catch (error) {
    console.error("Failed to fetch navigation items:", error);
    throw error;
  }
}

/**
 * Sends a POST request to track an item's movement.
 *
 * @param {Object} params - The parameters for the tracking request.
 * @param {number} params.id - The ID of the item.
 * @param {number} params.from - The starting position.
 * @param {number} params.to - The destination position.
 * @returns {Promise<{ message?: string } | any>} - A promise resolving with server response.
 */
export async function postTrackItem({
  id,
  from,
  to,
}: {
  id: number;
  from: number;
  to: number;
}): Promise<{ message?: string } | any> {
  try {
    const apiUrl = process.env.API_URL || "http://localhost:8081";
    const response = await fetch(`${apiUrl}/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, from, to }),
    });

    if (response.status === 204) {
      return { message: "Item movement tracked successfully (no content)." };
    }

    if (!response.ok) {
      throw new Error(`Failed to track item: HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error tracking item:", error);
    return { error: "Failed to track item." }; // Return error object for client handling.
  }
}

export const postSidebarItems = async (items: ISidebarItem[]) => {
  try {
    // const response = await fetch('https://ahmed-radi-daftra.koyeb.app/nav', {
    const response = await fetch('http://localhost:8081/nav', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });

    if (response.status === 204) {
      const updatedItems = await getNavItems();
      console.log('Items successfully saved');
      return updatedItems;
    } else {
      console.error('Failed to save items', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
