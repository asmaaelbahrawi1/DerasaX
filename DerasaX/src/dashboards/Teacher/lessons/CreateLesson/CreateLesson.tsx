import React, { useState } from "react";
import NavTeacher from "../../NavTeacher/NavTeacher";
import "./CreateLesson.css";
import ai from "../../../../assets/images/Aigenerate.png";
import upload from "../../../../assets/images/Upload.png";
import lessonsimg from "../../../../assets/images/lessons.png";
import Footer from "../../FooterTeacher/FooterTeacher";
import { useNavigate } from "react-router-dom";

const CreateLesson = () => {
  const navigate = useNavigate();

  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const [objectiveInput, setObjectiveInput] = useState("");
  const [objectives, setObjectives] = useState([]);

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    grade: "",
    duration: "",
    description: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addObjective = () => {
    if (objectiveInput.trim() === "") return;

    setObjectives([...objectives, objectiveInput]);
    setObjectiveInput("");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subject: "",
      grade: "",
      duration: "",
      description: "",
      videoUrl: "",
    });

    setObjectives([]);
    setObjectiveInput("");
    setPdf(null);
    setImage(null);
    setVideo(null);
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ نحسب عدد الموارد
    const resourcesCount =
      (pdf ? 1 : 0) +
      (image ? 1 : 0) +
      (video ? 1 : 0);

    const newLesson = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      subject: formData.subject,
      views: 0,
      lessonsCount: resourcesCount, // ✅ هنا التعديل
      duration: formData.duration,
      status: status === "published" ? "Published" : "Draft",
      tags: objectives,
      image: lessonsimg,

      files: {
        pdf,
        image,
        video,
      },
    };

    navigate("/lessons", { state: newLesson });

    setShowPopup(true);
    resetForm();

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const submitWithStatus = (type) => {
    setStatus(type);

    setTimeout(() => {
      document.getElementById("lessonForm").requestSubmit();
    }, 0);
  };

  return (
    <>
      <NavTeacher title="Create Lesson"/>

      <div className="dashboard-button">
        <form id="lessonForm" onSubmit={handleSubmit}>
          
          <button type="button" onClick={() => submitWithStatus("draft")}>
            Save draft
          </button>

          <button type="button" onClick={() => submitWithStatus("published")}>
            Publish
          </button>

          <div className="container-adding">

            <div className="left-container-adding">

              <div className="top-left-card">

                <div className="info-card">
                  <div id="info">
                    <h1>Basic Information</h1>
                    <p>Essential lesson details</p>
                  </div>

                  <div>
                    <button type="button">
                      <img src={ai} alt="ai" /> Ai Generate
                    </button>
                  </div>
                </div>

                <div className="lesson-title">
                  <label>Lesson title*</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter lesson name"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="subject-grade">

                  <div className="subject">
                    <label>Subject*</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="Algebra">Algebra</option>
                      <option value="Physics">Physics</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Arabic">Arabic</option>
                    </select>
                  </div>

                  <div className="grade">
                    <label>Grade level*</label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>

                </div>

                <div className="lesson-title">
                  <label>Duration*</label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Enter duration of video"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="lesson-title">
                  <label>Description*</label>
                  <textarea
                    name="description"
                    placeholder="Provide a detailed description of this lesson"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

              </div>

              <div className="button-left-card">
                <h1>Learning Objectives</h1>
                <p>What students will learn from this lesson</p>

                {objectives.map((obj, index) => (
                  <div className="objectives" key={index}>
                    <div className="circle-num">{index + 1}</div>
                    <p>{obj}</p>
                  </div>
                ))}

                <div className="objectives">
                  <div className="circle-num">
                    {objectives.length + 1}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter first objectives"
                    value={objectiveInput}
                    onChange={(e) => setObjectiveInput(e.target.value)}
                  />
                </div>

                <button type="button" onClick={addObjective}>
                  + Add Objectives
                </button>
              </div>

            </div>

            <div className="right-container-adding">

              <div className="first-card-right">
                <h1>Resources</h1>
                <p>Add supplementary materials</p>

                <label className="upload-btn">
                  <img src={upload} alt="" />
                  Upload PDF
                  <input
                    type="file"
                    accept=".pdf"
                    hidden
                    onChange={(e) => setPdf(e.target.files[0])}
                  />
                </label>
                {pdf && <p>{pdf.name}</p>}

                <label className="upload-btn">
                  <img src={upload} alt="" />
                  Upload Presentation
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>
                {image && <p>{image.name}</p>}

                <label className="upload-btn">
                  <img src={upload} alt="" />
                  Upload Video
                  <input
                    type="file"
                    accept="video/*"
                    hidden
                    onChange={(e) => setVideo(e.target.files[0])}
                  />
                </label>
                {video && <p>{video.name}</p>}
              </div>

              <div className="second-card-right">
                <h2>Ai tips</h2>
                <p><li>Use clear, descriptive titles</li></p>
                <p><li>Add 3-5 specific learning objectives</li></p>
                <p><li>Include relevant tags</li></p>
              </div>

              <div className="third-card-right">
                <h1>Media content</h1>
                <p>Upload or link lesson materials</p>

                <label>Video URL link</label>
                <input
                  type="text"
                  name="videoUrl"
                  placeholder="Add link...."
                  value={formData.videoUrl}
                  onChange={handleChange}
                />
              </div>

            </div>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✔ Success</h2>
            <p>Lesson submitted successfully</p>
          </div>
        </div>
      )}
            <Footer />

    </>
  );
};

export default CreateLesson;