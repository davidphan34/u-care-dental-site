import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="ucare-footer text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image src="/images/logo.png" alt="U-Care Dental Logo" width={300} height={450} />
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-lg mb-4">EXPLORE OUR PAGE</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/office">Office</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-bold text-lg mb-4">OPENING HOURS</h3>
          <ul className="space-y-1">
            <li>Monday: 7:30 AM - 4:30 PM</li>
            <li>Tuesday: 7:30 AM - 11:30 AM</li>
            <li>Wednesday: 7:30 AM - 4:30 PM</li>
            <li>Thursday: 7:30 AM - 11:30 AM</li>
            <li>Friday: 7:30 AM - 4:30 PM</li>
            <li>Saturday - Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <a
                href="https://maps.google.com/?q=6255+Lusk+Blvd+Suite+250,+San+Diego,+CA+92121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ucare hover:underline mt-2"
              >
                <MapPinIcon className="h-4 w-4" />
                6255 Lusk Blvd, Suite 250<br />San Diego, CA 92121
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="tel:8586580691" className="flex items-center gap-2 text-ucare hover:underline">
                <PhoneIcon className="h-4 w-4" />
                (858) 658-0691
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
