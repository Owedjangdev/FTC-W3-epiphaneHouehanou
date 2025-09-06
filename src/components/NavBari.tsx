"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

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
    <div className=" px-5 md:px-[13%] py-4 fixed">
      <div className="flex justify-between items-center gap-4">{/* Bouton mobile */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
       
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={115} height={40} />
        </div>

               <Search className=" sm:hidden   " />
          

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
        <div className="hidden sm:flex items-center gap-4">
          <button className="bg-[#003459] text-white px-5 py-2 rounded-full font-medium">
            Join the community
          </button>

          {/* Sélecteur de langue */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-red-600 text-lg">🔴</span>
            <span>VND</span>
          </div>
        </div>

        
      </div>

      {/* Menu mobile */}
      <div
        className={`absolute top-0 w-full bg-[#FCEED5] h-screen flex flex-col gap-4 p-6
          transition-all duration-300 sm:hidden z-50 ${
            menuOpen ? "left-0" : "left-full"
          }`}
      >
        <div className="flex justify-between items-center">
          <button
            className="  sm:hidden "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {renderLinks("px-2 py-2 roundede-sm bg-secondary-80 text-center text-white font bold text-2xl")}

       
       
      </div>
    </div>
  );
};

export default NavBar;







