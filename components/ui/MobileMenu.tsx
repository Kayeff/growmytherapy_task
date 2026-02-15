"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsOpen(false);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="order-1 md:hidden flex items-center justify-center"
      >
        <button className="relative">
          <span
            className={twMerge(
              "h-px w-10 bg-foreground inline-block absolute top-1 duration-200",
              isOpen && "rotate-45 top-0",
            )}
          />
          <span
            className={twMerge(
              "h-px w-10 bg-foreground inline-block absolute bottom-1 duration-200",
              isOpen && "-rotate-45 bottom-0",
            )}
          />
        </button>
      </div>
      {isOpen && (
        <div className="w-full h-[calc(100vh-60px)] fixed bottom-0 left-0 flex items-center justify-center md:hidden bg-background">
          <ul className="flex items-center justify-center flex-col gap-8">
            <li className="text-5xl tracking-tight font-medium">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-5xl tracking-tight font-medium">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
