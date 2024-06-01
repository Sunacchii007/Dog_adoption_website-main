import React, { useState } from "react";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import FacebookIcon from '@mui/icons-material/Facebook';
import "./Contact.css";
import Footer from "../About/footer";
const Contact = () => {
    
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

        if (fullName.trim() === '') {
            newErrors.fullName = "Full Name can't be empty!";
        }

        if (subject.trim() === '') {
            newErrors.subject = "Subject can't be empty!";
        }

        if (email.trim() === '') {
            newErrors.email = "Please provide a valid Email ID!";
        }

        if (message.trim() === '') {
            newErrors.message = "Message can't be empty!";
        }

        return newErrors;
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setSuccessMessage('');
        } else {
            
            setErrors({});
            setSuccessMessage("Form submitted!!!!");
        }
    };
    return (
            <>
            <section>
            <div className="ContactUs-main">
                <h2 className="heading" > Feel free to contact us !</h2>
                </div>
    <div className="separator">  
        <div className="form">
     <form onSubmit={handleSubmit}>
        <div className="main">
                <h5> FILL YOUR DETAILS HERE. </h5>
          <div className="input-fields">
          <input type="text"
            placeholder="Enter your full name"
             onChange={e=>setFullName(e.target.value)}
          name="fName"/>
          {errors.fullName &&<p className="error-message">{errors.fullName}</p>}
          <input type="text"
          placeholder="Enter your email"
           name="email"
           onChange={e=>setEmail(e.target.value)} /> 
           {errors.email &&<p className="error-message">{errors.email}</p>}
           <input type="text"
          placeholder="Enter the subject"
           name="subject"
           onChange={e=>setSubject(e.target.value)} />   
          {errors.subject &&<p className="error-message">{errors.subject}</p>} 
         
          <textarea type="text"
          placeholder="Enter your message"
                    name="message"  
           onChange={e=>setMessage(e.target.value)}  /> 
           {errors.message &&<p className="error-message">{errors.message}</p>} 
          
          <div>{successMessage && <h6 className="success-message">{successMessage}</h6>}</div>      
        <button className="submit-Button" type="submit">Submit</button>
               
        </div>
        </div> 
            </form>
         
          </div> 
          </div> 
         
          
        
                
    </section>
    
    
        

        
            
            
        
        </>
        )
    }

export default Contact;