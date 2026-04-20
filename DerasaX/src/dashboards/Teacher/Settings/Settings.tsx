import React, { useState, useEffect } from "react";
import NavTeacher from "../NavTeacher/NavTeacher";
import FooterTeacher from "../FooterTeacher/FooterTeacher";
import "./Settings.css";

const Settings = () => {

  const [savedToggles, setSavedToggles] = useState(() => {
    const saved = localStorage.getItem("toggles");

    const defaultToggles = saved
      ? JSON.parse(saved)
      : [false, false, false, false, false, false];

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode !== null) {
      defaultToggles[5] = JSON.parse(darkMode);
    }

    return defaultToggles;
  });

  const [toggles, setToggles] = useState(savedToggles);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setToggles(savedToggles);
  }, [savedToggles]);

  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);

    if (index === 5) {
      localStorage.setItem("darkMode", JSON.stringify(newToggles[5]));
    }
  };

  const handleSave = () => {
    const toSave = [...toggles];
    toSave[5] = savedToggles[5];

    localStorage.setItem("toggles", JSON.stringify(toSave));
    setSavedToggles(toSave);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 5000);
  };

  return (
    <>
      <NavTeacher />

      <div className="settings-box">
        <h2 className="settings-title">Settings</h2>
        <p className="settings-subtitle">Manage your account and preferences</p>
      </div>

      {/* Notifications */}
      <div className="box">
        <h1>Notifications Preference</h1>

        {[0, 1, 2, 3, 4].map((i) => (
          <div className="settings-section" key={i}>
            <div className="settings-item">
              <h3>
                {i === 0 && "Quizzes submissions"}
                {i === 1 && "Parent Messages"}
                {i === 2 && "Community posts"}
                {i === 3 && "Office hours requests"}
                {i === 4 && "System notifications"}
              </h3>

              <p>
                {i === 0 && "When students submit quizzes"}
                {i === 1 && "When parents send messages"}
                {i === 2 && "When students post in community"}
                {i === 3 && "When students request office hours"}
                {i === 4 && "Important system updates and announcements"}
              </p>
            </div>

            <div
              className={`toggle ${toggles[i] ? "on" : ""}`}
              onClick={() => handleToggle(i)}
            >
              <div className="circle"></div>
            </div>
          </div>
        ))}

        <div className="btn">
          <button id="btn-changes" onClick={handleSave}>
            {saved ? "Changes Saved" : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Appearance */}
      <div className="box">
        <h1>Appearance</h1>

        <div className="settings-section">
          <div className="settings-item">
            <h3>Dark Mode</h3>
            <p>Enable dark theme</p>
          </div>

          <div
            className={`toggle ${toggles[5] ? "on" : ""}`}
            onClick={() => handleToggle(5)}
          >
            <div className="circle"></div>
          </div>
        </div>
      </div>

      <FooterTeacher />
    </>
  );
};

export default Settings;