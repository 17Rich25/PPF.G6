import React, { useState } from "react";
import { Toaster } from "sonner";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { AllProjects } from "./sections/AllProjects";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Monitor, Smartphone, Tablet } from "lucide-react";

// Main Content Component
const PortfolioContent = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme} min-h-screen`}>
      <div className="bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen flex flex-col transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-16">
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
          <AllProjects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Device Frame Component with Iframe for "Board View"
const DeviceFrame = ({
  width,
  label,
  icon: Icon,
}: {
  width: string;
  label: string;
  icon: any;
}) => (
  <div className="flex flex-col items-center gap-4 shrink-0">
    <div className="flex items-center gap-2 font-mono text-sm uppercase font-bold text-gray-500">
      <Icon size={16} /> {label} ({width})
    </div>
    <div
      className="border-[10px] border-gray-800 rounded-3xl overflow-hidden bg-white shadow-2xl relative"
      style={{ width: width, height: "800px" }}
    >
      <iframe
        src={window.location.href}
        className="w-full h-full border-none bg-white"
        title={label}
        style={{ pointerEvents: "auto" }} // Allow interaction inside iframe
      />
    </div>
  </div>
);

export default function App() {
  const [viewMode, setViewMode] = useState<"live" | "board">("live");

  // Synchronous check for iframe to prevent flash of toggle
  const isIframe = typeof window !== 'undefined' && window.self !== window.top;

  // If inside an iframe, just render the content without the toggle
  if (isIframe) {
    return (
      <>
        <Toaster position="bottom-right" />
        <PortfolioContent />
      </>
    );
  }

  return (
    <>
      <Toaster position="bottom-right" />
      
      {/* View Mode Toggle (Only visible in top level) */}
      <div className="fixed bottom-6 right-6 z-[100] flex bg-black p-1 rounded-full shadow-2xl">
        <button
          onClick={() => setViewMode("live")}
          className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
            viewMode === "live"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          LIVE VIEW
        </button>
        <button
          onClick={() => setViewMode("board")}
          className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
            viewMode === "board"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          WIREFRAME BOARD
        </button>
      </div>

      {viewMode === "live" ? (
        <PortfolioContent />
      ) : (
        <div className="min-h-screen bg-gray-100 p-12 overflow-x-auto">
           <div className="mb-8 font-mono text-center">
             <h1 className="text-2xl font-bold uppercase">Responsive Wireframe Board</h1>
             <p className="text-gray-500">Scroll horizontally to see all breakpoints side-by-side</p>
           </div>
          <div className="flex gap-12 min-w-max mx-auto px-12 pb-12 items-start justify-center">
            {/* Desktop View */}
            <DeviceFrame width="1024px" label="Desktop" icon={Monitor} />

            {/* Tablet View */}
            <DeviceFrame width="768px" label="Tablet" icon={Tablet} />

            {/* Mobile View */}
            <DeviceFrame width="375px" label="Mobile" icon={Smartphone} />
          </div>
        </div>
      )}
    </>
  );
}
