import React, { useState, useEffect } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import "./Dashboard.css";
import Reading from "../../../assets/images/reading.png";
import Clock from "../../../assets/images/clock.png";
import Group from "../../../assets/images/Group.png";
import Arrow from "../../../assets/images/arrow.png";
import Redarrow from "../../../assets/images/redArrow.png";
import Greenarrow from "../../../assets/images/greenArrow.png";
import Logo from "../../../assets/images/community.png";

const Dashboard = () => {
  const [stats, setStats] = useState({
    lessons: 0,
    grading: 0,
    officeHour: 0,
    quizzes: 0,
  });

  // 🔥 Random update (temporary instead of API)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        lessons: Math.floor(Math.random() * 50),
        grading: Math.floor(Math.random() * 30),
        officeHour: Math.floor(Math.random() * 20),
        quizzes: Math.floor(Math.random() * 10),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavTeacher />

      <div className="container-dashboard">
        <div className="profile-container">
          <h2 className="profile-title">Dr. Malak Mohamed</h2>
          <p className="profile-subtitle">
            Monitor and moderate student discussions
          </p>
        </div>

        <div className="dashboard-button">
          <button> + Add Lesson</button>
          <button> + Create Quiz</button>
        </div>
      </div>

      <div className="dashboard-nums">
        {/* Total Lessons */}
        <div className="dash-card">
          <div className="dash-card-heading">
            <p>Total lessons</p>
            <img src={Reading} alt="" />
          </div>
          <div className="middle-dash-card">
            <h1>{stats.lessons}</h1>
          </div>
          <div className="button-dash-card">
            <p>Published lessons</p>
          </div>
        </div>

        <div className="dash-card">
          <div className="dash-card-heading">
            <p>Pending grading</p>
            <img src={Arrow} alt="" />
          </div>
          <div className="middle-dash-card">
            <h1>{stats.grading}</h1>
          </div>
          <div className="button-dash-card">
            <p>Submissions to grade</p>
          </div>
        </div>

        {/* Office Hour */}
        <div className="dash-card">
          <div className="dash-card-heading">
            <p>Office hour</p>
            <img src={Clock} alt="" />
          </div>
          <div className="middle-dash-card">
            <h1>{stats.officeHour}</h1>
          </div>
          <div className="button-dash-card">
            <p>Pending requests</p>
          </div>
        </div>

        {/* Active Quizzes */}
        <div className="dash-card">
          <div className="dash-card-heading">
            <p>Active quizzes</p>
            <img src={Group} alt="" />
          </div>
          <div className="middle-dash-card">
            <h1>{stats.quizzes}</h1>
          </div>
          <div className="button-dash-card">
            <p>Currently active</p>
          </div>
        </div>
      </div>

      <div className="container-info">

        <div className="insights">
          <h1>Ai insights</h1>
          <p>Common student pain points and recommendations</p>

          <div className="insights-factoring">
            <div className="insight-factoring-top">
              <img src={Redarrow} alt="" className="red-arrow" />
              <h1>Quadratic Equations - Factoring</h1>
              {/* <img src={percent35} alt="" className="percent" /> */}
              <div className="percent35">35%</div>
            </div>

            <div className="insight-factoring-button">
              <h2>18 of 52 students affected • Mathematics</h2>
              <p>
                Consider dedicating an extra class session to factoring practice
                with visual aids.
              </p>
            </div>
          </div>

          <div className="insights-factoring">
            <div className="insight-factoring-top">
              <img src={Greenarrow} alt="" className="red-arrow" />
              <h1>Trigonometric Identities - Proofs</h1>
              <div className="percent25">25%</div>
            </div>

            <div className="insight-factoring-button">
              <h2>15 of 60 students affected • Mathematics</h2>
              <p>
                Create a flowchart showing when to use each identity. Provide
                step-by-step proof templates.
              </p>
            </div>
          </div>
        </div>

        <div className="insights" id="insights">
          <h1><img src={Group} />  Recent Lessons</h1>
          <p>Your recently created lessons</p>

          <div className="insights-factoring-2">
            
            <div className="container-reading">
            <div className="reding-top">
                <img src={Reading}/>
            </div>
            <div className="text-reading">
              <h1>Intro to quadratic equations </h1>
              <p>Mathematics . Grade 10 . 165 </p>
            </div>
            <div className="reading-btn">
              <button>Published</button>
            </div>
            
            </div>
            <div className="container-reading">
            <div className="reding-top">
                <img src={Reading}/>
            </div>
            <div className="text-reading">
              <h1>Newton law’s of motion</h1>
              <p>physics . Grade 11 . 94 </p>
            </div>
            <div className="reading-btn">
              <button>Published</button>
            </div>
            
            </div>
            <div className="container-reading">
            <div className="reding-top">
                <img src={Reading}/>
            </div>
            <div className="text-reading">
              <h1>Algebra: Quadratic equations</h1>
              <p>Mathematics . Grade 10 . 1 </p>
            </div>
            <div className="reading-btn">
              <button id="draft-btn">Drafts</button>
            </div>
            
            </div>
            <div className="view-all-lessons">
              <button>View all lessons</button>
            </div>
          </div>
        </div>

      </div>

      <div className="office-requests">
        <h1><img src={Group}/> Office requests</h1>
        <p>Common student pain points and recommendations</p>

        <div className="container-office-request">

          <div className="card-office-request">
            <div className="photo-office">
                <img src={Logo} />
            </div>

            <div className="content-office">
                <h2 className="h2-content">Adham Ayman</h2>
                <h3>Help with Quadratic Equations</h3>
                <h6>I'm struggling to understand how to factor complex quadratic equations. Could we go over some examples together?</h6>
                <p className="p">Preferred: Dec 2, 4:00 PM</p>
            </div>

            <div className="btn-office-request">
                <button>Request</button>
            </div>

          </div>

          <div className="card-office-request">
            <div className="photo-office">
                <img src={Logo} />
            </div>

            <div className="content-office">
                <h2 className="h2-content">Malak Eltalkhawy</h2>
                <h3>Newton's Laws Clarification</h3>
                <h6>I need help understanding the difference between mass and weight, and how Newton's Second Law applies to both.</h6>
                <p className="p">Preferred: Dec 3, 5:00 PM</p>
            </div>

            <div className="btn-office-request">
                <button>Request</button>
            </div>

          </div>

          <div className="card-office-request">
            <div className="photo-office">
                <img src={Logo} />
            </div>

            <div className="content-office">
                <h2 className="h2-content">Nada Ashraf</h2>
                <h3>Calculus Limits Review</h3>
                <h6>Can we review limits before the upcoming test? I want to make sure I understand all the limit laws.</h6>
                <p className="p">Preferred Dec 4, 4:30 PM</p>
            </div>

            <div className="btn-office-request">
                <button>Request</button>
            </div>

          </div>

        </div>

      </div>

      


      <FooterTeacher />
    </>
  );
};

export default Dashboard;