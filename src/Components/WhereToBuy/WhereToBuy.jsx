import React from "react";
import { motion } from "motion/react";
import Map from "../../assets/world-map.png";
const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36 pb-40 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">
          {/* Form Seciton */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type:"spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-4xl font-bold font-serif"
              style={{ color: "var(--color-dark-gray)" }}
            >
              Buy our Products from anywhere
            </motion.h1>
            <div className="flex flex-col gap-4">
              {/* First row */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.2,
                type:"spring",
                stiffness: 100,
                damping: 10,
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="input-style w-full lg:w-[150px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-style w-full"
                />
              </motion.div>

              {/* Second row */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.2,
                type:"spring",
                stiffness: 100,
                damping: 10,
                }}
                className="flex gap-4"
              >
                <input
                  type="text"
                  placeholder="Country"
                  className="input-style w-full"
                />
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="input-style w-full lg:w-[150px]"
                />
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type:"spring",
                stiffness: 100,
                damping: 10,
              }}
              className="primary-btn w-full"
            >
              Order Now
            </motion.button>
          </div>
          {/* World Map Section */}
          <div className="col-span-2">
            <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                delay:0.3,
                type:"spring",
                stiffness: 100,
                damping: 10,
            }}
            src={Map} alt="" className="w-full sm:w-[500px] mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
