import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-700 py-14">
      <div className="container mx-auto">
        {/* Section d'inscription à la newsletter */}
        <div className="bg-primary-80 rounded-xl py-6 md:py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-12">
          <h3 className="text-white text-lg md:text-xl font-bold text-center md:text-left">
            Register Now So You Don&apos;t Miss <br className="hidden md:inline" />Our Programs
          </h3>
          <div className="flex flex-col sm:flex-row items-center p-2 justify-center space-y-6 sm:space-y-0 sm:space-x-4 w-full md:w-[707px] h-auto bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-3 py-2 sm:w-[508px] h-auto rounded-lg border border-gray-600 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 w-full sm:w-auto bg-primary-80 text-white rounded-lg font-medium transition-colors hover:bg-purple-600">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center my-4 justify-between space-y-6 md:space-y-0">
          {/* Liens de navigation */}
          <div className="flex space-x-6 text-gray-900 font-medium">
            <Link href="/" className="hover:text-purple-500">Home</Link>
            <Link href="/category" className="hover:text-purple-500">Category</Link>
            <Link href="/about" className="hover:text-purple-500">About</Link>
            <Link href="/contact" className="hover:text-purple-500">Contact</Link>
          </div>

          {/* Icônes sociales */}
          <div className="flex space-x-4 text-xl">
            <Link href="#" aria-label="Facebook" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-left text-gray-500">
            © 2022 Monito. All rights reserved
          </p>

          {/* Logo responsive */}
          <div className="relative  flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Monito Logo"
            width={115}
            height={40}
              className="object-contain"
            />
          </div>

          <div className="flex space-x-6 text-gray-500">
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
