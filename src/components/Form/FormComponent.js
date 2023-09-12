import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => {
    toast.success(
      "Thank you for contacting agilesattva. We will respond to your message within 3 working days.😊",
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      service: service,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (response) => {
          notify();
          setName("");
          setEmail("");
          setService("");
          setMessage("");

          console.log("Email sent:", response);
        },
        (error) => {
          console.error("Failed to send the email:", error);

        }
      );
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className='d-flex'>
          <div className='input-field'>
            <label htmlFor='name'>Your Name *</label>
            <input
              type='text'
              id='name'
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Your Email *</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="service">Select Service</label>
          <select name="service" id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="Agile coaching">Agile coaching</option>
            <option value="Agile transformation">Agile transformation</option>
            <option value="Agile training">Agile training</option>
            <option value="Change management leadership coaching">
              Change management leadership coaching
            </option>
            <option value="Team coaching">Team coaching</option>
            <option value="Leadership development">
              Leadership development
            </option>
          </select>
        </div>
        <div className="text-area">
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="40" rows="10"></textarea>
        </div>
        <input type="submit" value="Send" className="submit_btn" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
};

export default FormComponent;
