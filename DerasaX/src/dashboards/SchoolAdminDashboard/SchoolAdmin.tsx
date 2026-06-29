import React from 'react';
import './SchoolAdmin.css';

export const SchoolAdmin: React.FC = () => {
  return (
    <div className="school-admin-page">
      <div className="page-header">
        <div>
          <h2>Parents Directory</h2>
          <p>View and manage parent information and linked students</p>
        </div>
        <button className="refresh-btn">Refresh</button>
      </div>

      <div className="announcements-history-card">
        <h3>Announcements History</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Parent Name</th>
              <th>Linked Students</th>
              <th>Linked Students</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty space matching the mockup */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
