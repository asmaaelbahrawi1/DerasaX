import React from "react";
import "./Announcements.css";

export const Announcements: React.FC = () => {
  return (
    <div className="announcements-container">
      <div className="announcements-header">
        <h1>Announcements</h1>
        <p>Create and manage school-wide announcements</p>
      </div>

      <div className="announcements-card">
        <h2 className="card-title">Announcements History</h2>
        
        <div className="table-responsive">
          <table className="announcements-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Target</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state or placeholders can be rendered here later */}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="button-container">
        <button className="create-ticket-btn">Create New Ticket</button>
      </div>
    </div>
  );
};