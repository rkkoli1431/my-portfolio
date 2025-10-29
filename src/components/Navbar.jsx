import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]">
              RK
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`relative px-2 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  ></motion.span>
                )}
              </motion.button>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-md"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div whileTap={{ scale: 0.9 }} className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-md"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none transition duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-inner"
          >
            <div className="px-4 pt-3 pb-5 space-y-3">
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium tracking-wide transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
