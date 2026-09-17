import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { profile, marqueeItems } from "../data";
import CountUp from "./CountUp";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export const SectionHeading = ({
  index,
  label,
  title,
  body,
}: {
  index: string;
  label: string;
  title: string;
  body?: string;
}) => (
  <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-12 md:mb-16">
    <div className="flex items-center gap-3 mb-5">
      <span className="label text-stone-500">{index}</span>
      <span className="h-px w-10 bg-stone-900/15" />
      <span className="label text-stone-500">{label}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl text-[#1c1917] leading-[1.05] max-w-2xl">
      {title}
    </h2>
    {body && <p className="mt-5 text-stone-600 text-[15px] md:text-base leading-relaxed max-w-2xl">{body}</p>}
  </motion.div>
);

const stats = [
  { value: 98, decimals: 0, suffix: "%", label: "faster execution after migrating SQL Server pipelines to Databricks" },
  { value: 8.5, decimals: 1, suffix: "", label: "CGPA across the B.Sc. in Data Science and Business Analytics" },
  { value: 2, decimals: 0, suffix: "", label: "production systems shipped end to end: RAG engine and churn API" },
  { value: 5, decimals: 0, suffix: "", label: "stack layers covered: APIs, agents, cloud, retrieval, MLOps" },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden">
      <motion.div style={{ y: gridY }} className="absolute inset-0 grid-bg" />
      <motion.div
        style={{ y: glowY }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-[#8a6d1f]/[0.10] blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute top-20 -right-32 w-[420px] h-[420px] rounded-full bg-[#c9a96a]/[0.16] blur-[120px] pointer-events-none"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-14 md:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="flex items-center gap-2 text-[12px] text-stone-600 border border-stone-900/10 bg-white/70 rounded-full px-3.5 py-1.5">
            <MapPin size={13} className="text-stone-500" />
            {profile.location}
          </span>
          <span className="flex items-center gap-2 text-[12px] text-stone-600 border border-stone-900/10 bg-white/70 rounded-full px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a96a] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a96a]" />
            </span>
            {profile.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-display text-[42px] leading-[1.02] sm:text-6xl md:text-[84px] text-[#1c1917] max-w-4xl"
        >
          AI engineer building systems that survive <span className="italic text-[#8a6d1f]">production.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-7 text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I&apos;m Pavan Yadav. I design LLM assistants, hybrid retrieval, and agentic workflows
          that run on real enterprise data, from on-prem multi-skill copilots at{" "}
          <span className="text-stone-800 font-medium">SighBear Technologies</span> to large-scale
          risk pipelines at <span className="text-stone-800 font-medium">Marsh McLennan</span>.
          My work lives where research meets uptime: RAG, evaluation, APIs, and MLOps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 bg-[#1c1917] text-[#f7f5f0] font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-stone-800 transition-colors"
          >
            View selected work
            <ArrowDown size={16} />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2.5 border border-stone-900/15 bg-white/70 text-stone-700 text-sm rounded-full px-6 py-3.5 hover:border-stone-900/30 transition-colors font-mono"
          >
            {copied ? <Check size={15} className="text-[#8a6d1f]" /> : <Copy size={15} className="text-stone-400" />}
            {copied ? "Copied to clipboard" : profile.email}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors px-2 py-3"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-stone-900/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="pt-6 pr-6 pb-2">
              <dt className="font-display text-2xl md:text-[28px] text-[#1c1917]">
                <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </dt>
              <dd className="mt-1.5 text-[13px] text-stone-500 leading-snug">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* stack marquee */}
      <div className="relative border-y border-stone-900/[0.07] bg-white/70">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-3 py-4 px-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-stone-500 border border-stone-900/10 rounded-full px-4 py-1.5 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
