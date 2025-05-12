import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const serviceList = [
  "bonding",
  "cleaning",
  "crowns",
  "fillings",
  "implants",
  "orthodontics",
  "veneers",
  "whitening",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-[130px]">
            <Image
              src="/images/logo.png"
              alt="U-Care Dental Logo"
              fill
              className="object-contain"
              sizes="130px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-xl text-gray-700 font-medium relative">
          <Link href="/" className="hover:text-blue-600">Home</Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-blue-600 cursor-pointer">Services</span>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                {serviceList.map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service}`}
                    className="block px-4 py-2 text-xl text-gray-700 hover:bg-blue-50 capitalize"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/team" className="text-xl hover:text-blue-600">Team</Link>
          <Link href="/office" className="text-xl hover:text-blue-600">Office</Link>
          <Link href="/contact" className="text-xl hover:text-blue-600">Contact</Link>
          <Link href="/faq" className="text-xl hover:text-blue-600">FAQ</Link>

        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link href="/" className="block text-sm text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/services" className="block text-sm text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/team" className="block text-sm text-gray-700 hover:text-blue-600">Team</Link>
          <Link href="/office" className="block text-sm text-gray-700 hover:text-blue-600">Office</Link>
          <Link href="/contact" className="block text-sm text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/faq" className="block text-sm text-gray-700 hover:text-blue-600">FAQ</Link>
        </div>
      )}
    </nav>
  );
}
