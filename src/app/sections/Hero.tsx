import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowDown } from "lucide-react";

const typingVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 3, ease: "linear" } },
};

const cursorVariants = {
  blink: { opacity: 0, transition: { repeat: Infinity, duration: 0.8 } },
};

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Follow Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseSpringX = useSpring(mousePosition.x, { stiffness: 300, damping: 30 });
  const mouseSpringY = useSpring(mousePosition.y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* Mouse Follow Cursor (Only visible on larger screens) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black dark:border-white bg-transparent pointer-events-none z-50 hidden md:block"
        style={{ x: mouseSpringX, y: mouseSpringY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl px-6 space-y-6"
      >
        <div className="font-mono text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4 border border-dashed border-gray-400 dark:border-gray-600 inline-block px-4 py-1">
          12 Members | 12 Specialties | 1 Vision
        </div>

        <div className="relative inline-block">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={typingVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter overflow-hidden whitespace-nowrap border-r-4 border-black dark:border-white pr-2 dark:text-white"
          >
            GROUP 6.
          </motion.h1>
        </div>

        <p className="font-mono text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We are a collective of 12 passionate developers, each bringing unique expertise to build exceptional digital experiences.
          <br className="hidden md:block" /> Let's turn your ideas into reality together.
        </p>

        <div className="pt-8 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white font-mono font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            OUR WORK
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black dark:bg-black dark:text-white font-mono font-bold border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
          >
            CONTACT US
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black dark:text-white cursor-pointer"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>

      {/* Floating Elements (Decorative) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-20 right-20 w-24 h-24 border-2 border-dashed border-gray-300 rounded-full hidden lg:block opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-40 left-20 w-16 h-16 border border-gray-400 rotate-45 hidden lg:block opacity-50"
      />
    </section>
  );
};
