import { ControlledCarousel } from "@/components";
import SectionHome from "@/components/section-home/page";
import { hashSync } from "bcrypt-ts";


export default function Home() {
  return (
    <>
      <ControlledCarousel/>
      <SectionHome />
    </>
  );
}
