import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-black dark:border-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 font-mono font-bold text-xl border-2 border-black dark:border-white px-2 py-1 cursor-pointer transition-all w-[120px] justify-center"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <span className="dark:text-white">{isLogoHovered ? "GROUP 6" : "G6"}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-mono">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:underline underline-offset-4 decoration-2 decoration-black dark:decoration-white dark:text-white"
            >
              {item.toUpperCase()}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 border border-black dark:border-white rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors dark:text-white"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4 dark:text-white">
          <button onClick={toggleTheme} className="p-1">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={toggleMenu} className="p-1 border border-black dark:border-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-black"
          >
            <div className="flex flex-col p-6 space-y-4 font-mono text-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg py-2 border-b border-dashed border-gray-300 hover:bg-gray-50"
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
