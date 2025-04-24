import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "/data/images/logo.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="U-Care Dental Logo"
            width={130}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/featured" className="hover:text-blue-600">Featured</Link>
          <Link href="/team" className="hover:text-blue-600">Team</Link>
          <Link href="/office" className="hover:text-blue-600">Office</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/faq" className="hover:text-blue-600">FAQ</Link>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link href="/" className="block text-sm text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/services" className="block text-sm text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/featured" className="block text-sm text-gray-700 hover:text-blue-600">Featured</Link>
          <Link href="/team" className="block text-sm text-gray-700 hover:text-blue-600">Team</Link>
          <Link href="/office" className="block text-sm text-gray-700 hover:text-blue-600">Office</Link>
          <Link href="/contact" className="block text-sm text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/faq" className="block text-sm text-gray-700 hover:text-blue-600">FAQ</Link>
        </div>
      )}
    </nav>
  );
}
