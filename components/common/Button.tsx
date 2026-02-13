import { twMerge } from "tailwind-merge";

export default function Button({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        "px-5 py-3.5 border border-foreground/50 cursor-pointer uppercase font-geist-sans tracking-tight text-sm duration-300 hover:bg-foreground hover:text-background font-medium",
        className,
      )}
    >
      {title}
    </button>
  );
}
