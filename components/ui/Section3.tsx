import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Section3() {
  return (
    <div className="w-full py-24">
      <Container className="flex items-center justify-center">
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/images/doctor.png"
              height={300}
              width={300}
              alt="Dr. Maya Reynolds"
              className="h-full rounded-t-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <div className="flex flex-col">
              <h3 className="text-6xl tracking-tight">
                Hi, I'm Dr. Maya Reynolds
              </h3>
              <p className="text-lg font-medium tracking-tight font-geist-sans text-center">
                Licensed Clinical Psychologist in Santa Monica, California
              </p>
            </div>
            <div className="font-geist-sans flex flex-col gap-2">
              <p className="tracking-tight text-lg">
                I provide in-person psychiatric appointments in Santa Monica and
                secure telehealth sessions for adults located throughout
                California. My work focuses on anxiety, trauma, depression, and
                burnout — particularly for high-achieving individuals who appear
                capable on the outside but feel overwhelmed internally.
              </p>
              <p className="tracking-tight text-lg">
                My approach is warm, grounded, and structured. I take time to
                listen carefully, conduct thorough evaluations, and explain
                treatment options clearly. When medication is appropriate, it is
                prescribed thoughtfully and monitored closely. My goal is never
                just symptom reduction, but helping you feel more regulated,
                resilient, and connected to yourself over time.
              </p>
            </div>
            <Button title="See If We’re a Good Fit" />
          </div>
        </div>
      </Container>
    </div>
  );
}
