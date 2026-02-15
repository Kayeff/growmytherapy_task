import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  title,
  className,
}: {
  title: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "px-5 py-4 border border-foreground/50 cursor-pointer uppercase font-geist-sans tracking-tight text-xs lg:text-sm duration-300 hover:bg-foreground hover:text-background font-medium group relative",
        className,
      )}
    >
      {title}
    </button>
  );
}
