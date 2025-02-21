"use client";
import { motion } from "framer-motion";
import logo from "../../public/npwa-logo.png"

const About = () => {
  return (
    <section
      id="About"
      className="h-screen sm:mt-10 flex items-center justify-center relative"
    >
      <motion.div
        className="h-3/4 flex text-center p-8 bg-white rounded-lg flex-col sm:flex-row sm:justify-center sm:items-center sm:px-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img  className="h-48 sm:h-80 mx-auto " src={logo.src} alt="logo" />
        
        <motion.h1 initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
         className="text-4xl sm:text-6xl text-wrap font-bold sm:w-2/4 text-blue-600">National Pharmacy <br /> Welfare Association Pune</motion.h1>
        {/* <p className="mt-4 text-gray-600">This is the About section content.</p> */}
      </motion.div>
    </section>
  );
};

export default About;
