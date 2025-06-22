import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-4 sm:pt-6 text-white z-[9999]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.1,
            }}
            className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider"
          >
            <span className="text-[var(--color-primary)]">Coders</span>{" "}
            Cafe
          </motion.h1>

          {/* Hamburger Icon */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)}
            aria-label="Toggle Sidebar"
            role="button"
            className="cursor-pointer text-white"
          >
            <GiHamburgerMenu className="text-2xl sm:text-3xl" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
