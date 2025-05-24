import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FullService from "@/components/FullService";

export default function CleaningsPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src="/images/cleaningBanner.jpg"
          alt="Cleanings banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg">
            Cleanings
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <FullService service="cleaning" />

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="text-ucare font-medium hover:underline"
            >
              Ready to book? Contact us today →
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
