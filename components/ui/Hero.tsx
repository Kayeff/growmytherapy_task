import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import SpaceBetween from "../common/SpaceBetween";

export default function Hero() {
  return (
    <div className="w-full md:pt-24 xl:pb-0 py-16">
      {/* gridcols2 */}
      <Container className="w-full grid grid-cols-1 md:grid-cols-2  gap-10">
        <div className="w-full flex items-center justify-center md:justify-start">
          <Image
            src="/images/hero1.jpg"
            height={1000}
            width={1000}
            alt="hero"
            className="h-full md:w-155 w-52 object-cover rounded-t-full"
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <h1 className="text-4xl sm:max-md:text-5xl md:max-xl:text-6xl xl:text-7xl font-medium tracking-tight text-center">
              Find your steady ground,
              <br />
              <span className="italic"> again.</span>
            </h1>
            <p className="font-geist-sans tracking-tight lg:text-lg text-center">
              A supportive, thoughtful approach to Adult Psychiatry in Santa
              Monica.
            </p>
            <Button
              title={
                <SpaceBetween firstText="Take the" lastText="first step" />
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
