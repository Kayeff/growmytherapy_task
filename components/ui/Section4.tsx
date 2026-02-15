import Container from "../common/Container";
import { specialities } from "@/utils/constants/static";
import Speciality from "../common/Speciality";

export default function Section4() {
  return (
    <div className="w-full py-24">
      <Container className="">
        <div className="w-full flex items-center flex-col gap-20">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl sm:max-md:text-4xl md:max-xl:text-5xl xl:text-6xl tracking-tight text-center">
              How I Can Help You
            </h3>
          </div>
          <ul className="w-full grid grid-cols-1 xs:max-md:grid-cols-2 md:max-lg:grid-cols-2 lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-4">
            {specialities.map((item) => (
              <Speciality key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
