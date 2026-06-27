import React from 'react';
import NavTeacher from "../../Teacher/NavTeacher/NavTeacher";
import FooterTeacher from "../../Teacher/FooterTeacher/FooterTeacher";
import SubNav from "../ParentSubnav/ParentSubnav";
import StatsCards from '../StatusCards/StatusCards';
import "./ParentDashboard.css";



const ParentDashboard = () => {
  return (
    <div>
      <NavTeacher />
      <SubNav />
      <StatsCards />

      







      <FooterTeacher />
    </div>
  );
};

export default ParentDashboard;