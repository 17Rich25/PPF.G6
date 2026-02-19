import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { WBox, WSection, Annotation } from "../components/WireframeComponents";
import { Code, Server, PenTool, Database } from "lucide-react";

const SkillItem = ({ label, percentage }: { label: string; percentage: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group relative mb-6">
      <div className="flex justify-between items-end mb-2 font-mono text-sm uppercase">
        <span className="font-bold">{label}</span>
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-gray-500"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full h-4 bg-gray-100 border border-black overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full bg-black relative"
        >
          <div className="absolute top-0 right-0 h-full w-1 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

const SkillCategory = ({ icon: Icon, title, skills }: any) => {
  return (
    <WBox thick className="p-6 h-full hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow bg-white">
      <div className="flex items-center space-x-3 mb-6 border-b-2 border-black pb-4">
        <div className="p-2 bg-black text-white rounded-none">
          <Icon size={24} />
        </div>
        <h3 className="font-mono text-xl font-bold uppercase">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill: any) => (
          <SkillItem key={skill.name} label={skill.name} percentage={skill.value} />
        ))}
      </div>
    </WBox>
  );
};

export const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React / Next.js", value: 95 },
        { name: "TypeScript", value: 90 },
        { name: "Tailwind CSS", value: 98 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", value: 85 },
        { name: "PostgreSQL", value: 80 },
        { name: "Supabase", value: 88 },
      ],
    },
    {
      title: "Design",
      icon: PenTool,
      skills: [
        { name: "Figma", value: 92 },
        { name: "Motion / Framer", value: 85 },
        { name: "UI/UX Principles", value: 80 },
      ],
    },
    {
      title: "Tools",
      icon: Database, // Just using database icon for tools generic
      skills: [
        { name: "Git / GitHub", value: 96 },
        { name: "Docker", value: 75 },
        { name: "AWS", value: 70 },
      ],
    },
  ];

  return (
    <WSection id="skills" title="SKILLS" className="bg-gray-50/50">
      <Annotation text="Hover effects reveal details" position="-top-4 left-1/2" rotate="rotate-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCategory {...cat} />
          </motion.div>
        ))}
      </div>
    </WSection>
  );
};
