import Link from "next/link";
import Container from "../common/Container";
import { footerlinks } from "@/utils/constants/static";

export default function Footer() {
  return (
    <footer className="w-full pt-16 lg:pt-20">
      <Container className="w-full flex flex-col gap-8 lg:gap-20">
        <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
          <div className="md:col-span-2 flex justify-center md:justify-start md:items-start items-center flex-col gap-8">
            <div>
              <h3 className="tracking-tight text-2xl sm:max-md:text-3xl md:max-xl:text-4xl xl:text-5xl">
                Dr. Maya Reynolds
              </h3>
              <p className="font-geist-sans tracking-tight text-sm md:text-lg md:text-start text-center">
                Clinical Psychologist
              </p>
            </div>
            <p className="tracking-tight font-geist-sans text-sm md:text-lg">
              123th Street 45 W, Santa Monica, CA 90401
            </p>
            <ul className="flex flex-col font-geist-sans">
              <li>
                <a
                  target="_blank"
                  className="underline text-sm md:text-lg"
                  href="#"
                >
                  email@example.com
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="underline text-sm md:text-lg"
                  href="#"
                >
                  (555) 555-5555
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <div className="flex flex-col items-center md:items-start gap-4 lg:gap-8">
              <h4 className="text-2xl md:max-lg:text-3xl lg:text-4xl tracking-tight">
                Hours
              </h4>
              <p className="text-sm md:text-lg font-geist-sans tracking-tight">
                Monday – Friday <br /> 10am – 6pm
              </p>
            </div>
            <div className="flex flex-col items-center md:max-lg:items-start lg:items-end gap-4 lg:gap-8">
              <h4 className="text-2xl md:max-lg:text-3xl lg:text-4xl tracking-tight">
                Links
              </h4>
              <ul className="font-geist-sans w-full flex flex-col items-center md:max-lg:items-start lg:items-end">
                <li>
                  <Link
                    className="text-sm md:text-lg tracking-tight underline"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm md:text-lg tracking-tight underline"
                    href="/"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm md:text-lg tracking-tight underline"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 py-10">
          <ul className="w-full flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4">
            {footerlinks.map((link) => (
              <li
                className="underline tracking-tight text-sm lg:text-lg font-geist-sans"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <p className="tracking-tight text-sm lg:text-lg font-geist-sans">
            All Rights Reserved © 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
