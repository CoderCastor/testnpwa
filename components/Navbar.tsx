"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../public/npwa-logo.png';
import Link from "next/link";
import Image from "next/image";

const sections = ["About", "Events", "Membership", "FAQs", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex gap-4 justify-center items-center">
          <Image className="h-10 scale-150" src={logo.src} alt="NPWA Logo" />
          <h1 className="text-xl font-bold text-green-600 leading-none">
            National Pharmacy <br /> Welfare Association
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((section) => (
            <motion.button
              key={section}
              className={`relative px-4 py-2 text-gray-600 transition ${
                activeSection === section
                  ? "bg-green-500 text-white font-bold rounded-md"
                  : "hover:text-blue-500"
              }`}
            >
              {section}
            </motion.button>
          ))}

          {/* Committee Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
              className="relative flex items-center px-4 py-2 text-gray-600 hover:text-blue-500 transition"
            >
              Committee <ChevronDown size={16} className="ml-1" />
            </motion.button>
            {isCommitteeOpen && (
              <motion.div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link href="/committee/local-organizing-committee" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Local Organizing Committee</Link>
                <Link href="/committee/advisory-committee" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Advisory Committee</Link>
              </motion.div>
            )}
          </div>

          {/* Login Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Login <ChevronDown size={16} className="ml-1" />
            </motion.button>
            {isLoginOpen && (
              <motion.div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 py-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link href="/login/member" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Member</Link>
                <Link href="/login/admin" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Admin</Link>
                <Link href="/login/user" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">User</Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
