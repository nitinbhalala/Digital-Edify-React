import React from "react";
import HeroSection from "./HeroSection";
import WhyDigitalEdify from "../Home/WhyDigitalEdify";
import OnlineTaining from "../Home/OnlineTaining";
import OurLocations from "../Home/OurLocations";
import ChooseCard from "./ChooseCard";
import { servicesData } from "../../utils/CourseData";
import { useParams } from "react-router-dom";

const Services = () => {
  const { name } = useParams();
  const serviceData = servicesData?.filter((i) => i?.course === name)?.[0];

  return (
    <div>
      <HeroSection serviceData={serviceData} />
      <ChooseCard serviceData={serviceData} />
      <WhyDigitalEdify />
      <OnlineTaining />
      <OurLocations />
    </div>
  );
};

export default Services;
