import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("w-full max-w-[90%] mx-auto", className)}>
      {children}
    </div>
  );
}
