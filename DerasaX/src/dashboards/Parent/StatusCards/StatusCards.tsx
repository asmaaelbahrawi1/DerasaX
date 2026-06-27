import "./StatusCards.css";
import {
  GraduationCap,
  ClipboardList,
  AlertCircle,
} from "lucide-react";

const StatusCards = () => {
  return (
    <section className="status-wrapper">

      <div className="welcome">

        <h1>Welcome back</h1>

        <p>Here's what's happening with Adham's education</p>

      </div>

      <div className="status-cards">

        <div className="status-card">

          <div className="status-top">

            <span>Attendance rate</span>

            <GraduationCap size={20} color="#0C7288"/>

          </div>

          <h3>87%</h3>

          <div className="progress">

            <div
              className="progress-fill"
              style={{width:"87%"}}
            />

          </div>

        </div>

        <div className="status-card">

          <div className="status-top">

            <span>Homework completion</span>

            <ClipboardList size={20} color="#0C7288"/>

          </div>

          <h3>80%</h3>

          <div className="progress">

            <div
              className="progress-fill"
              style={{width:"80%"}}
            />

          </div>

        </div>

        <div className="status-card">

          <div className="status-top">

            <span>Missing assignments</span>

            <AlertCircle size={20} color="#E53935"/>

          </div>

          <div className="missing">

            <h3>1</h3>

            <p>assignment</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StatusCards;