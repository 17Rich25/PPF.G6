import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WSection, WBox } from "../components/WireframeComponents";

const allProjects = [
  { id: 1, title: "Chat App", category: "React" },
  { id: 2, title: "Landing Page", category: "HTML/CSS" },
  { id: 3, title: "Weather App Simulator", category: "JavaScript" },
  { id: 4, title: "Todo List", category: "React" },
  { id: 5, title: "Graphics Design Application", category: "HTML/CSS" },
  { id: 6, title: "Blog Template", category: "Next.js" },
];

export const AllProjects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "HTML/CSS", "JavaScript", "React", "Next.js"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <WSection id="all-projects" className="bg-gray-50 dark:bg-black border-t border-dashed border-gray-300 dark:border-zinc-800">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 dark:text-white">Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-mono border transition-all ${
                filter === cat
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : "bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black dark:bg-black dark:text-gray-400 dark:border-zinc-700 dark:hover:border-white dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <WBox className="aspect-square flex flex-col justify-center items-center text-center p-4 group cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <div className="text-4xl font-black opacity-10 dark:opacity-20 mb-2 group-hover:opacity-20 transition-opacity">
                  {project.id < 10 ? `0${project.id}` : project.id}
                </div>
                <h3 className="font-bold text-lg leading-tight dark:text-white group-hover:dark:text-black">{project.title}</h3>
                <span className="text-xs mt-2 uppercase tracking-widest opacity-60 dark:text-gray-400 group-hover:dark:text-black">
                  {project.category}
                </span>
              </WBox>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </WSection>
  );
};
