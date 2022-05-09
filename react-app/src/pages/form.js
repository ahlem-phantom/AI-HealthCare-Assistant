import React from 'react';
import { Icon } from '@iconify/react';
import sendCircle from '@iconify/icons-mdi/send-circle';
import { useState } from 'react';
import './form.css';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';



const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();


    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
        console.log("name"+name);

      };

      const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
      };

      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

      const onChangeMessage = (e) => {
        const message = e.target.value;
        setMessage(message);
        console.log("name"+message);

      };

      const onChangeContact = (e) => {
        e.preventDefault();

          console.log("name"+name);
          console.log("email"+email);
          console.log("phone"+phone);
          console.log("msg"+message);
          axios
          .post("http://localhost:8080/contacts/create-contact" , {
            name,email,phone,message
          })
          .then(Swal.fire({  
            title: 'Your Message has been sent successfully',  
            icon: 'success'
          }));

   
      };
      const formInputs = [
        { id: 'name', type: 'text', label: 'Your name', placeholder: 'Enter Your Name', onChange : onChangeName}
        ,
        {
          id: 'tel',
          type: 'tel',
          label: 'Phone number',
          placeholder: '+216 55 555 555',
          onChange : onChangePhone
      
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email address',
          placeholder: 'you@example.com',
          onChange : onChangeEmail
        },
        {
          id: 'message',
          type: 'textarea',
          label: 'Your message',
          placeholder: 'How can we help you? Or you us?',
          onChange : onChangeMessage
        },
      ]
    return (
    
    <form className="form" onSubmit={onChangeContact} ref={form}>
    <h2 className="form-h2">Send us a message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} onChange={input.onChange}/>
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
            onChange={input.onChange}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

     <button className="form-submit" style={{height: '90px', width: '300px', fontSize : '20px'}} >
      Send message
    </button> 
  </form>
)
        };

export default Form