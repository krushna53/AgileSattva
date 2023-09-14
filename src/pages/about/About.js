import React from 'react';
import TeamMember from '../../components/AboutUs/TeamMember';
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <TeamMember type="FOUNDERS" headingLevel={3} /> {/* Use h3 for FOUNDERS */}
          <TeamMember type="ASSOCIATE CONSULTANT" headingLevel={4} /> {/* Use h4 for ASSOCIATE CONSULTANT */}
        </div>
      </section>
    </>
  );
};
export default About;
