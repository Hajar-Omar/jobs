import { ISidebarItemProps } from "@/types";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const SidebarItem = ({
  item,
  openSidebar,
  handleOpenSidebarSubList,
  index,
}: ISidebarItemProps) => {
   return (<div
      className='p-3 bg-gray-100 font-semibold flex justify-between'
      onClick={() => handleOpenSidebarSubList(index)}>
     {item.target ?  <Link
        href={item.target || "#"}
        key={item.title}
        className='text-gray-700 w-full'
        passHref>
        {item.title}
      </Link> : <span className="cursor-pointer">{item.title}</span>}

   { item?.children &&  <span
        className={
          openSidebar[index]
            ? "-rotate-180 transition-all duration-500"
            : ""
        }>
        <ChevronUp />
      </span>}

    </div>
  );
};

export default memo(SidebarItem);