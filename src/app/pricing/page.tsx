import Testimonial from "@/components/home/Testimonial";
import Breadcrumb from "@/components/pricing/Breadcrumb";
import Plans from "@/components/pricing/Plans";
import React from "react";

export default function page() {
  return (
    <div>
      <Breadcrumb />
      <Plans />
      <Testimonial />
    </div>
  );
}
