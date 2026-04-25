import React, { useState } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import Logo from "../../../assets/images/community.png";
import "./OfficeHour.css";

interface Request {
  id: number;
  name: string;
  subtitle: string;
  message: string;
  preferred: string;
}

const OfficeHour = () => {
  const [tab, setTab] = useState<"pending" | "scheduled">("pending");

  const pending: Request[] = [
    {
      id: 1,
      name: "Adham Ayman",
      subtitle: "Help with Quadratic Equations",
      message:
        "I'm struggling to understand how to factor complex quadratic equations. Could we go over some examples together?",
      preferred: "Requested Dec 5, 4:00 PM",
    },
    {
      id: 2,
      name: "Adham Ayman",
      subtitle: "Help with Quadratic Equations",
      message:
        "I'm struggling to understand how to factor complex quadratic equations. Could we go over some examples together?",
      preferred: "Requested Dec 5, 4:00 PM",
    },
    {
      id: 3,
      name: "Adham Ayman",
      subtitle: "Help with Quadratic Equations",
      message:
        "I'm struggling to understand how to factor complex quadratic equations. Could we go over some examples together?",
      preferred: "Requested Dec 5, 4:00 PM",
    },
  ];

  const scheduled: Request[] = [
    {
      id: 3,
      name: "Adham Ayman",
      subtitle: "Help with Quadratic Equations",
      message:
        "I'm struggling to understand how to factor complex quadratic equations. Could we go over some examples together?",
      preferred: "Scheduled Dec 6, 4:00 PM",
    },
  ];

  const data = tab === "pending" ? pending : scheduled;

  return (
    <>
      <NavTeacher />

      {/* HEADER */}
      <div className="top-office">
        <div className="profile-container">
          <h2 className="profile-title">Office hours</h2>
          <p className="profile-subtitle">Manage student meeting requests</p>
        </div>

        <div className="schedule-badge">Sun–Thu, 2:00PM - 4:00PM</div>
      </div>


      <div className="tabs">
        <div
          className={`tab ${tab === "pending" ? "active" : ""}`}
          onClick={() => setTab("pending")}
        >
          Pending ({pending.length})
        </div>

        <div
          className={`tab ${tab === "scheduled" ? "active" : ""}`}
          onClick={() => setTab("scheduled")}
        >
          Scheduled ({scheduled.length})
        </div>

        {/* 👇 السلايدر */}
        <div
          className={`tab-indicator ${tab === "scheduled" ? "right" : "left"}`}
        />
      </div>


      <div className="button-office">
        {data.map((item) => (
          <div className="card-office" key={item.id}>
            <div className="img-office">
              <img src={Logo} alt="logo" />
            </div>

            <div className="content-office">
              <h1>{item.name}</h1>
              <h2>{item.subtitle}</h2>

              <p>{item.message}</p>

              {tab === "pending" && (
                <>
                  <textarea
                    name="area"
                    id="area"
                    placeholder="Add comment or suggest alternative schedule..."
                  />

                  <div className="actions">
                    <button className="accept">Accept Request</button>
                    <button className="decline">Decline Message</button>
                  </div>
                </>
              )}

              <span className="preferred">{item.preferred}</span>
            </div>
          </div>
        ))}
      </div>

      <FooterTeacher />
    </>
  );
};

export default OfficeHour;
