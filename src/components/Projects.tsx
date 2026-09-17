import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./Hero";

const Projects = () => (
  <section id="work" className="scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Two systems, built end to end."
        body="Not demos — a retrieval engine with cited answers and an ML service with tracking, APIs, and containers. Everything below maps to code and decisions I can walk through."
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
                  <span className="font-mono text-[12px] text-zinc-500">{p.index}</span>
                  <span className="h-px w-8 bg-white/15" />
                  <span className="label text-zinc-500">{p.date}</span>
                </div>
                <h3 className="font-display text-2xl md:text-[34px] leading-tight text-[#ece9e2]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium text-zinc-300">{p.tagline}</p>
                <p className="mt-3 text-[14px] text-zinc-400 leading-relaxed">{p.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[14px] text-zinc-300 leading-relaxed">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#b8e62e]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-zinc-400 border border-white/[0.08] bg-white/[0.02] rounded-md px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:w-[300px] shrink-0">
                <div className="rounded-xl border border-white/[0.08] bg-black/40 p-5">
                  <p className="label text-zinc-500 mb-4">How it flows</p>
                  <ol className="space-y-0">
                    {p.architecture.map((step, si) => (
                      <li key={step} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span className="font-mono text-[10px] text-zinc-500 border border-white/10 rounded-full w-5 h-5 flex items-center justify-center">
                            {si + 1}
                          </span>
                          {si < p.architecture.length - 1 && <span className="w-px flex-1 bg-white/10 my-1" />}
                        </div>
                        <span className="text-[13px] text-zinc-300 pb-4">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center justify-between rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-[13px] font-medium text-zinc-200 hover:border-white/25 hover:bg-white/[0.07] transition-all"
                  >
                    View on GitHub
                    <ArrowUpRight size={15} className="text-zinc-500" />
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
        className="mt-8 text-center text-[14px] text-zinc-500"
      >
        Earlier explorations — time-series forecasting, credit scorecards, NLP discovery — live on{" "}
        <a
          href="https://github.com/pavansy6"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-200 underline underline-offset-4 decoration-white/25 hover:decoration-white/60"
        >
          GitHub
        </a>
        .
      </motion.p>
    </div>
  </section>
);

export default Projects;
