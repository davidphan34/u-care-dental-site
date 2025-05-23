// pages/index.tsx
import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const FAQItem = dynamic(() => import("@/components/FAQItem"), { ssr: false });

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh]">
        <Image
          src="/images/beach.jpg"
          alt="U-Care Dental Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Welcome to UCare Dental</h1>
          <p className="text-lg max-w-xl mb-6">
            Gentle, high-quality care in the heart of San Diego.
          </p>
          <Link
            href="/contact"
            className="ucare-button px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <GradientSection>
        <section className="px-6 py-20 text-gray-800">
          <motion.div 
            className="max-w-6xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h4 className="text-7xl font-bold ucare-header">Featured Services</h4>
            <p className="text-lg text-ucare mt-2">Highlighting our most requested treatments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-8xl mx-auto">
            {/* Card */}
            <Link href="/services/crowns" className="ucare-button-3 rounded-xl shadow-md p-6 text-center transition">
              <Image src="/images/crown.png" alt="Crown icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2 ucare-header">Single-visit Crowns</div>
              <p className="text-sm text-ucare">A dental crown restores the shape and strength of your teeth. With CEREC®, we now provide single-visit crowns.</p>
            </Link>

            <Link href="/services/implants" className="ucare-button-3 rounded-xl shadow-md p-6 text-center hover:bg-gray-200 transition">
              <Image src="/images/implant.png" alt="Cleanings icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2 ucare-header">Implants</div>
              <p className="text-sm text-ucare">Dental implants restore missing teeth with a secure, long-lasting solution that support your bite and smile.</p>
            </Link>

            <Link href="/services/orthodontics" className="ucare-button-3 rounded-xl shadow-md p-6 text-center hover:bg-gray-200 transition">
              <Image src="/images/braces.png" alt="Braces icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2 ucare-header">Orthodontics</div>
              <p className="text-sm text-ucare">We offer Fastbraces®, a technology that aligns your teeth much quicker than traditional braces.</p>
            </Link>

            <Link href="/services/fillings" className="ucare-button-3 rounded-xl shadow-md p-6 text-center hover:bg-gray-200 transition">
              <Image src="/images/filling.png" alt="Fillings icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2 ucare-header">Fillings</div>
              <p className="text-sm text-ucare">Natural-looking fillings to restore strength and function.</p>
            </Link>
          </motion.div>
        </section>

        <div className="border-t border-gray-300 max-w-7xl mx-auto my-16" />

        {/* Doctor Section */}
        <section className="px-6 py-20 text-gray-800">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-7xl font-bold ucare-header mb-4">Dr. Hien Bui, DMD</h2>
              <p className="text-xl leading-relaxed">
                Dr. Hien Bui is a resident of San Diego, California. He received his
                Bachelor of Science (B.S.) from the University of California, Davis and
                his Doctor of Dental Medicine degree (D.M.D.) from the University
                of Pennsylvania. He is a member of the American Dental Association,
                California Dental Association, and San Diego County Dental Society.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/images/DoctorBui.png"
                alt="Dr. Hien Bui"
                className="rounded-xl shadow-lg bg-[#f0efeb]"
                width={550}
                height={450}
                priority
              />
            </div>
          </motion.div>
        </section>

        <div className="border-t border-gray-300 max-w-7xl mx-auto my-16" />

        {/* FAQ Section */}
        <section className="px-6 py-20 text-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-7xl font-bold ucare-header">FAQ</h2>
            </div>
            <div className="bg-[#f0efeb] backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-6xl mx-auto space-y-6">
              <FAQItem
                question="What services do you offer?"
                answer="We offer general, cosmetic, and restorative dental care including cleanings, crowns, root canals, whitening, and more."
              />
              <FAQItem
                question="How do I book an appointment?"
                answer="You can call us directly or use our contact form to request a date. We’ll reach out to confirm."
              />
              <FAQItem
                question="What’s your cancellation policy?"
                answer="Please give us at least 24 hours notice to cancel or reschedule. We’re happy to accommodate when possible."
              />
              <FAQItem
                question="Do you accept insurance?"
                answer="Yes! We work with most major dental insurance providers. Call us to check your coverage."
              />
            </div>
          </motion.div>
        </section>
      </GradientSection>
    </Layout>
  );
}
