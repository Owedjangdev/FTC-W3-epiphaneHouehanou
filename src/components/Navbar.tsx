"use client";
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
    <nav className="top-0 fixed left-0 w-full bg-secondary px-2  md:px-12 lg:px-20 py-4 shadow-md z-40">
      <div className="flex justify-between items-center gap-4">
        {/* Bouton mobile */}
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo with the oval background */}

        <div className="relative">
          <div className="hidden sm:block absolute -left-15 -top-14 w-48 h-30 bg-secondary-80 rounded-full z-0 transform -rotate-12"></div>
          <Link  href="/" className="relative z-10">
            <Image src="/logo.png" alt="logo" width={115} height={40} />
          </Link>
        </div>
        <div>
          {/* Search icon for mobile */}
          <Search className="sm:hidden" />
        </div>
        {/* Menu desktop */}
        <div className="hidden sm:flex items-center gap-6 ">
          {renderLinks("text-sm font-medium")}

          {/* Barre de recherche */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full bg-white rounded-full px-4 py-2 pl-10 shadow outline-none"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <button className="bg-[#003459] text-white px-2 py-1  lg:px-7 rounded-full font-medium">
            Join the community
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/etoile.png" alt="flag" width={16} height={16} />
            VDN <ChevronDown />
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-full bg-[#FCEED5] h-screen flex flex-col gap-6 p-6 transition-transform duration-300 sm:hidden z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {renderLinks(
            "px-2 py-3 rounded-sm bg-secondary-80 text-center text-white font-bold text-2xl"
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
