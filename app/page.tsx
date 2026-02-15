import Footer from "@/components/ui/Footer";
import GetStarted from "@/components/ui/GetStarted";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import OurOffice from "@/components/ui/OurOffice";
import ProfessionalQuestions from "@/components/ui/ProfessionalQuestions";
import Section2 from "@/components/ui/Section2";
import Section3 from "@/components/ui/Section3";
import Section4 from "@/components/ui/Section4";
import Section5 from "@/components/ui/Section5";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-instrument-serif relative">
      <Navbar />
      <main className="relative bg-background z-10 shadow-xl">
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <ProfessionalQuestions />
        <OurOffice />
        <Section5 />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
