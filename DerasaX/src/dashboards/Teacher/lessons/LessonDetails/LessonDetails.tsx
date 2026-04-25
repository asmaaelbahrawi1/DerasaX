import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./LessonDetails.css";
import NavTeacher from "../../NavTeacher/NavTeacher";
import Footer from "../../FooterTeacher/FooterTeacher";

const LessonDetails = () => {
  const location = useLocation();
  const lesson = location.state;
  const navigate = useNavigate();

  if (!lesson) return <p>No Data Found</p>;

  return (
    <>
      <NavTeacher title="Lesson Details" />
      <div className="lesson-details-container">
        <div className="cont-into">
          <div className="into">
            <h1
              className="lesson-title"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              {"<  Introduction to "} {lesson.title}
            </h1>
          </div>
          <div className="dashboard-button">
            <Link to="/createlesson">
              <button>Create Lesson</button>
            </Link>
          </div>
        </div>

        <div className="lesson-video">
          <img src={lesson.image} alt={lesson.title} />
        </div>

        <div className="lesson-details-content">
          <div className="lesson-description">
            <h3>Description</h3>
            {lesson.description ? (
              <p>{lesson.description}</p>
            ) : (
              <p style={{ color: "#999" }}>No description available</p>
            )}

            <h3>Tags</h3>
            {lesson.tags && lesson.tags.length > 0 ? (
              <ul>
                {lesson.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "#999" }}>No tags added</p>
            )}

            {/* ✅ Resources */}
            <h3>Resources</h3>

            {!lesson.files?.pdf &&
            !lesson.files?.image &&
            !lesson.files?.video ? (
              <p style={{ color: "#999" }}>No resources available</p>
            ) : (
              <>
                {lesson.files?.pdf && (
                  <a
                    className="a-pdf"
                    href={URL.createObjectURL(lesson.files.pdf)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 View PDF
                  </a>
                )}

                {lesson.files?.image && (
                  <img
                    src={URL.createObjectURL(lesson.files.image)}
                    alt="uploaded"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                )}

                {lesson.files?.video && (
                  <video
                    src={URL.createObjectURL(lesson.files.video)}
                    controls
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                )}
              </>
            )}
          </div>

          <div className="lesson-overview">
            <h3>Lesson Overview</h3>

            <div className="overview-item">
              <span className="span">Status</span>
              <span>{lesson.status || "N/A"}</span>
            </div>

            <div className="overview-item">
              <span className="span">Subject</span>
              <span>{lesson.subject || "N/A"}</span>
            </div>

            <div className="overview-item">
              <span className="span">Views</span>
              <span>{lesson.views ?? "0"}</span>
            </div>
            <div className="overview-item">
              <span className="span">Duration</span>
              <span>
                {lesson.duration ?? "0"} {"hour"}
              </span>
            </div>
              <div className="overview-item" id="over">
              <span className="span">Lessons Count</span>
              <span>{lesson.lessonsCount ?? "0"}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LessonDetails;
