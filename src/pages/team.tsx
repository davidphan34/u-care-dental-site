import Layout from "@/components/Layout";
import Image from "next/image";
import doctorImage from "/public/images/DoctorBui.png";
import GradientSection from "@/components/GradientSection";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <Layout>
      <GradientSection>
        <section className="px-6 py-20 text-gray-800">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} 
              className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Dr. Hien Bui, DMD</h2>
                <p className="text-lg leading-relaxed">
                Dr. Hien Bui is a resident of San Diego, California. He received his
                Bachelor of Science (B.S.) from the University of California, Davis and
                his Doctor of Dental Medicine degree (D.M.D.) from the University
                of Pennsylvania. He is a member of the American Dental Association,
                California Dental Association, and San Diego County Dental Society.
                </p>
            </div>

            {/* Image */}
            <div
              className="flex justify-center">
                <Image
                src={doctorImage}
                alt="Dr. Hien Bui"
                className="rounded-xl shadow-lg bg-gray-100 "
                width={350}
                height={450}
                priority
                />
            </div>
            </motion.div>
        </section>
      </GradientSection>
    </Layout>
  );
}
