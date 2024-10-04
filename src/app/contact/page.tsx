import Breadcrumb from "@/components/contact/Breadcrumb";
import Helpcenter from "@/components/contact/Helpcenter";
import Information from "@/components/contact/Information";
import Map from "@/components/contact/Map";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Information />
      <Helpcenter />
      <Map />
    </>
  );
}
