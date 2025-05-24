import Layout from "@/components/Layout";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import GradientSection from "@/components/GradientSection";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function OfficePage() {
    return (
      <Layout>
        <GradientSection>
        <section className="px-6 py-20 text-gray-800">
          <motion.h1
            className="text-5xl font-bold text-center text-ucare mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Office
          </motion.h1>
  
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Financial Options */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-ucare">Financial Options</h2>
              <p className="text-md mb-4">
                We are committed to providing quality and affordable dental health care. You have multiple
                options for payment available. For your convenience we accept cash, Visa, checks, major
                insurance, participating insurance, MasterCard, CareCredit, in-house plans, and Wells Fargo.
              </p>
              <p className="text-md">
                We understand that unexpected dental bills can sometimes strain finances. If this happens,
                talk with us immediately by calling{" "}
                <a href="tel:8586580691" className="font-semibold text-gray-500">
                  (858) 658-0691
                </a>
                . If you help us keep the lines of communication open, we can usually work out acceptable
                arrangements.
              </p>
            </div>

            {/* Office Hours */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-ucare">Office Hours</h2>
              <div className="grid grid-cols-2 gap-2 text-md">
                <div className="font-semibold space-y-2 text-ucare">
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>Friday</p>
                  <p>Saturday - Sunday</p>
                </div>
                <div className="space-y-2">
                  <p>7:30 AM - 4:30 PM</p>
                  <p>7:30 AM - 11:30 AM</p>
                  <p>7:30 AM - 4:30 PM</p>
                  <p>7:30 AM - 11:30 AM</p>
                  <p>7:30 AM - 4:30 PM</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
  
          <motion.div
            className="max-w-5xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Carousel
              showStatus={false}
              infiniteLoop
              emulateTouch
              showThumbs={false}
              className="rounded-xl shadow-md overflow-hidden"
            >
              <div>
                <Image src="/images/office1.jpg" alt="Lobby" width={800} height={500} className="w-full h-auto" />
              </div>
              <div>
                <Image src="/images/office2.jpg" alt="Front Desk" width={800} height={500} className="w-full h-auto" />
              </div>
              <div>
                <Image src="/images/office3.jpg" alt="Operatory" width={800} height={500} className="w-full h-auto" />
              </div>
            </Carousel>
          </motion.div>
        </section>
        </GradientSection>
      </Layout>
    );
  }