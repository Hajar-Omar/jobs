import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";
import Sidebar from "./_components/sidebar/Sidebar";
import Providers from "./Providers";
import { getNavItems } from "@/lib/actions";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = await getNavItems();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-100 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main
          className={`lg:px-5 lg:p-0 p-5 grid grid-cols-[1fr] lg:grid-cols-[1fr_2fr_1.5fr] md:grid-cols-[1fr_2fr] gap-2.5 md:gap-y-2.5`}
        >
          <Providers initItems={navItems}>
            <Sidebar navItems={navItems} />
          </Providers>
          {children}
        </main>
      </body>
    </html>
  );
}
