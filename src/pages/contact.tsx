import Layout from "@/components/Layout";
import GradientSection from "@/components/GradientSection";
import { motion } from "framer-motion";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
    return (
      <Layout>
        <GradientSection>
          <section className="px-6 py-20 text-gray-800">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">We would love to hear from you</h1>
                <p className="text-lg text-gray-700">
                  Give us a call:{" "}
                  <a href="tel:8586580691" className="text-blue-600 hover:underline font-semibold">
                    (858) 658-0691
                  </a>
                </p>
                <p className="text-lg text-gray-700 mt-2">or leave us a message below</p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="pl-10 border border-gray-300 rounded-lg p-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  />
                </div>
  
                {/* Email */}
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="pl-10 border border-gray-300 rounded-lg p-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  />
                </div>
  
                {/* Phone */}
                <div className="relative md:col-span-2">
                  <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="pl-10 border border-gray-300 rounded-lg p-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  />
                </div>
  
                {/* Message */}
                <div className="relative md:col-span-2">
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400 absolute left-3 top-4" />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="pl-10 border border-gray-300 rounded-lg p-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  ></textarea>
                </div>
  
                {/* Button */}
                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </section>
        </GradientSection>
      </Layout>
    );
  }