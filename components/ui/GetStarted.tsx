import Container from "../common/Container";
import Button from "../common/Button";

export default function GetStarted() {
  return (
    <div className="py-24 w-full bg-foreground text-background rounded-b-2xl">
      <Container className="flex items-center justify-center flex-col gap-8">
        <h3 className="text-6xl tracking-tight">Get started today.</h3>
        <p className="font-geist-sans tracking-tight text-xl text-center">
          Ready to take the first step towards a happier, healthier you? <br />{" "}
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <Button
          title="Get in Touch"
          className="bg-background text-foreground border-transparent border hover:border-background"
        />
      </Container>
    </div>
  );
}
