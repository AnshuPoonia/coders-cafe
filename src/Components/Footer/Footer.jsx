import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div
        className="pt-12 pb-8 text-white"
        style={{
          background:
            "linear-gradient(to right, var(--color-primary), var(--color-primary-dark))",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident beatae perferendis magnam, dicta, architecto dolor
                molestiae ad.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +91 9729662238
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation />
                  Bhiwani, Haryana
                </p>
              </div>
            </motion.div>
            {/* Footer links */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold ">Quick Links</h1>
              <div className="grid grid-cols-2 gap-3">
                {/* First Column sec */}
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                {/* second column sec */}
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* social section */}
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold mb-2">Payment Methods</h1>
                <img src={CreditCards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="text-white text-center mt-8 pt-8 border-t-2"
          >
            Copyright &copy; 2025 All rights reserved.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Footer;
