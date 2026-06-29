import { motion } from "framer-motion";

interface SSHLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const SSHLogo = ({ size = 28, showText = true, className = "" }: SSHLogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SSH Software House logo"
      >
        {/* Background rounded rect */}
        <rect width="32" height="32" rx="8" fill="#5e6ad2" />
        
        {/* Letter S — geometric, modern */}
        <path
          d="M10.5 11.5C10.5 10.12 11.62 9 13 9H19C20.38 9 21.5 10.12 21.5 11.5C21.5 12.5 20.9 13.35 20 13.78V13.78C19.4 14.07 19 14.7 19 15.4V15.4C19 16.1 19.4 16.73 20 17.02V17.02C20.9 17.45 21.5 18.3 21.5 19.3C21.5 20.68 20.38 21.8 19 21.8H13C11.62 21.8 10.5 20.68 10.5 19.3"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        
        {/* Dot accent */}
        <circle cx="13" cy="15.4" r="1" fill="white" opacity="0.7" />
      </svg>

      {/* Text */}
      {showText && (
        <motion.span
          className="text-[13px] font-bold tracking-[-0.02em] text-[var(--text-primary)]"
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          SSH{" "}
          <span className="text-[10px] font-medium text-[var(--text-ghost)] tracking-[0.08em]">
            SOFTWARE HOUSE
          </span>
        </motion.span>
      )}
    </div>
  );
};

export default SSHLogo;
