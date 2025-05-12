import Image from "next/image";
import GradientSection from "@/components/GradientSection";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function FeaturedPage() {
  return (
    <Layout>
      <GradientSection>
        <section className="px-6 py-20 text-gray-800">
          <motion.div 
            className="max-w-6xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-blue-700">Featured Services</h2>
            <p className="text-gray-600 mt-2">Highlighting our most requested treatments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Card */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Image src="/images/crown.png" alt="Crown icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2">Single-visit Crowns</div>
              <p className="text-sm text-gray-600">A dental crown restores the shape and strength of your teeth. 
                With CEREC®, we now provide single-visit crowns. Typically, a crown will require 2 visits.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Image src="images/clean.png" alt="Cleanings icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2">Cleanings</div>
              <p className="text-sm text-gray-600">
                Routine cleanings and hygiene to keep your smile healthy.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Image src="/images/braces.png" alt="Braces icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2">Orthodontics</div>
              <p className="text-sm text-gray-600">Braces straighten out crooked teeth over time. We offer 
                Fastbraces®, a revolutionary, patented technology that aligns your teeth much quicker 
                than traditional braces.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Image src="/images/filling.png" alt="Fillings icon" width={64} height={64} className="mx-auto mb-4" />
              <div className="text-xl font-semibold mb-2">Fillings</div>
              <p className="text-sm text-gray-600">
                Natural-looking fillings to restore strength and function.
              </p>
            </div>
          </motion.div>
        </section>
      </GradientSection>
    </Layout>
  );
}
