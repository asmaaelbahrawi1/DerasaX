import React, { useState } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";

import lesson1 from "../../../assets/images/lesson1.png";
import lesson2 from "../../../assets/images/leeson2.png";
import lesson3 from "../../../assets/images/lesson3.png";
import hour from "../../../assets/images/hourr.png";
import lessonsimg from "../../../assets/images/lessons.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Lessons.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Lessons = () => {
  const initialLessons = [
    {
      id: 1,
      title: "Quadratic Equations",
      description:
        "Learn the fundamentals of quadratic equations, including factoring and formula.",
      subject: "Mathematics",
      views: 245,
      lessonsCount: 5,
      status: "Published",
      tags: ["Math", "Algebra"],
      image: lessonsimg,
    },
    {
      id: 2,
      title: "Qua",
      description:
        "77",
      subject: "arabic",
      views: 99,
      lessonsCount: 5,
      status: "Published",
      tags: ["Chemistry"],
      image: lessonsimg,
    },
    {
      id: 3,
      title: "Physics",
      description:
        "Learn the fundamentals of quadratic equations, including factoring and formula.",
      subject: "Mathematics",
      views: 245,
      lessonsCount: 5,
      status: "Published",
      tags: ["Math", "Algebra", "Equations"],
      image: lessonsimg,
    },
    {
      id: 4,
      title: "Quadratic Equations",
      description:
        "Learn the fundamentals of quadratic equations, including factoring and formula.",
      subject: "Mathematics",
      views: 245,
      lessonsCount: 5,
      status: "Published",
      tags: ["Math", "Algebra", "Equations"],
      image: lessonsimg,
    },
    {
      id: 5,
      title: "Quadratic Equations",
      description:
        "Learn the fundamentals of quadratic equations, including factoring and formula.",
      subject: "Mathematics",
      views: 245,
      lessonsCount: 5,
      status: "Published",
      tags: ["Math", "Algebra", "Equations"],
      image: lessonsimg,
    },
    {
      id: 6,
      title: "Quadratic Equations",
      description:
        "Learn the fundamentals of quadratic equations, including factoring and formula.",
      subject: "Mathematics",
      views: 245,
      lessonsCount: 5,
      status: "Published",
      tags: ["Math", "Algebra", "Equations"],
      image: lessonsimg,
    },
  ];
  const location = useLocation();

useEffect(() => {
  if (location.state) {
    setLessons((prev) => [location.state, ...prev]);
  }
}, [location.state]);

  const [lessons, setLessons] = useState(initialLessons);

  // 🪟 Edit Modal
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🗑️ Delete Modal
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // 🔍 FILTER STATES
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All subjects");
  const [statusFilter, setStatusFilter] = useState("All status");

  // ✏️ Edit
  const handleEdit = (lesson) => {
    setSelectedLesson({ ...lesson });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    const updated = lessons.map((l) =>
      l.id === selectedLesson.id ? selectedLesson : l,
    );

    setLessons(updated);
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  // const handleView = (id) => {
  //   console.log("View lesson:", id);
  // };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    setLessons(lessons.filter((l) => l.id !== deleteId));
    setIsDeleteOpen(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setIsDeleteOpen(false);
    setDeleteId(null);
  };

  // 🔍 FILTER LOGIC
  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSubject =
      subjectFilter === "All subjects" || lesson.subject === subjectFilter;

    const matchesStatus =
      statusFilter === "All status" || lesson.status === statusFilter;

    return matchesSearch && matchesSubject && matchesStatus;
  });
  const navigate = useNavigate();

const handleView = (lesson: any) => {
  navigate(`/lesson/${lesson.id}`, { state: lesson });
};

  return (
    <>
      <NavTeacher />

      <div className="container-dashboard">
        <div className="profile-container">
          <h2 className="profile-title">Lessons</h2>
          <p className="profile-subtitle">
            Manage your teaching materials and lessons
          </p>
        </div>

        <div className="dashboard-button">
          <Link to="/createlesson">
            <button>Create Lesson</button>
          </Link>
        </div>
      </div>

      {/* 🔍 Filters */}
      <div className="filter-box">
        <h2>Lessons</h2>
        <p>Browse your teaching materials and resources</p>

        <div className="filters">
          {/* SEARCH */}
          <div className="input-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search lessons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* SUBJECT */}
          <div className="input-group">
            <label>Subject</label>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option>All subjects</option>
              <option>Mathematics</option>
              <option>Algebra</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Arabic</option>
            </select>
          </div>

          {/* STATUS */}
          <div className="input-group">
            <label>Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* 🧩 Lessons Grid */}
      <div className="lessons-grid">
        {filteredLessons.length === 0 ? (
          <p style={{ textAlign: "center", color: "#959595" }}>
            No lessons available
          </p>
        ) : (
          filteredLessons.map((lesson) => (
            <div className="lesson-card" key={lesson.id}  
  style={{ cursor: "pointer" }}>
              <div className="lesson-image">
                <img src={lesson.image}  onClick={() => handleView(lesson)}/>
                <span className="badge">{lesson.status}</span>
              </div>

              <div className="lesson-content">
                <h3  onClick={() => handleView(lesson)}>{lesson.title}</h3>
                <p  onClick={() => handleView(lesson)}>{lesson.description}</p>

                <div className="lesson-meta">
                  <span>
                    <img src={lesson1} alt="icon" /> {lesson.subject}
                  </span>

                  <span>
                    <img src={hour} alt="icon" /> {lesson.views}
                  </span>

                  <span>
                    <img src={lesson1} alt="icon" /> {lesson.lessonsCount}
                  </span>
                </div>

                <div className="lesson-tags">
                  {lesson.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="lesson-actions">
                  <button
                    className="view-btn"
                      onClick={(e) => {
    e.stopPropagation();
    handleView(lesson);
  }}
                  >
                    View lesson
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(lesson)}
                  >
                    <img src={lesson2} alt="edit" />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(lesson.id)}
                  >
                    <img src={lesson3} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✏️ EDIT MODAL */}
      {isModalOpen && selectedLesson && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Lesson</h2>

            <label>Title</label>
            <input
              value={selectedLesson.title}
              onChange={(e) =>
                setSelectedLesson({
                  ...selectedLesson,
                  title: e.target.value,
                })
              }
            />

            <label>Description</label>
            <textarea
              value={selectedLesson.description}
              onChange={(e) =>
                setSelectedLesson({
                  ...selectedLesson,
                  description: e.target.value,
                })
              }
            />

            <label>Subject</label>
            <select
              value={selectedLesson.subject}
              onChange={(e) =>
                setSelectedLesson({
                  ...selectedLesson,
                  subject: e.target.value,
                })
              }
            >
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
            </select>

            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🗑️ DELETE MODAL */}
      {isDeleteOpen && (
        <div className="modal-overlay" onClick={cancelDelete}>
          <div
            className="modal delete-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Delete Lesson</h2>
            <p>Are you sure you want to delete this lesson?</p>

            <div className="modal-actions">
              <button className="delete-confirm" onClick={confirmDelete}>
                Delete
              </button>

              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterTeacher />
    </>
  );
};

export default Lessons;
