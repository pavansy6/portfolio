import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data";
import { SectionHeading } from "./Hero";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const Experience = () => (
  <section id="experience" className="scroll-mt-24 border-t border-stone-900/[0.08]">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="02"
        label="Experience"
        title="Where I've done the work."
        body="A specialist shipping AI systems today, trained on messy enterprise data: insurance pipelines, NLP dedup, and large-scale migrations before that."
      />

      <div className="space-y-5">
        {experience.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="card card-hover p-7 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[12px] text-stone-500">{e.index}</span>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-[0.14em] rounded-full px-3 py-1 border ${
                      i === 0
                        ? "text-[#8a6d1f] border-[#c9a96a]/40 bg-[#c9a96a]/10"
                        : "text-stone-500 border-stone-900/10 bg-stone-900/[0.03]"
                    }`}
                  >
                    {i === 0 ? "Current" : "Previous"}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#1c1917]">{e.company}</h3>
                <p className="mt-1.5 text-[15px] font-medium text-stone-700">{e.role}</p>
              </div>
              <div className="shrink-0 text-left md:text-right">
                <p className="font-mono text-[12px] text-stone-700">{e.period}</p>
                <p className="mt-1.5 flex md:justify-end items-center gap-1.5 text-[13px] text-stone-500">
                  <MapPin size={13} /> {e.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[14px] text-stone-600 leading-relaxed border-l-2 border-[#c9a96a]/60 pl-4">
              {e.summary}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={listVariants}
              className="mt-6 grid gap-3 md:grid-cols-2"
            >
              {e.points.map((pt) => (
                <motion.li
                  key={pt}
                  variants={itemVariants}
                  className="rounded-lg border border-stone-900/[0.08] bg-[#f5f3ec] p-4 text-[13.5px] text-stone-700 leading-relaxed"
                >
                  {pt}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {e.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-stone-500 border border-stone-900/10 rounded-md px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
