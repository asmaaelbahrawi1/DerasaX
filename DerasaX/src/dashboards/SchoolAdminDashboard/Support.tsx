import React from "react";
import "./Support.css";

export const Support: React.FC = () => {
  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Support & Tickets</h1>
        <p>Create and track support tickets</p>
      </div>

      <div className="support-card">
        <h2 className="card-title">All subjects</h2>
        
        <div className="table-responsive">
          <table className="support-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created</th>
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