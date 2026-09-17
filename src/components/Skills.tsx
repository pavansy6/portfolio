import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skillGroups } from "../data";
import { SectionHeading } from "./Hero";

const pillListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const Skills = () => (
  <section id="stack" className="scroll-mt-24 border-t border-stone-900/[0.08]">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="03"
        label="Technical stack"
        title="Depth where it counts."
        body="Five layers I work across daily, from Python APIs to autonomous agents, retrieval infrastructure, and the MLOps that keeps it all running."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
            className={`card card-hover p-6 ${i === 1 ? "sm:col-span-2 lg:col-span-1 lg:row-span-1 border-[#c9a96a]/30" : ""}`}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-xl text-[#1c1917]">{g.title}</h3>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={pillListVariants}
              className="mt-4 flex flex-wrap gap-1.5"
            >
              {g.items.map((s) => (
                <motion.span
                  key={s}
                  variants={pillVariants}
                  className="text-[12.5px] text-stone-600 bg-stone-900/[0.03] border border-stone-900/10 rounded-md px-2.5 py-1 hover:border-stone-900/25 hover:text-stone-900 transition-colors"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Proof card fills the 6th slot */}
        <motion.a
          href="#experience"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="card card-hover p-6 bg-gradient-to-b from-[#c9a96a]/[0.15] to-transparent flex flex-col justify-between group"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">Proof</p>
            <h3 className="mt-2 font-display text-xl text-[#1c1917] leading-snug">
              Stack is only half the story. Here&apos;s where it shipped.
            </h3>
          </div>
          <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8a6d1f]">
            View experience
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </motion.a>
      </div>
    </div>
  </section>
);

export default Skills;
