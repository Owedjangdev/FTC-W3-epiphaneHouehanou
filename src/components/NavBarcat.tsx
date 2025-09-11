"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/category", label: "Category" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const renderLinks = (baseClass: string) => (
    <>
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        const activeClass = isActive ? "border-b-2 border-secondary-80" : "";

        return (
          <Link
            href={href}
            key={href}
            className={`${baseClass} ${activeClass} px-3 py-2`}
          >
            {label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className=" top-0 left-0 w-full z-40 shadow-md">
      <div className="container mx-auto px-5 md:px-12 lg:px-[13%] py-4 flex justify-between items-center gap-4">
        {/* Bouton mobile */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link  href="/"className="flex items-center">
          <Image src="/logo.png" alt="logo" width={115} height={40} />
        </Link >

        <Search className="sm:hidden" />

        {/* Menu desktop */}
        <div className="hidden sm:flex items-center gap-6 flex-1">
          {renderLinks("text-sm font-medium")}

          {/* Barre de recherche */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full bg-white rounded-full px-4 py-2 pl-10 shadow outline-none"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Actions à droite */}
        <div className="hidden xl:flex items-center gap-4">
          <button className="bg-[#003459] text-white px-2 py-1  lg:px-7 rounded-full font-medium">
            Join the community
          </button>

          {/* Sélecteur de langue */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/etoile.png" alt="flag" width={16} height={16} />
            VDN <ChevronDown />
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-[#FCEED5] flex flex-col gap-4 p-6
          transition-transform duration-300 sm:hidden z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button className="sm:hidden" onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {renderLinks(
            "px-2 py-2 rounded-sm bg-secondary-80 text-center text-white font-bold text-2xl"
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
