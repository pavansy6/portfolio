import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check, MapPin } from "lucide-react";
import { useState } from "react";
import { profile, marqueeItems } from "../data";

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
      <span className="label text-zinc-500">{index}</span>
      <span className="h-px w-10 bg-white/15" />
      <span className="label text-zinc-400">{label}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl text-[#ece9e2] leading-[1.05] max-w-2xl">
      {title}
    </h2>
    {body && <p className="mt-5 text-zinc-400 text-[15px] md:text-base leading-relaxed max-w-2xl">{body}</p>}
  </motion.div>
);

const Hero = () => {
  const [copied, setCopied] = useState(false);
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
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-white/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute top-20 -right-32 w-[420px] h-[420px] rounded-full bg-[#b8e62e]/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 md:pt-44 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="flex items-center gap-2 text-[12px] text-zinc-300 border border-white/10 bg-white/[0.03] rounded-full px-3.5 py-1.5">
            <MapPin size={13} className="text-zinc-500" />
            {profile.location}
          </span>
          <span className="flex items-center gap-2 text-[12px] text-zinc-300 border border-white/10 bg-white/[0.03] rounded-full px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {profile.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-display text-[42px] leading-[1.02] sm:text-6xl md:text-[84px] text-[#ece9e2] max-w-4xl"
        >
          AI engineer building systems that survive <span className="italic text-zinc-400">production.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-7 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I&apos;m Pavan Yadav. I design LLM assistants, hybrid retrieval, and agentic workflows
          that run on real enterprise data — from on-prem multi-skill copilots at{" "}
          <span className="text-zinc-200 font-medium">SighBear Technologies</span> to large-scale
          risk pipelines at <span className="text-zinc-200 font-medium">Marsh McLennan</span>.
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
            className="inline-flex items-center justify-center gap-2 bg-[#ece9e2] text-[#0a0a0b] font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-white transition-colors"
          >
            View selected work
            <ArrowDown size={16} />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2.5 border border-white/12 bg-white/[0.03] text-zinc-200 text-sm rounded-full px-6 py-3.5 hover:border-white/25 transition-colors font-mono"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} className="text-zinc-500" />}
            {copied ? "Copied to clipboard" : profile.email}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-3"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.08]"
        >
          {[
            ["Enterprise AI", "LLM assistants in production"],
            ["Hybrid retrieval", "FAISS + BM25 + RRF"],
            ["98% faster", "SQL Server → Databricks migration"],
            ["8.5 CGPA", "B.Sc. Data Science & Business Analytics"],
          ].map(([k, v]) => (
            <div key={k} className="pt-6 pr-6 pb-2">
              <dt className="font-display text-2xl md:text-[28px] text-[#ece9e2]">{k}</dt>
              <dd className="mt-1.5 text-[13px] text-zinc-500 leading-snug">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* stack marquee */}
      <div className="relative border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-3 py-4 px-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-zinc-500 border border-white/[0.07] rounded-full px-4 py-1.5 whitespace-nowrap"
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
