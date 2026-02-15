import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import SpaceBetween from "../common/SpaceBetween";

export default function Section3() {
  return (
    <div className="w-full py-16 md:py-24">
      <Container className="flex items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="w-full flex items-center justify-center md:max-lg:justify-start">
            <Image
              src="/images/doctor.png"
              height={300}
              width={300}
              alt="Dr. Maya Reynolds"
              className="h-full md:max-lg:h-133 w-52 md:max-lg:w-[80%] lg:w-96 rounded-t-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <div className="flex flex-col">
              <h3 className="text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl text-center tracking-tight">
                Hi, I'm Dr. Maya Reynolds
              </h3>
              <p className="text-xs md:max-lg:text-base lg:text-lg font-medium tracking-tight font-geist-sans text-center">
                Licensed Clinical Psychologist in Santa Monica, California
              </p>
            </div>
            <div className="font-geist-sans flex flex-col gap-2">
              <p className="tracking-tight lg:text-lg">
                I provide in-person psychiatric appointments in Santa Monica and
                secure telehealth sessions for adults located throughout
                California. My work focuses on anxiety, trauma, depression, and
                burnout — particularly for high-achieving individuals who appear
                capable on the outside but feel overwhelmed internally.
              </p>
              <p className="tracking-tight lg:text-lg">
                My approach is warm, grounded, and structured. I take time to
                listen carefully, conduct thorough evaluations, and explain
                treatment options clearly. When medication is appropriate, it is
                prescribed thoughtfully and monitored closely. My goal is never
                just symptom reduction, but helping you feel more regulated,
                resilient, and connected to yourself over time.
              </p>
            </div>
            <Button
              title={
                <SpaceBetween firstText="See If We’re a" lastText="Good Fit" />
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
