const OrbitMark = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <g transform="rotate(-25 20 20)">
      <path
        d="M 10.8 12.6 A 16 9 0 1 1 4.1 19.2"
        fill="none"
        stroke="#c9a96a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="6.1" cy="15.5" r="3.4" fill="#c9a96a" />
    </g>
    <circle cx="24" cy="20" r="6.5" fill="currentColor" />
  </svg>
);

export default OrbitMark;
