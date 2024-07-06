"use client";

import Image from "next/image";
import MenuItems from "@/components/menu-items";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  // State untuk menyimpan status menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Fungsi untuk toggling menu
  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 border-2">
      {/* Logo */}
      <Image src="/logo.svg" alt="Logo" width={150} height={150} />

      {/* Tombol Menu */}
      <Button
        variant="outline"
        size="lg"
        onClick={toggleMenu}
        className="block lg:hidden" // Sembunyikan tombol pada tampilan desktop
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Menu untuk desktop */}
      <nav className="hidden lg:flex gap-4">
        <MenuItems />
        <Button variant="outline" size="lg">
          Request a quote
        </Button>
      </nav>

      {/* Menu overlay untuk mobile */}
      {menuOpen && (
        <div className="fixed inset-0  bg-opacity-90 flex flex-col items-center justify-center lg:hidden">
          <MenuItems />
          <Button
            variant="outline"
            size="lg"
            className="mt-4"
            onClick={toggleMenu}
          >
            Request a quote
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
