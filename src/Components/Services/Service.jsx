import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, Lorem ipsum.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, Lorem ipsum.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Black Coffee",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, Lorem ipsum.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
    },
  },
};

const containerVariants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const Service = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ color: "var(--color-light-gray)" }}
        >
          Fresh and{" "}
          <span
            className="text-primary"
            style={{ color: "var(--color-primary)" }}
          >
            Tasty
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          veritatis neque temporibus odio dignissimos iure velit eaque,
          reprehenderit, sequi ipsa, sed aut? Aliquam sapiente, illo laboriosam
          sed reiciendis accusantium magni!
        </motion.p>
      </div>

      {/* Cards Section */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {serviceData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm space-y-4 text-center hover:shadow-xl transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 w-[160px] sm:w-[180px] md:w-[200px] mx-auto object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500">{service.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
