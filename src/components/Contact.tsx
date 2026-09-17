import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Phone } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-stone-900/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="card relative overflow-hidden p-8 md:p-14"
        >
          <div className="absolute -top-24 right-0 w-[380px] h-[240px] rounded-full bg-[#c9a96a]/[0.18] blur-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <span className="label text-stone-500">05</span>
            <span className="h-px w-10 bg-stone-900/15" />
            <span className="label text-stone-500">Contact</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl leading-[1.03] text-[#1c1917] max-w-3xl">
            Have a hard retrieval or agent problem? <span className="italic text-[#8a6d1f]">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 text-stone-600 text-[15px] md:text-base leading-relaxed max-w-xl">
            I&apos;m most useful where LLMs meet messy enterprise reality: private deployments,
            hybrid search, evaluation, and services that stay up. Email is the fastest way to reach me.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 bg-[#1c1917] text-[#f7f5f0] font-semibold text-sm rounded-full px-7 py-4 hover:bg-stone-800 transition-colors"
            >
              {profile.email}
              <ArrowUpRight size={16} />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 border border-stone-900/15 text-sm text-stone-700 rounded-full px-7 py-4 hover:border-stone-900/30 transition-colors"
            >
              {copied ? <Check size={15} className="text-[#8a6d1f]" /> : <Copy size={15} className="text-stone-400" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-900/10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[14px] text-stone-500 hover:text-stone-900 transition-colors">
              <FaGithub size={16} /> github.com/pavansy6 <ArrowUpRight size={13} className="text-stone-400" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[14px] text-stone-500 hover:text-stone-900 transition-colors">
              <FaLinkedin size={16} /> linkedin.com/in/pavansyadav <ArrowUpRight size={13} className="text-stone-400" />
            </a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2.5 text-[14px] text-stone-500 hover:text-stone-900 transition-colors">
              <Phone size={16} /> {profile.phone}
            </a>
          </div>
        </motion.div>

        <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-stone-400">
          <p className="font-mono">© 2026 Pavan Yadav, Mumbai, India</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
