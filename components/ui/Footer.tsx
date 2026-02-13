import Link from "next/link";
import Container from "../common/Container";
import { footerlinks } from "@/utils/constants/static";

export default function Footer() {
  return (
    <footer className="w-full pt-20 sticky bottom-0">
      <Container className="w-full flex flex-col gap-20">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="tracking-tight text-6xl">Dr. Maya Reynolds</h3>
              <p className="font-geist-sans tracking-tight text-lg">
                Clinical Psychologist
              </p>
            </div>
            <p className="tracking-tight font-geist-sans text-lg">
              123th Street 45 W, Santa Monica, CA 90401
            </p>
            <ul className="flex flex-col font-geist-sans">
              <li>
                <a target="_blank" className="underline" href="#">
                  email@example.com
                </a>
              </li>
              <li>
                <a target="_blank" className="underline" href="#">
                  (555) 555-5555
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col gap-8">
              <h4 className="text-4xl tracking-tight">Hours</h4>
              <p className="text-lg font-geist-sans tracking-tight">
                Monday – Friday <br /> 10am – 6pm
              </p>
            </div>
            <div className="flex flex-col items-end gap-8">
              <h4 className="text-4xl tracking-tight">Links</h4>
              <ul className="font-geist-sans w-full flex flex-col items-end">
                <li>
                  <Link className="text-lg tracking-tight underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-lg tracking-tight underline" href="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-lg tracking-tight underline" href="/">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 py-10">
          <ul className="w-full flex items-center justify-center flex-wrap gap-4">
            {footerlinks.map((link) => (
              <li
                className="underline tracking-tight font-geist-sans"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
          <p className="tracking-tight font-geist-sans">
            All Rights Reserved © 2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
