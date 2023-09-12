import React from "react";
import TeamMember from "../../components/AboutUs/TeamMember";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <TeamMember type="FOUNDERS" />
          <TeamMember type="ASSOCIATE CONSULTANT" />
        </div>
      </section>
    </>
  );
};

export default About;
