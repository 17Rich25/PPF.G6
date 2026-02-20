import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { WBox, WImage, WText, WSection, Annotation } from "../components/WireframeComponents";
import G6photo from "./g6-photo.jpg"

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Completed", value: "9+" },
    { label: "Combined Years Exp", value: "8+" },
    { label: "Team Members", value: "12" },
    { label: "Specialties Covered", value: "4+" },
  ];

  return (
    <WSection id="about" title="ABOUT">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* Photo Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <WBox dashed thick className="aspect-[4/3] p-4 rotate-2">
            <WImage 
            src={G6photo}
            aspect="aspect-full" 
            label="GROUP PHOTO" 
            className="h-full bg-gray-100"
            />
          </WBox>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-black bg-white flex items-center justify-center font-mono text-4xl font-bold -rotate-6 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            US!
          </div>
          <Annotation text="We're too busy to use a proper photo so we're using this instead" position="top-10 -left-10" rotate="-rotate-6" />
        </motion.div>

        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter dark:text-white">
              Who We Are
            </h2>
            <p className="font-mono text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-gray-300 dark:border-zinc-700 pl-4">
              Group 6 is a collection of 12 unique talents, comprising of first year cybersecurity students. From frontend wizards to backend architects,
              our diversity is our strength. We each specialize in different aspects of web development and cybersecurity. Together we combine our specialized skills to deliver
              comprehensive digital solutions.
            </p>
            <p className="font-mono text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-gray-300 dark:border-zinc-700 pl-4">Our members are:
               <ul>
                <li>Richie Simeon Olagunju</li>
                <li>MADUABUNA Josiah Chukwuweike</li>
                <li>KAZEEM Isreal Ayomikun</li>
                <li>YUSUF Oluwanifemi Mary</li>
                <li>CHIDEBERE Daniel Chidera</li>
                <li>AIYEGBUSI Eniola Joseph</li>
                <li>OKONKWO Chidera Emanuel</li>
                <li>OKEOWO Oluwatimilehin Temidire</li>
                <li>OKODASO Oghenetejiri Sarah</li>
                <li>NWOSU Harrision Kaito</li>
                <li>OGUNBANWO Paul Akinloluwa Favour</li>
                <li>OGUGUA-VERWEY KATJA CHUKWUZIMUZOR</li>
               </ul>
               </p>
            <WText lines={4} className="opacity-50 dark:opacity-30" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border border-black dark:border-white p-4 text-center hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default group"
              >
                <div className="text-3xl font-black font-mono mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 bg-transparent border-2 border-black dark:border-white font-mono font-bold uppercase hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            Download Resume
          </button>
        </motion.div>
      </div>
    </WSection>
  );
};
