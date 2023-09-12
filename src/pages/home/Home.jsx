import React from "react";
import Banner from "../../components/Banner";
import OurApproach from "../../components/OurApproach";
import Testimonials from "../../components/Testimonials";
import Offerings from "../../components/Offerings";

const Home = () => {
  return (
    <>
      <Banner />
      <Offerings/>
      <OurApproach />
      <Testimonials />
    </>
  );
};

export default Home;
