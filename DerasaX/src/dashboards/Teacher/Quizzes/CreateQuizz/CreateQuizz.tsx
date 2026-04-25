import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateQuizz.css";
import NavTeacher from "../../NavTeacher/NavTeacher";
import Footer from "../../FooterTeacher/FooterTeacher";

const CreateQuizz = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  // ================= STATE =================
  const [form, setForm] = useState({
    title: "",
    subject: "",
    grade: "",
    duration: "",
    points: 0,
    description: "",
  });

  const [errors, setErrors] = useState<any>({});

  const [settings, setSettings] = useState({
    late: true,
    shuffle: true,
    results: true,
  });

  // ================= HANDLERS =================
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSetting = (key: string) => {
    setSettings({ ...settings, [key]: !settings[key as keyof typeof settings] });
  };

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors: any = {};

    if (!form.title.trim()) newErrors.title = "Quiz title is required";

    if (!form.subject) newErrors.subject = "Subject is required";

    if (!form.grade) newErrors.grade = "Grade is required";

    if (!form.duration) newErrors.duration = "Duration is required";
    else if (!/^[0-9]+$/.test(form.duration))
      newErrors.duration = "Duration must be a number";

    if (!form.description.trim())
      newErrors.description = "Description is required";
    else if (form.description.length < 20)
      newErrors.description = "Description must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SAVE =================
  const saveQuiz = (type: "draft" | "publish") => {
    const existing = JSON.parse(localStorage.getItem("quizzes") || "[]");

    const newQuiz = {
      ...form,
      id: Date.now(),
      level: "Medium",
      color: "#f4c542",
      border: "#f4c542",
    };

    localStorage.setItem("quizzes", JSON.stringify([newQuiz, ...existing]));

    setPopupMsg(type === "draft" ? "Saved as Draft ✅" : "Quiz Published 🚀");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/quizzes");
    }, 1500);
  };

  // ================= ACTIONS =================
  const handleSaveDraft = () => {
    if (!validate()) return;
    saveQuiz("draft");
  };

  const handlePublish = () => {
    if (!validate()) return;
    saveQuiz("publish");
  };

  // ================= UI =================
  return (
    <>
      <NavTeacher title="Create Quiz" />

      <div className="quiz-header">
        <div className="profile-container">
          <h2
            className="profile-title"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          >
            {"<"} Create quiz
          </h2>
          <p className="profile-subtitle">
            Create a new quiz with AI assistance
          </p>
        </div>

        <div className="btn-saves">
          <button onClick={handleSaveDraft} id="bb">Save draft</button>
          <button onClick={handlePublish} id="bb">Publish</button>
        </div>
      </div>

      <div className="quiz-container">
        <div className="quiz-left">
          <div className="createe">
          <h3 className="section-title">Basic Information</h3>
          <p className="section-subtitle">Essential lesson details</p>
</div>
          <label>Quiz title*</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}

          <div className="row">
            <div>
              <label>Subject*</label>
              <select name="subject" onChange={handleChange}>
                <option value=""disabled style={{color:"#6b7280"}}>Select subject</option>
                <option>Math</option>
                <option>Science</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Arabic</option>
              </select>
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div>
              <label>Grade level*</label>
              <select name="grade" onChange={handleChange}>
                <option value="" disabled style={{color:"#6b7280"}}>Select grade</option>
                <option>Grade 7</option>
                <option>Grade 8</option>
                <option>Grade 9</option>
                <option>Grade 10</option>
                <option>Grade 11</option>
                <option>Grade 12</option>
              </select>
              {errors.grade && <span className="error">{errors.grade}</span>}
            </div>
          </div>

          <div className="row">
            <div>
              <label>Duration*</label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
              />
              {errors.duration && (
                <span className="error">{errors.duration}</span>
              )}
            </div>

            <div>
              <label>Total points</label>
              <input value={form.points} readOnly />
            </div>
          </div>

          <label>Description*</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div className="quiz-right">
          <div className="quick-card">
            <h3>Quick Settings</h3>

            <div className="setting-row">
              <div>
                <p className="title">Allow late submissions</p>
                <span>Students can submit after due date</span>
              </div>
              <div
                className={`toggle-switch ${settings.late ? "active" : ""}`}
                onClick={() => toggleSetting("late")}
              ></div>
            </div>

            <div className="setting-row">
              <div>
                <p className="title">Shuffle questions</p>
                <span>Randomize question order</span>
              </div>
              <div
                className={`toggle-switch ${settings.shuffle ? "active" : ""}`}
                onClick={() => toggleSetting("shuffle")}
              ></div>
            </div>

            <div className="setting-row">
              <div>
                <p className="title">Show results</p>
                <span>Display results after submission</span>
              </div>
              <div
                className={`toggle-switch ${settings.results ? "active" : ""}`}
                onClick={() => toggleSetting("results")}
              ></div>
            </div>
          </div>

          <div className="about-card">
            <h3>About Questions</h3>
            <p>Add questions manually or generate with AI</p>

            <div className="about-buttons">
              <button className="add-btn">+ Add Questions</button>
              <button className="ai-btn">✦ AI Generate</button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>{popupMsg}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CreateQuizz;