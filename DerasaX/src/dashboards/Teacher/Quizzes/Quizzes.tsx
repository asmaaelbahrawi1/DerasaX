import React, { useEffect, useState } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import lesson2 from "../../../assets/images/leeson2.png";
import "./Quizzes.css";
import quizzz from "../../../assets/images/quizz.png";
import hour from "../../../assets/images/hourr.png";
import question from "../../../assets/images/question.png";
import star from "../../../assets/images/star-quiz.png";
import { Link } from "react-router-dom";

const Quizzes = () => {

  const [quizzes, setQuizzes] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("quizzes") || "[]");
    setQuizzes(stored);
  }, []);

  return (
    <>
      <NavTeacher />

      <div className="quiz-header">
        <div className="profile-container">
          <h2 className="profile-title">Quizzes</h2>
          <p className="profile-subtitle">
            Create and manage student assessments
          </p>
        </div>

        <div className="btn-quiz">
          <Link to={"/createquizz"} >
            <button>Create Quiz</button>
          </Link>
        </div>
      </div>

      <div className="quiz-grid">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="quiz-card"
            style={{ borderLeft: `6px solid ${quiz.border}` }}
          >
            <span
              className="badge"
              style={{ backgroundColor: quiz.color }}
            >
              {quiz.level}
            </span>

            <h3>{quiz.title || "Quadratic Equations Mastery Test"}</h3>
            <p className="subject">Mathematics . Grade 10</p>

            <div  id="quiz-info">
              <span><img src={question} /> {quiz.questions || 15} Questions</span>
              <span><img src={hour} /> {quiz.duration || 30} Mins</span>
              <span><img src={star}/> {quiz.points || 100} Pts</span>
            </div>

            <div className="progress-section">
              <div className="progress-header">
                <span>Summations</span>
                <span>0/50</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <div className="progress-header">
                <span>Average score</span>
                <span>80%</span>
              </div>
            </div>

            <div className="quiz-actions">
              <Link to="/quizdetails"  state={{ quiz }}><button id="view-btn">View quiz</button></Link>
              <button className="icon-btn-edit">
                <img src={lesson2} alt="" />
              </button>
              <button className="icon-btn">
                <img src={quizzz} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <FooterTeacher />
    </>
  );
};

export default Quizzes;