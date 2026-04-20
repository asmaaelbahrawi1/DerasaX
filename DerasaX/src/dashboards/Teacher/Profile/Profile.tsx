import React, { useState } from 'react'
import NavTeacher from '../NavTeacher/NavTeacher'
import './Profile.css'
import Logo from '../../../assets/images/person.gif'
import FooterTeacher from '../FooterTeacher/FooterTeacher'

const Profile = () => {

  const teacher = [{
    name: "Dr. Osama Refaat ",
    fullName: "Osama Refaat Shaban",
    phoneNumber: "01012345678",
    officeHour: "Sun-Thu, 2:00Pm - 4:00Pm",
    bio: "Passionate educator with 8 years of experience in STEM education. Committed to making complex concepts accessible and engaging for all students.",
    email: "osama.refaat@school.com",
    subject: ["Math", "Physics"],
    grades: ["Grade 10", "Grade 11", "Grade 12"],
  }];

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <NavTeacher />
      
      <div className="profile-container">
        <h2 className="profile-title">Profile</h2>
        <p className="profile-subtitle">
          Manage your teacher profile and information
        </p>
      </div>

    <div className="container" id='cont'>

      <div className="left-container">

        <div className="profile-card">

          {/* الصورة */}
          <img className="profile-img" src={image || Logo}   />

          <h3 className="profile-name">{teacher[0].name}</h3>

          {/* زرار */}
          <label className="upload-btn">
            Update Your Picture
            <input type="file" accept="image/*" hidden onChange={handleImageChange}/>
          </label>

        </div>

        <div className="subject-card">
          <h2>subjects & Grades</h2>
          <p> subjects and grades you teaches </p>

          <div className="subjects"> 
            <p>{teacher[0].subject[0]}</p>
            <p>{teacher[0].subject[1]}</p>
          </div>

          <div className="grades">
            <p>{teacher[0].grades[0]}</p>
            <p>{teacher[0].grades[1]}</p>
            <p>{teacher[0].grades[2]}</p>
          </div>

        </div>
      </div>

      <div className="right-container">
        
        <div className="info-header">
          <h3> Personal information </h3>
          <p>Your basic profile details</p>
        </div>
        <div className="info">
        <div className="info-name" id='info'>
          <h3>Full name</h3>
          <p>{teacher[0].fullName}</p>
        </div>
        <div className="info-mail" id='info'>
          <h3>Email address</h3>
          <p>{teacher[0].email}</p>
        </div>
        <div className="info-phone" id='info'>
          <h3>Phone number</h3>
          <p>{teacher[0].phoneNumber}</p>
        </div>
        <div className="info-office" id='info'>
          <h3>Office Hours</h3>
          <p>{teacher[0].officeHour}</p>
        </div>
        <div className="info-bio" >
          <h3>Bio</h3>
          <p>{teacher[0].bio}</p>
        </div>

          </div>
      </div>

    </div>
    
    <FooterTeacher />
    </>
  )
}

export default Profile