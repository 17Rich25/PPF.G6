import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { WSection, WBox } from "../components/WireframeComponents";

const projects = [
  { id: 1, title: "Ludo App", height: 400, desc: "A fun and creative way to relieve your stress and chill." },
  { id: 2, title: "Sticky Notes App", height: 300, desc: "A safe space to write your little ideas or events." },
  { id: 3, title: "Day Planner", height: 500, desc: "You're never behind schedule with a tool like this." },
  { id: 4, title: "Finance Tracker", height: 350, desc: "Visualize your spending habits with D3.js." },
  { id: 5, title: "Drawing Board", height: 450, desc: "Create art with ease." },
];

const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative mb-6 break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <WBox thick className="overflow-hidden bg-gray-100 group cursor-pointer relative">
        <div style={{ height: project.height }} className="w-full flex items-center justify-center bg-gray-50 relative">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent" />
             <span className="font-mono text-gray-300 text-6xl font-black rotate-[-45deg] select-none">
                PROJECT {project.id}
             </span>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
              className="absolute inset-0 bg-black/90 text-white p-6 flex flex-col justify-end"
            >
              <h3 className="text-2xl font-bold font-mono mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-6">{project.desc}</p>
              <div className="flex gap-4">
               <a href="src\app\sections\public\ludo.html" target="_blank" rel="noopener noreferrer"> <button className="flex items-center gap-2 px-4 py-2 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  <ExternalLink size={14} /> Live
                </button>
                </a>
                <button className="flex items-center gap-2 px-4 py-2 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                  <Github size={14} /> Code
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </WBox>
    </motion.div>
  );
};

export const FeaturedProjects = () => {
  return (
    <WSection id="featured" title="WORK">
      <div className="flex justify-between items-end mb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 dark:text-white">Selected Works</h2>
          <p className="font-mono text-gray-500 dark:text-gray-400">
            A curation of my best projects, focusing on user experience and technical excellence.
          </p>
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="24px">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <div className="flex justify-center mt-12">
        <a 
          href="#all-projects"
          className="group flex items-center gap-2 font-mono text-lg border-b-2 border-black dark:border-white pb-1 hover:pb-2 transition-all dark:text-white"
        >
          View All Projects <Eye size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </WSection>
  );
};
