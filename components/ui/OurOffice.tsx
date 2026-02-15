import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import SpaceBetween from "../common/SpaceBetween";

export default function OurOffice() {
  return (
    <div className="py-16 lg:py-24 w-full bg-foreground text-background">
      <Container className="flex items-center justify-center flex-col gap-10">
        <div className="w-full flex items-center justify-center flex-col gap-4">
          <h3 className="tracking-tight text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl">
            Our Office
          </h3>
        </div>
        <div className="w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col border border-background/20 rounded-lg overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              height={1000}
              width={1000}
              alt="office-image1"
              loading="lazy"
              className="w-full md:w-full max-md:h-96 object-cover"
            />

            <div className="font-geist-sans flex justify-start items-start flex-col gap-5 p-5">
              <h4 className="text-base md:max-lg:text-xl lg:text-2xl font-medium tracking-tight text-start">
                A Supportive Space for Meaningful Change
              </h4>
              <div className="flex flex-col gap-4 text-sm lg:text-base tracking-tight">
                <p className="">
                  We understand that many clients are high-achieving,
                  insightful, and self-aware—but quietly struggling with
                  overthinking, persistent worry, emotional tension, sleep
                  difficulties, or a constant sense of pressure. Our work is
                  designed to address both the visible and underlying layers of
                  these experiences.
                </p>
                <p>
                  Therapy here is warm, collaborative, and grounded. Sessions
                  are structured enough to provide direction and stability,
                  while allowing space for reflection and deeper exploration.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col border border-background/20 rounded-lg overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              height={1000}
              width={1000}
              alt="office-image2"
              loading="lazy"
              className="w-full md:w-full max-md:h-96 object-cover"
            />
            <div className="font-geist-sans text-lg flex flex-col gap-5 p-5">
              <h4 className="text-base md:max-lg:text-xl lg:text-2xl font-medium tracking-tight text-start">
                A Calm, Private Environment
              </h4>
              <div className="flex flex-col gap-4 text-sm lg:text-base tracking-tight">
                <p className="">
                  Our Santa Monica office is a quiet, private setting designed
                  to feel calm and grounding. With natural light, a comfortable
                  layout, and an uncluttered environment, the space itself
                  supports a sense of ease and reflection. We also offer secure
                  telehealth sessions for clients throughout California,
                  providing flexibility while maintaining a high standard of
                  care.
                </p>
                <p>
                  We believe therapy works best when clients feel respected,
                  understood, and actively involved in their growth. Our aim is
                  not simply symptom relief, but helping individuals build
                  insight, emotional resilience, and a stronger, more
                  sustainable relationship with themselves.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-5 py-5 md:col-span-2">
            <p className="text-3xl text-center">
              If you’re looking for therapy that blends practical tools with
              meaningful, depth-oriented work, our office may be a supportive
              place to start.
            </p>
            <Button
              title={<SpaceBetween firstText="Learn" lastText="more" />}
              className="bg-background text-foreground hover:border-background border-transparent border"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
