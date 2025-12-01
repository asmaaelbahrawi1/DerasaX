import React, { useEffect } from 'react'
import '../Product.css'
import video from '../../../assets/videos/product-video.mp4'

const OtherFeatures = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-repeat");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-repeat");
          } else {
            entry.target.classList.remove("show-repeat");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div>
      <div className="features-container reveal-repeat">
      
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
