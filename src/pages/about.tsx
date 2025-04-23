import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="text-center px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About U-Care Dental</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At U-Care Dental, we provide compassionate and high-quality dental care. 
          With years of experience and a commitment to patient comfort, we help you smile with confidence.
        </p>
      </section>
    </Layout>
  );
}
