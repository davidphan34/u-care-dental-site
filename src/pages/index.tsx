import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <Layout>
    <GradientSection>
    <section className="px-6 py-20 text-center text-gray-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to U-Care Dental
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            U-Care Dental is committed to delivering gentle, high-quality care to patients in the San Diego area.
            Our experienced staff and state-of-the-art equipment ensure you get the best dental care possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-4 max-w-2xl mx-auto"
        >
          <div className="w-full h-96">
            <iframe
              title="U-Care Dental Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13448.757420129693!2d-117.1982637!3d32.9013621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc076cc50c9711%3A0xecbd46899bac3bba!2sUcare%20Dental!5e0!3m2!1sen!2sus!4v1713911111111"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
  </div>
</motion.div>

      </div>
    </section>
  </GradientSection>
</Layout>

  );
}
