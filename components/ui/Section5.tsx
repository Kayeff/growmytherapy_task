import Image from "next/image";
import Container from "../common/Container";
import Accordion from "../common/Accordion/Accordion";
import { faqs } from "@/utils/constants/static";

export default function Section5() {
  return (
    <div className="w-full py-24 bg-accent">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/images/faqs.jpg"
            height={100}
            width={1000}
            alt="faq-image"
            className="rounded-t-full object-cover lg:h-[70vh] h-full w-52 lg:w-96"
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="w-full flex flex-col gap-8">
            <h3 className="text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl tracking-tight text-center md:text-start">
              FAQs
            </h3>
            <Accordion array={faqs} />
          </div>
        </div>
      </Container>
    </div>
  );
}
