"use client";

import { menus } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MenuItems = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setMenu(menu);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-x-4 items-center text-center justify-center">
      {menus.map((menu, index) => {
        return (
          <Link key={index} href="" className="hover:border-b border-black">
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuItems;
