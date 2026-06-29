import React, { useMemo } from 'react';
import './TeacherManagement.css';
import type { Teacher } from './SchoolAdminDashboard';

interface TeacherManagementProps {
  teachers: Teacher[];
}

export const TeacherManagement: React.FC<TeacherManagementProps> = ({ teachers }) => {
  // Calculate real metrics from the teachers array
  const overallSuccessRate = useMemo(() => {
    if (teachers.length === 0) return 0;
    const total = teachers.reduce((acc, t) => acc + t.successRate, 0);
    return Math.round(total / teachers.length);
  }, [teachers]);

  const avgRating = useMemo(() => {
    if (teachers.length === 0) return 0;
    const total = teachers.reduce((acc, t) => acc + t.rating, 0);
    return (total / teachers.length).toFixed(1);
  }, [teachers]);

  const avgResponseTime = useMemo(() => {
    if (teachers.length === 0) return 0;
    const total = teachers.reduce((acc, t) => acc + t.responseTime, 0);
    return (total / teachers.length).toFixed(1);
  }, [teachers]);

  const avgFeedbackRate = useMemo(() => {
    if (teachers.length === 0) return 0;
    const total = teachers.reduce((acc, t) => acc + t.feedbackRate, 0);
    return Math.round(total / teachers.length);
  }, [teachers]);

  // Sort teachers for top performing
  const topTeachers = useMemo(() => {
    return [...teachers].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, [teachers]);

  return (
    <div className="teacher-dashboard" style={{ padding: '0 32px 32px 32px' }}>
      <div className="tm-header">
        <div className="tm-title-section">
          <h2>Teacher Dashboard</h2>
          <p>Comprehensive overview of teacher effectiveness and engagement</p>
        </div>
        <button className="tm-view-all-btn">View All Teacher</button>
      </div>

      <div className="tm-kpi-grid">
        <div className="tm-kpi-card">
          <span className="tm-kpi-label">Overall Success Rate</span>
          <h3 className="tm-kpi-value">{overallSuccessRate}%</h3>
          <span className="tm-kpi-subtext">Across all teacher</span>
        </div>
        <div className="tm-kpi-card">
          <span className="tm-kpi-label">Average Rating</span>
          <h3 className="tm-kpi-value">{avgRating}/5</h3>
          <span className="tm-kpi-subtext">Student feedback</span>
        </div>
        <div className="tm-kpi-card">
          <span className="tm-kpi-label">Response Time</span>
          <h3 className="tm-kpi-value">{avgResponseTime} hrs</h3>
          <span className="tm-kpi-subtext">Average response</span>
        </div>
        <div className="tm-kpi-card">
          <span className="tm-kpi-label">Feedback Rate</span>
          <h3 className="tm-kpi-value">{avgFeedbackRate}%</h3>
          <span className="tm-kpi-subtext">Assignment feedback</span>
        </div>
      </div>

      <div className="tm-charts-wrapper">
        <div className="tm-chart-card">
          <div className="tm-chart-header">
            <h3>Subjects Rate</h3>
            <span className="tm-info-icon">i</span>
          </div>
          <div className="tm-donut-wrapper">
            <svg viewBox="0 0 100 100" className="tm-donut-chart">
              {/* Fake donut using stroke-dasharray (circumference ~ 125.6 for r=20) */}
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#b2f2bb" strokeWidth="24" strokeDasharray="56.5 175.9" strokeDashoffset="0"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#c0cffd" strokeWidth="24" strokeDasharray="31.4 175.9" strokeDashoffset="-56.5"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#ffec99" strokeWidth="24" strokeDasharray="18.8 175.9" strokeDashoffset="-87.9"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#dcb0ff" strokeWidth="24" strokeDasharray="12.5 175.9" strokeDashoffset="-106.7"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#ffc9c9" strokeWidth="24" strokeDasharray="6.2 175.9" strokeDashoffset="-119.2"></circle>
              <circle cx="50" cy="50" r="16" fill="white"></circle>
            </svg>
          </div>
          <div className="tm-donut-legend">
            <div className="tm-legend-item">
              <span className="tm-legend-color" style={{backgroundColor: '#b2f2bb'}}></span>
              <div className="tm-legend-text">
                <span className="tm-legend-title">English</span>
                <span className="tm-legend-val">45%</span>
              </div>
            </div>
            <div className="tm-legend-item">
              <span className="tm-legend-color" style={{backgroundColor: '#c0cffd'}}></span>
              <div className="tm-legend-text">
                <span className="tm-legend-title">Math</span>
                <span className="tm-legend-val">25%</span>
              </div>
            </div>
            <div className="tm-legend-item">
              <span className="tm-legend-color" style={{backgroundColor: '#ffec99'}}></span>
              <div className="tm-legend-text">
                <span className="tm-legend-title">Science</span>
                <span className="tm-legend-val">15%</span>
              </div>
            </div>
            <div className="tm-legend-item">
              <span className="tm-legend-color" style={{backgroundColor: '#dcb0ff'}}></span>
              <div className="tm-legend-text">
                <span className="tm-legend-title">German</span>
                <span className="tm-legend-val">10%</span>
              </div>
            </div>
            <div className="tm-legend-item">
              <span className="tm-legend-color" style={{backgroundColor: '#ffc9c9'}}></span>
              <div className="tm-legend-text">
                <span className="tm-legend-title">Arabic</span>
                <span className="tm-legend-val">5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tm-chart-card">
          <h3>Student Success Rate by Teacher</h3>
          <div className="tm-bar-wrapper">
            <svg viewBox="0 0 350 200" className="tm-comp-bar-chart">
              {/* Dotted Grid Background Box */}
              <rect x="40" y="20" width="280" height="150" fill="none" stroke="#e0e0e0" strokeDasharray="2,2" />
              {/* Horizontal Grid lines */}
              {[20, 50, 80, 110, 140].map((val) => (
                <line key={val} x1="40" y1={val} x2="320" y2={val} stroke="#e0e0e0" strokeDasharray="2,2" />
              ))}
              {/* Y Labels */}
              {['100', '80', '60', '40', '20'].map((label, i) => (
                <text key={label} x="35" y={25 + i * 30} fontSize="10" fill="#999" textAnchor="end">{label}</text>
              ))}
              {/* X Labels from real data (first 5) */}
              {teachers.slice(0, 5).map((t, i) => {
                const parts = t.name.split(' ');
                const initial = parts[0].charAt(0) + '. ' + (parts[1] || '');
                return <text key={t.id} x={70 + i * 56} y="185" fontSize="10" fill="#999" textAnchor="middle">{initial}</text>
              })}
              {/* Dynamic Bars based on success rate */}
              {teachers.slice(0, 5).map((t, i) => {
                // max height is 150 which corresponds to 100 on Y axis
                // so height = (t.successRate / 100) * 150
                const h = (t.successRate / 100) * 150;
                const y = 170 - h;
                return <rect key={t.id} x={62 + i * 56} y={y} width="16" height={h} fill="#0C7288" />
              })}
            </svg>
          </div>
          <div className="tm-ai-recommendation">
            <div className="tm-ai-rec-header">
              <span className="tm-ai-icon">✨</span>
              <span className="tm-ai-title">Ai Recommendations:</span>
            </div>
            <div className="tm-ai-text">Review performance of Dr/A. Ali</div>
          </div>
        </div>
      </div>

      <div className="tm-bottom-section">
        <div className="tm-full-card">
          <h3 className="tm-list-card-title">Top Performing Teachers</h3>
          <div className="tm-teacher-list">
            {topTeachers.map((teacher, index) => (
              <div key={teacher.id} className="tm-teacher-item">
                <div className="tm-teacher-rank-circle">{index + 1}</div>
                <div className="tm-teacher-info">
                  <p className="tm-teacher-name">{teacher.name}</p>
                  <p className="tm-teacher-role">{teacher.subject} Lecturer</p>
                </div>
                
                <div className="tm-teacher-metrics">
                  <div className="tm-metric-group">
                    <span className="tm-metric-label">Rating</span>
                    <span className="tm-metric-val" style={{color: '#0C7288'}}>{teacher.rating}/5</span>
                  </div>
                  <div className="tm-metric-group">
                    <span className="tm-metric-label">Success Rate</span>
                    <span className="tm-metric-val" style={{color: '#0C7288'}}>{teacher.successRate}%</span>
                  </div>
                  <div className="tm-badge-wrapper">
                    <span className="tm-badge status-excellent">Excellent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};