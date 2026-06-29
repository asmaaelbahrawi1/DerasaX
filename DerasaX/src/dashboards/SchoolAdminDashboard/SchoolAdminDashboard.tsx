import React, { useState } from "react";
import "./SchoolAdminDashboard.css";
import bellIcon from "../../assets/icons/bell.svg";
import logoImg from "../../assets/images/logo-img.png";
import { SubjectsManagement } from "./SubjectsManagement";
import { StudentManagement } from "./StudentManagement";
import { TeacherManagement } from "./TeacherManagement";
import { SchoolAdmin } from "./SchoolAdmin";
import { Announcements } from "./Announcements";
import { Subscriptions } from "./Subscriptions";
import { Support } from "./Support";
import { AboutUs } from "./AboutUs";

import dashIcon from "../../assets/icons/dashboard.svg";
import subjectsIcon from "../../assets/icons/Subjects.Management.svg";
import studentsIcon from "../../assets/icons/Student.Management.svg";
import teachersIcon from "../../assets/icons/Teacher.Management.svg";
import parentsIcon from "../../assets/icons/Parents.Directory.svg";
import announcementsIcon from "../../assets/icons/Announcements.svg";
import subscriptionsIcon from "../../assets/icons/Subscriptions.svg";
import supportIcon from "../../assets/icons/Support.svg";
import logsIcon from "../../assets/icons/Activity.Logs.svg";
import aboutUsIcon from "../../assets/icons/About.US.svg";

export interface Subject {
  id: string;
  gradeLevel: string;
  subjectName: string;
  assignedTeachers: string;
  status: string;
}

export interface Activity {
  icon: string;
  activity: string;
  user: string;
  time: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  rating: number;
  successRate: number;
  responseTime: number;
  feedbackRate: number;
}

