import { Terminal } from "lucide-react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo = ({
  className = "",
  iconClassName = "",
  textClassName = "",
}: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className={`relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary border border-primary/20 ${iconClassName}`}
      >
        <Terminal size={18} strokeWidth={2.5} />
        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </div>
      <div className={`flex flex-col leading-none ${textClassName}`}>
        <span className="font-bold text-base tracking-tight text-foreground">
          SSH<span className="text-primary">.dev</span>
        </span>
        <span className="text-[0.55rem] text-muted-foreground uppercase tracking-[0.15em] font-mono">
          Software House
        </span>
      </div>
    </div>
  );
};

export default Logo;
