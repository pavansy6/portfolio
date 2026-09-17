import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";

const bulletListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const Projects = () => (
  <section id="work" className="scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Two systems, built end to end."
        body="Not demos: a retrieval engine with cited answers and an ML service with tracking, APIs, and containers. Everything below maps to code and decisions I can walk through."
      />

      <div className="grid gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="card card-hover p-7 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 hairline opacity-60" />
            <div className="flex flex-col lg:flex-row lg:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[12px] text-stone-500">{p.index}</span>
                  <span className="h-px w-8 bg-stone-900/15 dark:bg-stone-100/15" />
                  <span className="label text-stone-500">{p.date}</span>
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-tight text-[#1c1917] dark:text-[#ede9e3]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium text-stone-700 dark:text-stone-300">{p.tagline}</p>
                <p className="mt-3 text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed">{p.description}</p>

                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={bulletListVariants}
                  className="mt-5 space-y-2.5"
                >
                  {p.bullets.map((b) => (
                    <motion.li key={b} variants={bulletVariants} className="flex gap-3 text-[14px] text-stone-700 leading-relaxed">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#c9a96a]" />
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-stone-500 border border-stone-900/10 bg-stone-900/[0.02] rounded-md px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:w-[300px] shrink-0">
                <div className="rounded-xl border border-stone-900/10 dark:border-stone-100/10 bg-[#f5f3ec] dark:bg-stone-800/50 p-5">
                  <p className="label text-stone-500 mb-4">How it flows</p>
                  <ol className="space-y-0">
                    {p.architecture.map((step, si) => (
                      <li key={step} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span className="font-mono text-[10px] text-stone-500 border border-stone-900/15 dark:border-stone-100/15 rounded-full w-5 h-5 flex items-center justify-center">
                            {si + 1}
                          </span>
                          {si < p.architecture.length - 1 && <span className="w-px flex-1 bg-stone-900/10 dark:bg-stone-100/10 my-1" />}
                        </div>
                        <span className="text-[13px] text-stone-700 pb-4">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center justify-between rounded-lg bg-white dark:bg-stone-900 border border-stone-900/10 dark:border-stone-100/10 px-4 py-3 text-[13px] font-medium text-stone-700 dark:text-stone-300 hover:border-stone-900/25 dark:hover:border-stone-100/25 transition-all"
                  >
                    View on GitHub
                    <ArrowUpRight size={15} className="text-stone-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 text-center text-[14px] text-stone-500"
      >
        Earlier explorations (time-series forecasting, credit scorecards, NLP discovery) live on{" "}
        <a
          href="https://github.com/pavansy6"
          target="_blank"
          rel="noreferrer"
          className="text-stone-700 underline underline-offset-4 decoration-stone-900/25 hover:decoration-stone-900/60"
        >
          GitHub
        </a>
        .
      </motion.p>
    </div>
  </section>
);

export default Projects;
