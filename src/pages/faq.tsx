import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import FAQItem so framer-motion doesn't break SSR
const FAQItem = dynamic(() => import("@/components/FAQItem"), { ssr: false });

export default function FAQPage() {
  return (
    <Layout>
      <GradientSection>
        <div className="px-6 py-20 max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Got a question?</h1>
        <p className="text-lg text-gray-800">
            We’ve got answers to help you feel confident and informed before your visit.
        </p>
        </div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6">
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
      </GradientSection>
    </Layout>
  );
}
