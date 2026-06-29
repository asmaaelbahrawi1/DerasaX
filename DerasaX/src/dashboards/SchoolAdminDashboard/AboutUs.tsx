import React from "react";
import "./AboutUs.css";

export const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About US</h1>
        <p>See your account and application Information</p>
      </div>

      <div className="info-card">
        <div className="card-header">
          <h2 className="card-title">School Information</h2>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="form-group offset-form-group">
          <label>School Name</label>
          <input type="text" value="DerasaX Mid School - DMS" readOnly />
        </div>

        <div className="form-group offset-form-group">
          <label>Contract Email</label>
          <input type="email" value="Admin@DerasaX.edu" readOnly />
        </div>

        <div className="form-group offset-form-group">
          <label>Contract Phone</label>
          <input type="text" value="+20 123 4567 890" readOnly />
        </div>
      </div>

      <div className="info-card">
        <div className="card-header">
          <h2 className="card-title">Manager Information</h2>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="form-group offset-form-group">
          <label>Manager Name</label>
          <input type="text" value="Adham Ayman Galal" readOnly />
        </div>

        <div className="form-group offset-form-group">
          <label>Contract Email</label>
          <input type="email" value="adhamayman7114@gmail.com" readOnly />
        </div>

        <div className="form-group offset-form-group">
          <label>Contract Phone</label>
          <input type="text" value="+20 114 3303 162" readOnly />
        </div>
      </div>
    </div>
  );
};
