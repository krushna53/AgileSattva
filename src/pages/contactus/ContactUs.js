import React from "react";
import FormComponent from "../../components/Form/FormComponent";
import "./Contact_Us.css";

const ContactUs = () => {
  return (
    <div className="contact_us">
      <div className="page_title">
        <h1>CONTACT</h1>
      </div>
      <div className="container">
      <div className="contact-body">
        <h3>DROP US A LINE</h3>
        <div className="contact-main">
          <FormComponent />
        </div>
      </div>
      </div>
    </div>

  );
};

export default ContactUs;
