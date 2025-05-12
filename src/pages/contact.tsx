// pages/contact.tsx
import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, email, phone, message };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <Layout>
      {/* Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="/images/crownBanner.jpg"
          alt="Contact Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold">Contact Us</h1>
        </div>
      </div>

      {/* Gradient Background Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Let&apos;s Connect</h2>
            <p className="text-sm text-gray-600 mb-6">
                Need help or have a question? Send us a message and we&apos;ll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="w-full bg-white text-gray-800 p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full bg-white text-gray-800 p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  required
                  className="w-full bg-white text-gray-800 p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white text-gray-800 p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6 text-gray-800">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>

              <a href="tel:8586580691" className="flex items-center gap-2 text-blue-600 hover:underline">
                <PhoneIcon className="h-4 w-4" />
                (858) 658-0691
              </a>

              <a
                href="https://maps.google.com/?q=6255+Lusk+Blvd+Suite+250,+San+Diego,+CA+92121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline mt-2"
              >
                <MapPinIcon className="h-4 w-4" />
                6255 Lusk Blvd, Suite 250, San Diego, CA 92121
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <div className="grid grid-cols-2 text-sm">
                <span>Monday:</span> <span>7:30 AM - 4:30 PM</span>
                <span>Tuesday:</span> <span>7:30 AM - 11:30 AM</span>
                <span>Wednesday:</span> <span>7:30 AM - 4:30 PM</span>
                <span>Thursday:</span> <span>7:30 AM - 11:30 AM</span>
                <span>Friday:</span> <span>7:30 AM - 4:30 PM</span>
                <span>Saturday - Sunday:</span> <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
