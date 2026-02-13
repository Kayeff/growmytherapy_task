import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Section2() {
  return (
    <div className="w-full bg-accent relative">
      <Container className="w-full grid grid-cols-2">
        <div className="w-full flex items-start justify-center flex-col relative py-24">
          <div className="w-[90%] flex flex-col gap-8">
            <h3 className="tracking-tight text-6xl">
              You <span className="italic mr-2">don’t</span> have to keep
              holding it all together alone
            </h3>
            <div className="w-full flex flex-col gap-4">
              <p className="text-lg font-geist-sans tracking-tight">
                If you’re used to pushing through stress and telling yourself
                you “should” be handling it better, that quiet pressure can
                slowly turn into anxiety, burnout, or disconnection.
              </p>
              <p className="text-lg font-geist-sans tracking-tight">
                In our work together, we’ll slow things down, understand what’s
                happening beneath the surface, and address both the emotional
                and biological pieces of what you’re experiencing. You don’t
                have to keep carrying it alone.
              </p>
            </div>
            <Button title="Schedule a Consultation" className="w-max" />
          </div>
        </div>
        <Image
          src="/images/section2.webp"
          height={1000}
          width={1000}
          className="w-[50%] absolute right-0 top-0 h-full object-cover"
          alt="image"
          loading="lazy"
        />
      </Container>
    </div>
  );
}
