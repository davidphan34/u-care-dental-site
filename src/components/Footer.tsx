import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="text-center md:text-left text-sm">
          <a href="tel:8586580691" className="font-semibold">
                  (858) 658-0691
          </a>
          <p>6255 Lusk Blvd Suite 250, San Diego, CA 92121</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/ucare.dental.7" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook_icon.png" alt="Facebook" width={24} height={24} className="hover:opacity-80" />
          </a>
        </div>
      </div>
    </footer>
  );
}
