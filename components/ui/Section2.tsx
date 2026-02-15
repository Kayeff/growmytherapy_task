import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import SpaceBetween from "../common/SpaceBetween";

export default function Section2() {
  return (
    <div className="w-full bg-accent relative">
      <Container className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full order-2 md:order-1 flex items-start justify-center flex-col relative lg:py-24 py-16">
          <div className="md:w-[90%] w-full flex flex-col items-center gap-8">
            <h3 className="tracking-tight text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl text-center">
              You <span className="italic mr-2">don’t</span> have to keep
              holding it all together alone
            </h3>
            <div className="w-full flex flex-col gap-4 font-geist-sans">
              <p className="lg:text-lg tracking-tight">
                If you’re used to pushing through stress and telling yourself
                you “should” be handling it better, that quiet pressure can
                slowly turn into anxiety, burnout, or disconnection.
              </p>
              <p className="lg:text-lg tracking-tight">
                In our work together, we’ll slow things down, understand what’s
                happening beneath the surface, and address both the emotional
                and biological pieces of what you’re experiencing. You don’t
                have to keep carrying it alone.
              </p>
            </div>
            <Button
              title={
                <SpaceBetween firstText="Schedule a" lastText="Consultation" />
              }
              className="w-max"
            />
          </div>
        </div>
        <Image
          src="/images/section2.webp"
          height={1000}
          width={1000}
          className="md:w-[50%] order-1 md:order-2 w-full md:absolute right-0 top-0 h-full object-cover"
          alt="image"
          loading="lazy"
        />
      </Container>
    </div>
  );
}