export const SchoolAdminDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: "1",
      gradeLevel: "Grade 10",
      subjectName: "Mathematics",
      assignedTeachers: "Mr. Ahmed Ali",
      status: "Active",
    },
  ]);

  const [teachers] = useState<Teacher[]>([
    { id: "1", name: "Ahmed Ali", subject: "English", rating: 4.6, successRate: 96, responseTime: 3.5, feedbackRate: 92 },
    { id: "2", name: "Ahmed Ali", subject: "Math", rating: 4.5, successRate: 95, responseTime: 4.0, feedbackRate: 88 },
    { id: "3", name: "Ahmed Ali", subject: "Science", rating: 4.4, successRate: 94, responseTime: 4.5, feedbackRate: 85 },
    { id: "4", name: "Ahmed Ali", subject: "German", rating: 4.2, successRate: 80, responseTime: 5.0, feedbackRate: 80 },
    { id: "5", name: "Ahmed Ali", subject: "Arabic", rating: 4.8, successRate: 98, responseTime: 2.5, feedbackRate: 95 },
  ]);

  const [recentActivities, setRecentActivities] = useState<Activity[]>([
    { icon: "", activity: "New student enrolled", user: "Ali Ahmed", time: "10 minutes ago" },
    { icon: "", activity: "Assignment graded", user: "Ali Ahmed", time: "9 minutes ago" },
    { icon: "", activity: "Subject created", user: "Ali Ahmed", time: "8 minutes ago" },
    { icon: "", activity: "Teacher assigned", user: "Ali Ahmed", time: "7 minutes ago" },
  ]);

  const handleAddActivity = (activityText: string) => {
    const newActivity: Activity = {
      icon: "", 
      activity: activityText,
      user: "Admin",
      time: "Just now",
    };
    // keep exactly 4 activities visibly for the dashboard layout
    setRecentActivities(prev => [newActivity, ...prev].slice(0, 4));
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: dashIcon },
    { id: "subjects", label: "Subjects Management", icon: subjectsIcon },
    { id: "students", label: "Student Management", icon: studentsIcon },
    { id: "teachers", label: "Teacher Management", icon: teachersIcon },
    { id: "parents", label: "Parents Directory", icon: parentsIcon },
    { id: "announcements", label: "Announcements", icon: announcementsIcon },
    { id: "subscriptions", label: "Subscriptions", icon: subscriptionsIcon },
    { id: "support", label: "Support", icon: supportIcon },
    { id: "logs", label: "Activity Logs", icon: logsIcon },
  ];

  const totalActiveSubjects = subjects.filter(s => s.status === "Active").length;

  const statCards = [
    { title: "Total Enrolled Students", value: "0" },
    { title: "Total Teaching Staff", value: teachers.length.toString() },
    { title: "Total Active Subjects", value: totalActiveSubjects.toString() },
    { title: "Subscription Status", value: "Active" },
  ];

  return (
    <div className="school-admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={logoImg} alt="DerasaX Logo" className="logo-icon" />
          <span>DerasaX</span>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <span 
                className="menu-icon"
                style={{ 
                  WebkitMaskImage: `url(${item.icon})`, 
                  maskImage: `url(${item.icon})` 
                }}
              ></span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="menu-footer">
          <button 
            className={`menu-item ${activeMenu === "aboutus" ? "active" : ""}`}
            onClick={() => setActiveMenu("aboutus")}
          >
            <span 
              className="menu-icon"
              style={{ 
                WebkitMaskImage: `url(${aboutUsIcon})`, 
                maskImage: `url(${aboutUsIcon})` 
              }}
            ></span>
            <span className="menu-label">About US</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <input type="text" placeholder="Search subject by name, grade level..." className="search-bar" />
          <div className="header-right">
            <div className="notification-bell">
              <img src={bellIcon} alt="Notifications" className="bell-icon" />
              <span className="notification-badge">3</span>
            </div>
            <div className="school-info">
              <h3>DerasaX School</h3>
              <p>Admin portal</p>
            </div>
          </div>
        </header>

        {activeMenu === "dashboard" && (
          <>
            {/* Dashboard Title */}
            <section className="dashboard-title">
              <h1>Dashboard</h1>
              <p>Welcome back, Admin! Here's an overview of your school.</p>
            </section>

            {/* Stat Cards */}
            <section className="stat-cards">
              {statCards.map((card, index) => (
                <div
                  key={index}
                  className={`stat-card ${index === 3 ? "status" : ""}`}
                >
                  <h3>{card.title}</h3>
                  <p className="stat-value">{card.value}</p>
                </div>
              ))}
            </section>

            {/* Charts Section */}
            <section className="charts-section">
              <div className="chart-card">
                <div className="chart-header">
                  <h3 style={{ textAlign: 'left', marginBottom: 0 }}>Student Performance Trends</h3>
                </div>
                <div className="chart-placeholder">
                  <svg viewBox="0 0 400 250" className="line-chart">
                    {/* Grid */}
                    {[20, 40, 60, 80, 100].map((val) => {
                      const y = 200 - (val / 100) * 160;
                      return (
                        <g key={val}>
                          <text x="35" y={y + 4} fontSize="12" fill="#999" textAnchor="end">{val}</text>
                          <line x1="45" y1={y} x2="380" y2={y} stroke="#ccc" strokeDasharray="3,3" />
                        </g>
                      );
                    })}
                    {/* Axes */}
                    <line x1="45" y1="40" x2="45" y2="200" stroke="#999" />
                    <line x1="45" y1="200" x2="380" y2="200" stroke="#999" />

                    {/* X Labels */}
                    {["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((month, i) => (
                      <text key={month} x={101 + i * 55.8} y="220" fontSize="12" fill="#999" textAnchor="middle">{month}</text>
                    ))}

                    {/* Line & Points */}
                    <polyline
                      points="45,68.8 101,52.8 157,64 213,78.4 268,68.8 324,52.8 380,56"
                      fill="none"
                      stroke="#0C7288"
                      strokeWidth="1.5"
                    />
                    <circle cx="45" cy="68.8" r="2.5" fill="#0C7288" />
                    <circle cx="101" cy="52.8" r="2.5" fill="#0C7288" />
                    <circle cx="157" cy="64" r="2.5" fill="#0C7288" />
                    <circle cx="213" cy="78.4" r="2.5" fill="#0C7288" />
                    <circle cx="268" cy="68.8" r="2.5" fill="#0C7288" />
                    <circle cx="324" cy="52.8" r="2.5" fill="#0C7288" />
                    <circle cx="380" cy="56" r="2.5" fill="#0C7288" />
                  </svg>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3 style={{ textAlign: 'left', marginBottom: 0 }}>Teacher Engagement metrics</h3>
                </div>
                <div className="chart-placeholder">
                  <svg viewBox="0 0 400 250" className="bar-chart">
                    {/* Grid */}
                    {[20, 40, 60, 80, 100].map((val) => {
                      const y = 200 - (val / 100) * 160;
                      return (
                        <g key={val}>
                          <text x="35" y={y + 4} fontSize="12" fill="#999" textAnchor="end">{val}</text>
                          <line x1="45" y1={y} x2="380" y2={y} stroke="#ccc" strokeDasharray="3,3" />
                        </g>
                      );
                    })}
                    {/* Axes */}
                    <line x1="45" y1="40" x2="45" y2="200" stroke="#999" />
                    <line x1="45" y1="200" x2="380" y2="200" stroke="#999" />

                    {/* X Labels */}
                    {["A. Ali", "S. Hany", "A. Ali", "S. Hany", "A. Ali"].map((name, i) => (
                      <text key={i} x={95 + i * 65} y="220" fontSize="12" fill="#999" textAnchor="middle">{name}</text>
                    ))}

                    {/* Bars */}
                    <rect x="85" y="68.8" width="20" height="131.2" fill="#0C7288" />
                    <rect x="150" y="56" width="20" height="144" fill="#0C7288" />
                    <rect x="215" y="80" width="20" height="120" fill="#0C7288" />
                    <rect x="280" y="48" width="20" height="152" fill="#0C7288" />
                    <rect x="345" y="62.4" width="20" height="137.6" fill="#0C7288" />
                  </svg>
                </div>
              </div>
            </section>

            {/* Recent Activities */}
            <section className="recent-activities">
              <div className="activities-card">
                <h3>Recent Activites</h3>
                <div className="activities-list">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-icon-wrapper">
                        <div className="activity-icon-inner"></div>
                      </div>
                      <div className="activity-content">
                        <p className="activity-text">{activity.activity}</p>
                        <span className="activity-meta">
                          {activity.user} • {activity.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeMenu === "subjects" && (
          <SubjectsManagement 
            subjects={subjects} 
            setSubjects={setSubjects} 
            onActivityAdd={handleAddActivity} 
          />
        )}

        {activeMenu === "students" && (
          <StudentManagement />
        )}

        {activeMenu === "teachers" && (
          <TeacherManagement teachers={teachers} />
        )}

        {activeMenu === "parents" && (
          <SchoolAdmin />
        )}

        {activeMenu === "announcements" && (
          <Announcements />
        )}

        {activeMenu === "subscriptions" && (
          <Subscriptions />
        )}

        {activeMenu === "support" && (
          <Support />
        )}

        {activeMenu === "aboutus" && (
          <AboutUs />
        )}
      </main>
    </div>
  );
};
