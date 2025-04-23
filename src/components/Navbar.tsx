// src/components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">U-Care Dental</div>
          <div className="space-x-6 text-gray-700">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  