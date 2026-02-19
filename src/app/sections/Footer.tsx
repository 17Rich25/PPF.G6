import React from "react";
import { ArrowUp } from "lucide-react";
import { WSection } from "../components/WireframeComponents";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-mono text-2xl font-bold mb-2">GROUP 6 PORTFOLIO</h3>
          <p className="text-gray-400 text-sm font-mono">
            &copy; 2026 Group 6. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
        >
          Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
