import React from 'react';
import './StudentManagement.css';

export const StudentManagement: React.FC = () => {
  const topPerforming = [
    { id: 1, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '96%', status: 'Excellent', statusClass: 'status-excellent' },
    { id: 2, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '96%', status: 'Excellent', statusClass: 'status-excellent' },
    { id: 3, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '96%', status: 'Excellent', statusClass: 'status-excellent' },
  ];

  const poorPerforming = [
    { id: 4, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '65%', status: 'Bad', statusClass: 'status-bad' },
    { id: 5, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '65%', status: 'Bad', statusClass: 'status-bad' },
    { id: 6, name: 'Ahmed Ali', grade: 'Grade 10', percentage: '65%', status: 'Bad', statusClass: 'status-bad' },
  ];

  return (
    <div className="student-dashboard" style={{ padding: '0 32px 32px 32px' }}>
      <div className="st-header">
        <div className="st-title-section">
          <h2>Student Dashboard</h2>
          <p>Comprehensive overview of student academic performance</p>
        </div>
        <button className="view-all-btn">View All Students</button>
      </div>

      <div className="st-kpi-grid">
        <div className="st-kpi-card">
          <span className="st-kpi-label">Overall Completion Rate</span>
          <h3 className="st-kpi-value">87%</h3>
          <span className="st-kpi-subtext">Across all grades</span>
        </div>
        <div className="st-kpi-card">
          <span className="st-kpi-label">Average Grade</span>
          <h3 className="st-kpi-value">B+</h3>
          <span className="st-kpi-subtext">85.3% average</span>
        </div>
        <div className="st-kpi-card">
          <span className="st-kpi-label">Top Performers</span>
          <h3 className="st-kpi-value">435</h3>
          <span className="st-kpi-subtext">Students with A grade</span>
        </div>
        <div className="st-kpi-card">
          <span className="st-kpi-label">Need Support</span>
          <h3 className="st-kpi-value">87</h3>
          <span className="st-kpi-subtext">Students below C grade</span>
        </div>
      </div>

      <div className="st-charts-wrapper">
        <div className="st-chart-card">
          <h3>Grades Distribution</h3>
          <div className="st-donut-wrapper">
            <svg viewBox="0 0 100 100" className="donut-chart">
              {/* Fake donut using stroke-dasharray (circumference ~ 125.6 for r=20) */}
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#b2f2bb" strokeWidth="24" strokeDasharray="50.2 175.9" strokeDashoffset="0"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#c0cffd" strokeWidth="24" strokeDasharray="44 175.9" strokeDashoffset="-50.2"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#ffec99" strokeWidth="24" strokeDasharray="26 175.9" strokeDashoffset="-94.2"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#dcb0ff" strokeWidth="24" strokeDasharray="26 175.9" strokeDashoffset="-120.2"></circle>
              <circle cx="50" cy="50" r="28" fill="transparent" stroke="#ffc9c9" strokeWidth="24" strokeDasharray="29.7 175.9" strokeDashoffset="-146.2"></circle>
              <circle cx="50" cy="50" r="16" fill="white"></circle>
            </svg>
          </div>
          <div className="st-donut-legend">
            <div className="legend-item"><span className="legend-color" style={{backgroundColor: '#b2f2bb'}}></span>A:40%</div>
            <div className="legend-item"><span className="legend-color" style={{backgroundColor: '#c0cffd'}}></span>B:25%</div>
            <div className="legend-item"><span className="legend-color" style={{backgroundColor: '#ffec99'}}></span>C:10%</div>
            <div className="legend-item"><span className="legend-color" style={{backgroundColor: '#dcb0ff'}}></span>D:5%</div>
            <div className="legend-item"><span className="legend-color" style={{backgroundColor: '#ffc9c9'}}></span>F:1%</div>
          </div>
        </div>

        <div className="st-chart-card">
          <h3>Completion Rate by Grade Level</h3>
          <div className="st-bar-wrapper">
            <svg viewBox="0 0 350 200" className="comp-bar-chart">
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
              {/* X Labels */}
              {["G8", "G9", "G10", "G11", "G12"].map((grade, i) => (
                <text key={grade} x={70 + i * 56} y="185" fontSize="10" fill="#999" textAnchor="middle">{grade}</text>
              ))}
              {/* Bars */}
              <rect x="62" y="80" width="16" height="90" fill="#0C7288" />
              <rect x="118" y="70" width="16" height="100" fill="#0C7288" />
              <rect x="174" y="90" width="16" height="80" fill="#0C7288" />
              <rect x="230" y="65" width="16" height="105" fill="#0C7288" />
              <rect x="286" y="85" width="16" height="85" fill="#0C7288" />
            </svg>
          </div>
          <div className="st-ai-recommendation">
            <div className="ai-rec-header">
              <span className="ai-icon">✨</span>
              <span className="ai-title">Ai Recommendations:</span>
            </div>
            <div className="ai-text">Improvement in grade 8 &amp; grade10</div>
          </div>
        </div>
      </div>

      <div className="st-lists-wrapper">
        {/* Left List */}
        <div className="st-chart-card">
          <h3 className="list-card-title">Top Performing Students</h3>
          <div className="st-student-list">
            {topPerforming.map(student => (
              <div key={student.id} className="st-student-item">
                <div className="st-student-info">
                  <p className="st-student-name">{student.name}</p>
                  <p className="st-student-grade">{student.grade}</p>
                </div>
                <div className="st-student-score">
                  <span className="st-percentage" style={{color: '#0C7288'}}>{student.percentage}</span>
                  <span className={`st-badge ${student.statusClass}`}>{student.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right List (Matches exactly verbatim to the mockup) */}
        <div className="st-chart-card">
          <h3 className="list-card-title">Top Performing Students</h3>
          <div className="st-student-list">
            {poorPerforming.map(student => (
              <div key={student.id} className="st-student-item">
                <div className="st-student-info">
                  <p className="st-student-name">{student.name}</p>
                  <p className="st-student-grade">{student.grade}</p>
                </div>
                <div className="st-student-score">
                  <span className="st-percentage" style={{color: '#0C7288'}}>{student.percentage}</span>
                  <span className={`st-badge ${student.statusClass}`}>{student.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
