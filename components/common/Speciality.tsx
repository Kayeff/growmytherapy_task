import { SpecialityT } from "@/utils/constants/static";
import Image from "next/image";

export default function Speciality({ item }: { item: SpecialityT }) {
  return (
    <li className="border border-foreground/20 flex flex-col gap-2 rounded-t-full overflow-hidden">
      <Image
        src={item.image}
        alt={`${item.title}-image`}
        height={400}
        width={400}
        className="h-96 w-full object-top object-cover"
        loading="lazy"
      />
      <div className="p-3 flex flex-col gap-2">
        <h4 className="text-3xl tracking-tight">{item.title}</h4>
        <p className="font-geist-sans tracking-tight">{item.description}</p>
      </div>
    </li>
  );
}
