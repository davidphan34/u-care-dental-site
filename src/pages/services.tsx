import { useState } from "react";
import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import FullService from "@/components/FullService";
import { motion } from "framer-motion";

const serviceList = [
  "bonding",
  "cleaning",
  "crowns",
  "fillings",
  "implants",
  "orthodontics",
  "veneers",
  "whitening",
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Layout>
      <GradientSection>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
        {selected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <FullService service={selected} />
            <div className="text-center mt-6">
              <button
                onClick={() => setSelected(null)}
                className="text-blue-600 hover:underline text-sm"
              >
                ← Back to all services
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-6xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700">
                Click a service to learn more about the treatments we provide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {serviceList.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelected(service)}
                  className="bg-white p-6 rounded-xl shadow-md text-blue-700 font-semibold text-center capitalize hover:bg-blue-50 transition"
                >
                  {service.replace("_", " ")}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </GradientSection>
    </Layout>
  );
}
