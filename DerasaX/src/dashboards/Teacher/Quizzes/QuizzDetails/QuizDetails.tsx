import React, { useState } from "react";
import "./QuizDetails.css";
import NavTeacher from "../../NavTeacher/NavTeacher";
import Footer from "../../FooterTeacher/FooterTeacher";
import { useNavigate } from "react-router-dom";
import ai from "../../../../assets/images/ai.png";
import photo from "../../../../assets/images/community.png";
import ain from "../../../../assets/images/quiz-ain.png";
import { useLocation } from "react-router-dom";
const QuizDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();
  const quiz = location.state?.quiz;

  return (
    <>
      <NavTeacher title="Quiz Details" />

      <div className="profile-container">
        <h2
          className="profile-title"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          {"<"} {quiz?.title || "Quiz Details"}
        </h2>

        <p className="profile-subtitle">Create a new quiz with AI assistance</p>

        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <span>Submissions</span>
              <div className="icon"></div>
            </div>

            <div className="card-value">45/50</div>

            <div className="progress">
              <div className="fill fill-90"></div>
            </div>

            <div className="card-desc">90% Completion</div>
          </div>

          <div className="card">
            <div className="card-header">
              <span>Average score</span>
              <div className="icon"></div>
            </div>

            <div className="card-value">80%</div>

            <div className="progress">
              <div className="fill fill-80"></div>
            </div>

            <div className="card-desc">Class performance</div>
          </div>

          <div className="card">
            <div className="card-header">
              <span>Questions</span>
              <div className="icon"></div>
            </div>

            <div className="card-value blue">10 Questions</div>

            <div className="card-desc">
              20 Total points - 2 points per question
            </div>
          </div>
        </div>


        {/* Tabs */}
        <div className="tabs">
          <div
            className={activeTab === "overview" ? "tab active" : "tab"}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </div>

          <div
            className={activeTab === "submissions" ? "tab active" : "tab"}
            onClick={() => setActiveTab("submissions")}
          >
            submissions
          </div>

          <div
            className={activeTab === "questions" ? "tab active" : "tab"}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </div>
        </div>
      </div>

      {/* CONTENT */}
      {activeTab === "overview" && (
        <div className="overview-container">
          {/* Left */}
          <div className="quiz-info">
            <h1 id="h1">Quiz information</h1>

            <p className="desc-title">Description</p>
            <p className="desc-text">
              {quiz?.description || "No description available"}
            </p>

            <hr />

            <div className="grid">
              <div>
                <p className="label">Duration</p>
                <p className="value">{quiz?.duration || 20} minutes</p>
              </div>

              <div>
                <p className="label">Difficulty</p>
                <p className="value green">{quiz?.level || "Easy"}</p>
              </div>

              <div>
                <p className="label">Total points</p>
                <p className="value">{quiz?.points || 20} Points</p>
              </div>

              <div>
                <p className="label">Status</p>
                <p className="value green">active</p>
              </div>
            </div>

            <hr />

            <p className="label">Due date</p>
            <p className="value">Wednesday, December 4, 2024 at 1:59 AM</p>
          </div>

          {/* Right */}
          <div className="right-side">
            <div className="quick-stats">
              <h3>Quick stats</h3>

              <div className="stat">
                <span id="span">Highest score</span>
                <span>98%</span>
              </div>

              <div className="stat">
                <span id="span">Lowest Score</span>
                <span>62%</span>
              </div>

              <div className="stat">
                <span id="span">Median Score</span>
                <span>85%</span>
              </div>

              <div className="stat">
                <span id="span">Avg. Time Taken</span>
                <span>24 min</span>
              </div>
            </div>

            <div className="ai-box">
              <h4>
                <img src={ai} /> AI statement
              </h4>
              <p>
                Question 4 has the lowest correct rate (65%). Overall
                performance is above average. Great job!
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "submissions" && (
        <div className="submissions-container">
          {/* Row */}
          {[1, 2, 3, 4].map((item) => (
            <div className="submission-card" key={item}>
              <div className="left">
                <img src={photo} className="avatar" />

                <div>
                  <p className="name">Adham Ayman</p>
                  <p className="date">Submitted Dec 2, 2:04 PM</p>
                </div>
              </div>

              <div className="right">
                <div className="score">
                  <span className="percent">76%</span>
                  <span className="time">15 Minutes</span>
                </div>

                <button className="review-btn">
                  <span className="eye">
                    <img src={ain} />
                  </span>
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "questions" && (
        <div className="questions-container">
          {[1, 2].map((q) => (
            <div className="question-card" key={q}>
              <div className="three-cards">
                <div className="q-1">
                  <p>Question</p>
                </div>
                <div className="q-2">
                  <p>Multiple choice</p>
                </div>
                <div className="q-3">
                  <p>2 pts</p>
                </div>
              </div>

              {/* Question text */}
              <p className="question-text">
                What is the standard form of a quadratic equation?
              </p>

              {/* Progress */}
              <div className="progress-section">
                <span className="progress-label">Correct answer rate:</span>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>

                <span className="progress-percent">80%</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default QuizDetails;
