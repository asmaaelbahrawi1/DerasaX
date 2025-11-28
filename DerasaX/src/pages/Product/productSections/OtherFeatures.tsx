import React from 'react'
import '../Product.css'
import video from '../../../assets/videos/product-video.mp4'

const OtherFeatures = () => {
  return (
    <div>
        <div className="features-container">
      
      {/* Left Video Box */}
      <div className="video-box">
        <video 
          src={video} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video-element"
        />
      </div>

      {/* Right Text Card */}
      <div className="features-card">
        <h2 className="title">Other Features</h2>

        <p className="desc">
          Explore the other features that power EduTera and unlock a new world of 
          interactive, digital-first education.
        </p>

        <ul className="features-list">
          <li>Academic Progress & Grades</li>
          <li>Reports & Data Exports</li>
          <li>Quiz Creation & Item Analysis</li>
          <li>Timetable & Exam Schedules</li>
          <li>Curriculum Tracking & Lesson Coverage</li>
          <li>Fees & Invoices with Alerts</li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default OtherFeatures
