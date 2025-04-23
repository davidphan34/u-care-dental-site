// src/pages/services.tsx
import Layout from "@/components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      <section className="text-center px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h1>
        <ul className="text-gray-600 max-w-2xl mx-auto space-y-4 text-left">
          <li>🦷 Comprehensive Exams & Cleanings</li>
          <li>🪥 Preventive Care & Education</li>
          <li>🦷 Fillings, Crowns & Bridges</li>
          <li>😁 Cosmetic Dentistry (Whitening, Veneers)</li>
          <li>🦷 Root Canals & Extractions</li>
          <li>🦷 Dentures & Restorative Dentistry</li>
        </ul>
      </section>
    </Layout>
  );
}
