import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data";
import { SectionHeading } from "./SectionHeading";

const Education = () => (
  <section id="education" className="scroll-mt-24 border-t border-stone-900/[0.08] dark:border-stone-100/[0.08]">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="05"
        label="Education"
        title="Schooled in Mumbai, trained on data."
        body="From Andheri classrooms to a data-science degree, the foundation under the engineering."
      />

      <div className="card overflow-hidden">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-8 p-6 md:p-8 ${
              i < education.length - 1 ? "border-b border-stone-900/[0.08] dark:border-stone-100/[0.08]" : ""
            } hover:bg-stone-900/[0.02] dark:hover:bg-stone-100/[0.02] transition-colors`}
          >
            <span className="font-mono text-[12px] text-stone-400 w-10 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl md:text-2xl text-[#1c1917] dark:text-[#ede9e3]">{e.school}</h3>
                {e.badge && (
                  <span className="text-[12px] font-semibold text-[#1c1917] bg-[#c9a96a] rounded-full px-3 py-1">
                    {e.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[14px] text-stone-600">{e.program}</p>
            </div>
            <div className="shrink-0 md:text-right">
              <p className="font-mono text-[12px] text-stone-700">{e.period}</p>
              <p className="mt-1 flex md:justify-end items-center gap-1.5 text-[13px] text-stone-500">
                <MapPin size={13} /> {e.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 flex items-center gap-2.5 text-[13px] text-stone-500"
      >
        <GraduationCap size={15} className="text-stone-400" />
        Full academic and work history is also on LinkedIn.
      </motion.p>
    </div>
  </section>
);

export default Education;
