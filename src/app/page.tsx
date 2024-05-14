import { ControlledCarousel } from "@/components";
import SectionHome from "@/components/section-home/page";
import { hashSync } from "bcrypt-ts";

console.log(hashSync("123456"))

export default function Home() {
  return (
    <>
      <ControlledCarousel/>
      <SectionHome />
    </>
  );
}
