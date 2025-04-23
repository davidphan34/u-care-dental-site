// src/pages/contact.tsx
import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="text-center px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Have questions or need to book an appointment? Reach out and we’ll be happy to help.
        </p>

        <div className="text-left max-w-md mx-auto space-y-3 text-gray-700">
          <p><strong>📍 Address:</strong> 123 Dental Lane, YourCity, CA</p>
          <p><strong>📞 Phone:</strong> (123) 456-7890</p>
          <p><strong>📧 Email:</strong> info@ucaredental.com</p>
        </div>
      </section>
    </Layout>
  );
}
