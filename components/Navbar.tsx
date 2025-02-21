"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../public/npwa-logo.png';
import Link from "next/link";
import Image from "next/image";

const sections = [
  "About",
  "Events",
  "Membership",
  "FAQs",
  "Contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0; 
      const yOffset = -navbarHeight - 0; // Offset based on navbar height + extra spacing for better visibility
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex gap-4 justify-center items-center">
          <Image className="h-10 scale-150" src={logo.src} alt="NPWA Logo" />
          <h1 className=" text-xl font-bold text-green-600 leading-none">National Pharmacy <br />  Welfare Association</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-4 py-2 text-gray-600 transition ${
                activeSection === section
                  ? "bg-green-500 text-white font-bold rounded-md"
                  : "hover:text-blue-500"
              }`}
            >
              {section}
              {/* Smooth Bottom Border Animation on Hover */}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

          {/* Committee Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
              className={`relative flex items-center px-4 py-2 transition ${
                activeSection === "Committee"
                  ? "bg-green-500 text-white font-bold rounded-md"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Committee <ChevronDown size={16} className="ml-1" />
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {isCommitteeOpen && (
              <motion.div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <Link
                  href="/committee/local-organizing-committee"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition"
                >
                  Local Organizing Committee
                </Link>
                <Link href="/committee/advisory-committee"
                  className="block w-full px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition"
                  onClick={() => scrollToSection("AdvisoryCommittee")}
                >
                  Advisory Committee
                </Link >
              </motion.div>
            )}
          </div>

          {/* Login & Register Buttons */}
          <div className="flex space-x-4">
            <motion.button
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg transition hover:bg-blue-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
            
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-gray-600 transition text-lg ${
                activeSection === section
                  ? "bg-green-500 text-white font-bold rounded-md px-4 py-2"
                  : "hover:text-blue-500"
              }`}
            >
              {section}
            </button>
          ))}

          {/* Committee Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
              className="flex items-center text-gray-600 hover:text-blue-500 transition text-lg"
            >
              Committee <ChevronDown size={16} className="ml-1" />
            </button>
            {isCommitteeOpen && (
              <motion.div
                className="mt-2 bg-white shadow-lg rounded-lg py-2 flex flex-col items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href="/committee/local-organizing-committee"
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition w-full text-center"
                >
                  Local Organizing Committee
                </Link>
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-500 transition w-full text-center"
                  onClick={() => scrollToSection("AdvisoryCommittee")}
                >
                  Advisory Committee
                </button>
              </motion.div>
            )}
          </div>

          {/* Login & Register Buttons */}
          <div className="flex space-x-4 mt-4">
            <motion.button
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg transition hover:bg-blue-600 hover:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;