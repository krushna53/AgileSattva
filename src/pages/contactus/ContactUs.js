import React from 'react'
import FormComponent from '../../components/Form/FormComponent'
import './Contact_Us.css'


const ContactUs = () => {
  return (
    <div className='contact-container'>
      <h1 >CONTACT</h1>
      <div className='contact-body'>
        <h2>DROP US A LINE</h2>
        <div className='contact-main'>
          <FormComponent />
        </div>
      </div>

    </div>
  )
}

export default ContactUs