import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to U-Care Dental
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Providing gentle, high-quality dental care to our community.
          Book your next appointment with confidence and comfort.
        </p>
      </section>
    </Layout>
  );
}
