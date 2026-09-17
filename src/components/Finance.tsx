import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const interests = [
  {
    title: "Algorithmic Trading",
    description: "Backtesting strategies on BTC and forex pairs. Fibonacci extensions, session sweeps, trailing stops.",
  },
  {
    title: "Quantitative Research",
    description: "Alpha factor engineering, walk-forward models, and portfolio optimization. Mostly LightGBM and regime detection.",
  },
  {
    title: "Market Microstructure",
    description: "Smart Money Concepts, order flow, and volatility clustering. Building intuition on how price actually moves.",
  },
];

const BigChart = () => (
  <svg viewBox="0 0 600 400" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="bigArea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c9a96a" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#c9a96a" stopOpacity="0.01" />
      </linearGradient>
      <linearGradient id="bigLine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c9a96a" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#c9a96a" stopOpacity="1" />
        <stop offset="100%" stopColor="#8a6d1f" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {/* Grid */}
    <g stroke="#1c1917" strokeOpacity="0.05" strokeWidth="0.5">
      {[60, 120, 180, 240, 300, 360].map((y) => (
        <line key={y} x1="40" y1={y} x2="580" y2={y} />
      ))}
      {[80, 160, 240, 320, 400, 480, 560].map((x) => (
        <line key={x} x1={x} y1="40" x2={x} y2="380" />
      ))}
    </g>

    {/* Volume bars at bottom */}
    <g opacity="0.15">
      {[40,90,140,190,240,290,340,390,440,490,540].map((x, i) => {
        const h = [25,18,32,22,40,28,35,20,45,30,38][i];
        return <rect key={x} x={x} y={380 - h} width="30" height={h} rx="2" fill="#c9a96a" />;
      })}
    </g>

    {/* Main equity curve */}
    <path
      d="M40,340 C70,338 90,335 120,328 C150,318 175,322 200,310 C225,298 250,305 280,288 C310,270 335,278 360,255 C385,232 410,240 435,218 C460,196 485,205 510,178 C535,155 555,162 575,135"
      stroke="url(#bigLine)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Area fill */}
    <path
      d="M40,340 C70,338 90,335 120,328 C150,318 175,322 200,310 C225,298 250,305 280,288 C310,270 335,278 360,255 C385,232 410,240 435,218 C460,196 485,205 510,178 C535,155 555,162 575,135 L575,380 L40,380 Z"
      fill="url(#bigArea)"
    />

    {/* Moving average */}
    <path
      d="M40,345 C80,340 120,332 160,324 C200,316 240,308 280,295 C320,282 360,268 400,250 C440,232 480,212 520,190 C540,180 560,168 575,155"
      stroke="#8a6d1f"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="4 4"
      fill="none"
      opacity="0.4"
    />

    {/* Key points */}
    <circle cx="200" cy="310" r="4" fill="#c9a96a" />
    <circle cx="200" cy="310" r="7" fill="#c9a96a" opacity="0.15" />
    <circle cx="360" cy="255" r="4" fill="#c9a96a" />
    <circle cx="360" cy="255" r="7" fill="#c9a96a" opacity="0.15" />
    <circle cx="575" cy="135" r="5" fill="#8a6d1f" />
    <circle cx="575" cy="135" r="9" fill="#8a6d1f" opacity="0.15" />

    {/* Labels */}
    <g fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#a8a29e">
      <text x="200" y="300" textAnchor="middle">entry</text>
      <text x="360" y="245" textAnchor="middle">scale</text>
      <text x="575" y="125" textAnchor="middle">exit</text>
    </g>

    {/* Baseline */}
    <line x1="40" y1="380" x2="580" y2="380" stroke="#1c1917" strokeOpacity="0.08" strokeWidth="0.5" />
  </svg>
);

const Finance = () => (
  <section id="finance" className="scroll-mt-24 border-t border-stone-900/[0.08] dark:border-stone-100/[0.08]">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        index="03"
        label="Interests"
        title="What I explore on my own time."
        body="Finance and markets are where I spend my personal hours. Not client work, just curiosity."
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Big chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card p-5 lg:flex-1 overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] text-[#c9a96a] tracking-[0.16em] uppercase">Equity Curve</span>
            <span className="h-px flex-1 bg-stone-900/8 dark:bg-stone-100/8" />
            <span className="font-mono text-[10px] text-stone-400">synthetic</span>
          </div>
          <div className="h-[260px] md:h-[320px]">
            <BigChart />
          </div>
        </motion.div>

        {/* Interest cards */}
        <div className="lg:w-[320px] flex flex-col gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card p-5 hover:border-[#c9a96a]/30 dark:hover:border-[#c9a96a]/20 transition-all duration-300"
            >
              <span className="font-mono text-[10px] text-[#c9a96a] tracking-[0.2em] uppercase">0{i + 1}</span>
              <h3 className="mt-1.5 font-display text-lg text-[#1c1917] dark:text-[#ede9e3] group-hover:text-[#8a6d1f] dark:group-hover:text-[#c9a96a] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] text-stone-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Finance;
