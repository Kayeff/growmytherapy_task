import Container from "../common/Container";

export default function Navbar() {
  return (
    <nav className="w-full py-4 sticky top-0 left-0 bg-background z-30">
      <Container className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl tracking-tight">Dr. Maya Reynolds</h1>
        </div>
        <ul className="flex gap-10 font-geist-sans">
          <li className="text-lg tracking-tight font-medium">Blog</li>
          <li className="text-lg tracking-tight font-medium">Contact</li>
        </ul>
      </Container>
    </nav>
  );
}
