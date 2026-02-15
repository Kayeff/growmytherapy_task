import Link from "next/link";
import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="w-full py-4 sticky top-0 left-0 bg-background z-30">
      <Container className="flex items-center justify-between">
        <MobileMenu />
        <div className="order-2 md:order-1">
          <h1 className="text-xl md:max-lg:text-2xl lg:max-xl:text-3xl xl:text-4xl tracking-tight">
            Dr. Maya Reynolds
          </h1>
        </div>
        <ul className="md:flex gap-10 font-geist-sans hidden md:order-2">
          <li className="text-lg tracking-tight font-medium">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-lg tracking-tight font-medium">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
