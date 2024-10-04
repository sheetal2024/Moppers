import Benefits from "@/components/home/Benefits";
import Blog from "@/components/home/Blog";
import Breadcrumb from "@/components/home/Breadcrumb";
import CostCalculator from "@/components/home/Costcalculator";
import Faq from "@/components/home/Faq";
import Founder from "@/components/home/Founder";
import Herosection from "@/components/home/Herosection";
import Information from "@/components/home/Information";
import Organization from "@/components/home/Organization";
import Testimonial from "@/components/home/Testimonial";
import Working from "@/components/home/working";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <Herosection />
      {/* <Organization /> */}
      <Information />
      {/* <Founder /> */}
      {/* <Benefits /> */}
      <Working />
      <Faq />
      {/* <Testimonial /> */}
      <CostCalculator />
      <Blog />
    </>
  );
}
