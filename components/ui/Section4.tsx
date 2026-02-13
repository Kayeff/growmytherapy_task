import React from "react";
import Container from "../common/Container";
import { specialities } from "@/utils/constants/static";
import Speciality from "../common/Speciality";

export default function Section4() {
  return (
    <div className="w-full py-24">
      <Container className="">
        <div className="w-full flex items-center flex-col gap-20">
          <div className="flex flex-col gap-3">
            <h3 className="text-6xl tracking-tight text-center">
              How I Can Help
            </h3>
            <p className="text-lg tracking-tight font-geist-sans text-center">
              If you are facing any of these, there’s hope.
            </p>
          </div>
          <ul className="w-full grid grid-cols-4 gap-4">
            {specialities.map((item) => (
              <Speciality key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
