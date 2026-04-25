import React, { useState } from "react";
import "./NavTeacher.css";
import alarms from "../../../assets/icons/Vector.png";
import Logo from "../../../assets/images/nav-logo.png";
import person from "../../../assets/images/person.gif";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Lessons", path: "/lessons" },
  { name: "Quizzes", path: "/quizzes" },
  { name: "Office Hour", path: "/office-hour" },
  { name: "Messages", path: "/messages" },
  { name: "Community", path: "/community" },
  { name: "Profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
];
type Props = {
  title?: string;
};

export default function NavTeacher({ title }: Props) {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const getPageName = () => {
    const found = links.find(link => link.path === location.pathname);
    return found ? found.name : "Dashboard";
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src={Logo} alt="DerasaX Logo" />
          </div>
        </div>

        <div className="nav-center">
          {title || getPageName()}
        </div>

        <div className="nav-right">
          <div className="bell">
            <img src={alarms} alt="Alarm" />
            <span className="badge">2</span>
          </div>

          <button className="menu-btn" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div className="drawer" onClick={(e) => e.stopPropagation()}>

          {/* Drawer Header */}
          <div className="navbar">
            <div className="nav-left">
              <div className="logo">
                <img src={Logo} alt="DerasaX Logo" />
              </div>
            </div>

            <div className="nav-right">
              <div className="bell">
                <img src={alarms} alt="Alarm" />
                <span className="badge">2</span>
              </div>

              <button className="close" onClick={() => setOpen(false)}>
                ✖
              </button>
            </div>
          </div>

          {/* Person */}
          <div className="person-container">
            <img src={person} className="person-img" />
            <div className="person-data">
              <h1>Dr. Osama Refaat</h1>
              <p>Mathematics</p>
            </div>
          </div>

          {/* Links */}
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}