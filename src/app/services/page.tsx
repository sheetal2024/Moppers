import CostCalculator from "@/components/home/Costcalculator";
import Testimonial from "@/components/home/Testimonial";
import Breadcrumb from "@/components/services/Breadcrumb";
import Team from "@/components/services/Team";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Team />
      <Testimonial />
      <CostCalculator />
    </>
  );
}
