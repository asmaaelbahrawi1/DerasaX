// import React from "react";
import './StatusCards.css'

import {  ClipboardList, AlertCircle } from "lucide-react";

const StatsCards = () => {
  return (
    <div>
        <div className="welcome">
            <h2>Welcome back</h2>
            <p>Here's what's happening with Adham's education</p>
        </div>
    <div className="cards">

      {/* Attendance */}
      <div className="carda">
        <div className="card-header">
          <div className="title">
            <span>Attendance rate</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
          </div>
        </div>

        <h3>87%</h3>
        <div className="progress">
          <div className="fill green"></div>
        </div>

      </div>

      {/* Homework */}
      <div className="carda">
        <div className="card-header">
          <div className="title">
            <span>Homework completion</span>
            <ClipboardList className="icon blue" />

          </div>
        </div>

        <h3>80%</h3>

        <div className="progress">
          <div className="fill blue"></div>
        </div>

        <p>4 of 5 assignments completed</p>
      </div>

      {/* Missing */}
      <div className="carda">
        <div className="card-header">
          <div className="title">
            <span>Missing assignments</span>
            <AlertCircle className="icon red" />

          </div>
        </div>

        <h3>1</h3>

        <p>Math Homework #12</p>
      </div>

    </div>
    </div>
  );
};

export default StatsCards;



