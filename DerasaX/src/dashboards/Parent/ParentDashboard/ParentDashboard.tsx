import NavTeacher from "../../Teacher/NavTeacher/NavTeacher";
import FooterTeacher from "../../Teacher/FooterTeacher/FooterTeacher";
import ParentSubnav from "../ParentSubnav/ParentSubnav";
import StatusCards from "../StatusCards/StatusCards";

import QuickActions from "../QuickActions/QuickActions";
import UpcomingQuizzes from "../UpcomingQuizzes/UpcomingQuizzes";
import RecentActivity from "../RecentActivity/RecentActivity";

import "./ParentDashboard.css";

const ParentDashboard = () => {
  return (
    <>
      <NavTeacher showMenu={false} />

      <main className="parent-dashboard">

        <ParentSubnav />

        <section className="dashboard-container">

          <StatusCards />

          <QuickActions />

          <div className="dashboard-grid">

            <UpcomingQuizzes />

            <RecentActivity />

          </div>

        </section>

      </main>

      <FooterTeacher />
    </>
  );
};

export default ParentDashboard;