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
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary ${iconClassName}`}
      >
        <Terminal size={24} strokeWidth={2.5} />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </div>
      <div className={`flex flex-col leading-none ${textClassName}`}>
        <span className="font-bold text-lg tracking-tight text-foreground">
          SSH<span className="text-primary">.dev</span>
        </span>
        <span className="text-[0.6rem] text-muted-foreground uppercase tracking-wider font-mono">
          Software House
        </span>
      </div>
    </div>
  );
};

export default Logo;
