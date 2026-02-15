import Container from "../common/Container";
import Button from "../common/Button";
import SpaceBetween from "../common/SpaceBetween";

export default function GetStarted() {
  return (
    <div className="py-24 w-full bg-foreground text-background">
      <Container className="flex items-center justify-center flex-col gap-8">
        <h3 className="text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl  tracking-tight">
          Get started today.
        </h3>
        <p className="font-geist-sans tracking-tight text-sm md:max-lg:text-base lg:max-xl:text-lg xl:text-xl text-center">
          Ready to take the first step towards a happier, healthier you? <br />{" "}
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <Button
          title={<SpaceBetween firstText="Get in" lastText="Touch" />}
          className="bg-background text-foreground border-transparent border hover:border-background"
        />
      </Container>
    </div>
  );
}
