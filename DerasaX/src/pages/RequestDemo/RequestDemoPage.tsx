import { useState } from "react";
import './RequestDemoPage.css'
import '../../styles/global.css'
import '../../styles/theme.css'

import NavBar from '../../components/layout/Navbar/NavBar'
import Footer from '../../components/layout/Footer/Footer'
import Flag from '../../assets/images/flag.png'
export default function RequestDemoPage() {
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <main className="request-demo-main">
      <NavBar className="navbar-about"  />


     <div className="request-demo">
       <div className="caption">
          <h1>Request the demo</h1>
          <p>See how NeoED can transform your learning experience. Request a live demo and explore our digital education solutions in action.</p>
        </div>
      <div className="request-demo-container">
        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
           <div className="field">
             <label htmlFor="">First Name*</label>
            <input type="text" name="firstName" placeholder="enter first name" value={formData.firstName} onChange={handleChange} required />
           </div>
           <div className="field">
             <label htmlFor="">Last Name*</label>
            <input type="text" name="lastName" placeholder="enter your last name" value={formData.lastName} onChange={handleChange} required />
           </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="">Company*</label>
              <input type="text" name="company" placeholder="enter yout company" value={formData.company} onChange={handleChange} required />
            </div>

            <div className="field">
              <label htmlFor="">Job title*</label>
              <input type="text" name="jobTitle" placeholder="enter your job" value={formData.jobTitle} onChange={handleChange} required />

            </div>
          </div>

          <div className="form-row">
            <div className="field custom-field">
              <label>Country*</label>
              <div className="field-box">
                <img src={Flag} className="flag-icon" />
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Select country</option>
                  <option value="Egypt">Egypt - مصر</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="">City*</label>
              <input type="text" name="city" placeholder="enter your city" value={formData.city} onChange={handleChange} required />

            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="">Email Address*</label>
            <input type="email" name="email" placeholder="enter yout email" value={formData.email} onChange={handleChange} required />

            </div>

            <div className="field custom-field ">
              <label>Phone number*</label>
              <div className="field-box phone-field">
                <img src={Flag} className="flag-icon" />
                <span className="country-code">+20</span>
                <input type="tel" name="phone" placeholder="Enter your phone" value={formData.phone} onChange={handleChange}/>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="">Message*</label>
            <textarea
            name="message"
            placeholder="what do you think"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          </div>
          

          <button type="submit" className="btn-submit">Request the demo</button>
        </form>
      </div>
     </div>

      <Footer />
    </main>
  );
}
