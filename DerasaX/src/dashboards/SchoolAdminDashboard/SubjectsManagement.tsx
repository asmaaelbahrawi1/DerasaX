import React, { useState } from "react";
import "./SubjectsManagement.css";
import type { Subject } from "./SchoolAdminDashboard";

interface SubjectsManagementProps {
  subjects: Subject[];
  setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
  onActivityAdd: (activity: string) => void;
}

export const SubjectsManagement: React.FC<SubjectsManagementProps> = ({
  subjects,
  setSubjects,
  onActivityAdd,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState({
    gradeLevel: "",
    subjectName: "",
    assignedTeachers: "",
    status: "Active",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSubject({ ...newSubject, [name]: value });
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject.gradeLevel || !newSubject.subjectName) return;

    const subject: Subject = {
      ...newSubject,
      id: Date.now().toString(),
    };

    setSubjects([...subjects, subject]);
    onActivityAdd(`Subject created: ${subject.subjectName}`);
    setIsModalOpen(false);
    setNewSubject({
      gradeLevel: "",
      subjectName: "",
      assignedTeachers: "",
      status: "Active",
    });
  };

  const handleDeleteSubject = (id: string, name: string) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
    onActivityAdd(`Subject deleted: ${name}`);
  };

  return (
    <div className="subjects-management-section">
      <section className="dashboard-title">
        <h1>Subjects Management</h1>
        <p>Manage subjects, grades, and teacher assignments</p>
      </section>

      <section className="subjects-content">
        <div className="subjects-card">
          <h3 className="subjects-card-title">All subjects</h3>
          <div className="table-responsive">
            <table className="subjects-table">
              <thead>
                <tr>
                  <th>Grade Level</th>
                  <th>Subject Name</th>
                  <th>Assigned Teacher(s)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjects.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      No subjects added yet.
                    </td>
                  </tr>
                ) : (
                  subjects.map((subject) => (
                    <tr key={subject.id}>
                      <td>{subject.gradeLevel}</td>
                      <td>{subject.subjectName}</td>
                      <td>{subject.assignedTeachers || "None"}</td>
                      <td>
                        <span className={`status-badge ${subject.status.toLowerCase()}`}>
                          {subject.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn edit">Edit</button>
                        <button
                          className="action-btn delete"
                          onClick={() => handleDeleteSubject(subject.id, subject.subjectName)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="add-subject-container">
          <button
            className="add-subject-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Subject
          </button>
        </div>
      </section>

      {/* Add Subject Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Subject</h2>
            <form onSubmit={handleAddSubject}>
              <div className="form-group">
                <label>Grade Level</label>
                <input
                  type="text"
                  name="gradeLevel"
                  placeholder="e.g. Grade 10"
                  value={newSubject.gradeLevel}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject Name</label>
                <input
                  type="text"
                  name="subjectName"
                  placeholder="e.g. Mathematics"
                  value={newSubject.subjectName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Assigned Teacher(s)</label>
                <input
                  type="text"
                  name="assignedTeachers"
                  placeholder="e.g. Mr. Ahmed"
                  value={newSubject.assignedTeachers}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={newSubject.status}
                  onChange={handleInputChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Subject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
