import React, { useState } from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../index.css";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="max-w-7xl mx-auto px-4">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
            {/* Left Content */}
            <div className="mt-[80px] md:mt-0 px-4 md:px-6 space-y-12 text-[var(--color-light-orange)] max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-1 sm:pl-20"
              >
                Black Tumbler
              </motion.h1>

              <div className="hidden md:block pt-20 pl-20">
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6,
                  }}
                  className="relative "
                >
                  <div className="relative z-10 space-y-3">
                    <h2 className="text-lg lg:text-xl font-medium">
                      Black lifestyle Lovers,
                    </h2>
                    <p className="text-sm md:text-base opacity-50 leading-relaxed max-w-[300px]">
                      Lorem ipsum Incidunt perferendis repudiandae, sed harum
                      repellendus aspernatur neque quae culpa, non laboriosam
                      nisi.
                    </p>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[300px] h-[210px] bg-gray-700/25" />
                </motion.div>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                src={CoffeeMain}
                alt="Coffee"
                className="relative z-40 h-[380px] md:h-[700px] sm:pb-25 sm:h-[600px] img-shadow"
              />

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-24 -right-16 h-[180px] w-[180px] rounded-full z-10 border-[20px]"
                style={{ color: "var(--color-primary)" }}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1
                  className="text-[140px] font-bold leading-none pl-18 pt-20"
                  style={{ color: "rgba(var(--color-dark-gray-rgb), 0.3)" }}
                >
                  Black Tumbler
                </h1>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="mt-[100px] md:mt-0 p-10 space-y-16 text-[var(--color-light-orange)]"
              >
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  Black Tumbler
                </h1>

                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-2xl">Black Tumbler</h1>
                    <p className="text-sm opacity-50 leading-loose max-w-[280px]">
                      Lorem ipsum Incidunt perferendis repudiandae, sed harum
                      repellendus aspernatur neque quae culpa, non laboriosam.
                    </p>
                  </div>
                  <div
                    className="absolute -top-6 -left-10 w-[300px] h-[210px]"
                    style={{
                      background: "rgba(var(--color-dark-gray-rgb), 0.7)",
                    }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sidebar Socials */}
        <AnimatePresence>
          {sidebar && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="absolute top-0 right-0 w-[180px] h-full backdrop-blur-sm z-50"
              style={{
                background: `linear-gradient(to bottom, var(--color-primary), var(--color-primary-dark))`,
                opacity: 0.8,
              }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-6 text-white">
                  <div className="w-[1px] h-[70px] bg-white"></div>
                  {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                    <div
                      key={i}
                      className="inline-block p-2 rounded-full cursor-pointer border border-white"
                    >
                      <Icon className="text-2xl" />
                    </div>
                  ))}
                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Hero;
