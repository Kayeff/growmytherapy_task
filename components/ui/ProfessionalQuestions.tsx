import { psychiatristBackgroundFaqs } from "@/utils/constants/static";
import Accordion from "../common/Accordion/Accordion";
import Container from "../common/Container";

export default function ProfessionalQuestions() {
  return (
    <div className="py-16 lg:py-24 w-full">
      <Container className="flex items-center justify-center flex-col gap-10">
        <h3 className="tracking-tight text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl">
          My Professional Background
        </h3>
        <div className="w-full lg:w-[70%]">
          <Accordion array={psychiatristBackgroundFaqs} />
        </div>
      </Container>
    </div>
  );
}
