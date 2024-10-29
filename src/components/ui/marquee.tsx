import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string; // Additional classes for styling
  reverse?: boolean; // Determines if the marquee should scroll in reverse
  pauseOnHover?: boolean; // Pauses the marquee on hover
  children: React.ReactNode; // Required children nodes for the marquee
  vertical?: boolean; // Determines if the marquee should be vertical
  repeat?: number; // Number of times to repeat the marquee content
  // Specify other props as needed
  [key: string]: unknown; // Allow any additional props with a more specific type
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
