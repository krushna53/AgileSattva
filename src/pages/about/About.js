import React from "react"
import Founders from "../../components/AboutUs/Founders"
import AssociateConsultant from "../../components/AboutUs/AssociateConsultant"

const About = () => {

  return (
    <>
      <section className='about'>
        <div className='container'>
          <Founders />
          <AssociateConsultant />
        </div>
      </section>
    </>
  )
}

export default About
