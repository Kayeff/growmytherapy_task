import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Hero() {
  return (
    <div className="w-full pt-10">
      <Container className="w-full grid grid-cols-2">
        <div className="">
          <Image
            src="/images/hero1.jpg"
            height={1000}
            width={1000}
            alt="hero"
            className="h-full w-155 object-cover rounded-t-full"
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex items-center justify-center flex-col gap-8">
            <h1 className="text-[5vw] leading-[4vw] font-medium tracking-tight text-center">
              Find your steady ground, <br />{" "}
              <span className="italic">again.</span>
            </h1>
            <p className="font-geist-sans tracking-tight text-lg">
              A supportive, thoughtful approach to Adult Psychiatry in Santa
              Monica.
            </p>
            <Button title="Take the First Step" />
          </div>
        </div>
      </Container>
    </div>
  );
}
