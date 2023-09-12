import React from "react";

const FormComponent = () => {
  return (
    <div className="form-container">
      <form>

        <div className='d-flex'>
          <div className='input-field'>
            <label htmlFor='name'>Your Name *</label>
            <input type='text' name='name' id='name' required />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>Your Email *</label>
            <input type='email' name='email' id='email' required />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="service">Select Service</label>
          <select name="service" id="service">
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
          <textarea name="message" id="message" cols="40" rows="10"></textarea>
        </div>
        <input type="submit" value="Send" className="submit_btn" />
      </form>
    </div>
  );
};

export default FormComponent;
