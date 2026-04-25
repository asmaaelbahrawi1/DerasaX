import './Features.css';
import { useEffect } from "react";
import teacherDashboard from '../../../../assets/videos/main-vid1.mp4';
import studentKPIs from '../../../../assets/videos/main-vid2.mp4';
import attendanceTracking from '../../../../assets/videos/main-vid3.mp4';
import authentication from '../../../../assets/videos/main-vid4.mp4';
import notebookIcon from '../../../../assets/images/gif-1.gif';
import backpackIcon from '../../../../assets/images/gif-2.gif';
import calendarIcon from '../../../../assets/images/gif-3.gif';
import graduationIcon from '../../../../assets/images/gif-4.gif';

export default function Features() {

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="features-section">
     
      <div className="feature-card feature-left reveal">
        <div className="feature-icon">
          <img src={notebookIcon} alt="Notebook icon" />
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Teacher Dashboard</h3>
          <p className="feature-description">
            Overview with attendance, homework, alerts,<br />
            and quick actions. Data accurate to latest update
          </p>
        </div>
        <div className="feature-image">
          <video autoPlay loop muted playsInline>
            <source src={teacherDashboard} type="video/mp4" />
          </video>
        </div>
      </div>

     
      <div className="feature-card feature-right reveal">
        <div className="feature-image">
          <video autoPlay loop muted playsInline>
            <source src={studentKPIs} type="video/mp4" />
          </video>
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Student KPIs & Notes</h3>
          <p className="feature-description">
            Display attendance %, homework %, scores; add teacher notes.<br />
            Metrics accurate, notes saved and retrievable
          </p>
        </div>
        <div className="feature-icon">
          <img src={backpackIcon} alt="Backpack icon" />
        </div>
      </div>

     
      <div className="feature-card feature-left reveal">
        <div className="feature-icon">
          <img src={calendarIcon} alt="Calendar icon" />
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Attendance Tracking</h3>
          <p className="feature-description">
            Record attendance and generate calendar reports. Attendance<br />
            status visible per day; export available
          </p>
        </div>
        <div className="feature-image">
          <video autoPlay loop muted playsInline>
            <source src={attendanceTracking} type="video/mp4" />
          </video>
        </div>
      </div>

     
      <div className="feature-card feature-right reveal">
        <div className="feature-image">
          <video autoPlay loop muted playsInline>
            <source src={authentication} type="video/mp4" />
          </video>
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Authentication & Access</h3>
          <p className="feature-description">
            Secure login, role-based access, school data isolation. Each<br />
            user accesses only authorized modules; school data is isolated
          </p>
        </div>
        <div className="feature-icon">
          <img src={graduationIcon} alt="Graduation icon" />
        </div>
      </div>
    </section>
  );
}
