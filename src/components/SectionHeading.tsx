import { motion } from "framer-motion";

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
    <h2 className="font-display text-4xl md:text-5xl text-[#1c1917] dark:text-[#ede9e3] leading-[1.05] max-w-2xl">
      {title}
    </h2>
    {body && <p className="mt-5 text-stone-600 dark:text-stone-400 text-[15px] md:text-base leading-relaxed max-w-2xl">{body}</p>}
  </motion.div>
);
