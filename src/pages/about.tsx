import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
    <GradientSection>
        <section className="text-gray-900 px-6 py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About U-Care Dental</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                U-Care Dental is committed to delivering gentle and high-quality care to patients in the San Diego area.
                Our experienced staff and state-of-the-art equipment ensure you get the best dental care possible.
            </p>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
            >
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                title="U-Care Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13448.757420129693!2d-117.1982637!3d32.9013621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc076cc50c9711%3A0xecbd46899bac3bba!2sUcare%20Dental!5e0!3m2!1sen!2sus!4v1713911111111"
                className="w-full h-96 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                ></iframe>
            </div>
            </motion.div>
        </section>
      </GradientSection>
    </Layout>
  );
}