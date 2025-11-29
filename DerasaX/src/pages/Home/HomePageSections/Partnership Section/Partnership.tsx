import { useEffect, useState } from "react";
import "./Partnership.css";
import handVideo from "../../../../assets/videos/hand-video.mp4";
import school2 from "../../../../assets/images/school-2.png";
import school1 from "../../../../assets/images/school-1.png";
import school3 from "../../../../assets/images/school-3.jpg";
import school4 from "../../../../assets/images/school-4.jpg";
import Logo from "../../../../assets/images/Drasa-ph.jpg";
import icon from "../../../../assets/images/animate-partner.gif";


export default function Partnership() {
  const rightImages = [
    school1,
    school2,
    school3,
    school4
  ];

  const topIcons = [
    icon
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % rightImages.length);
    }, 2500);

    const interval2 = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % topIcons.length);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
    <div className="partner-container">
            <img
        src={topIcons[currentIcon]}
        className="top-icon"
        alt="top icon"
      />

      <h2 className="title">Our Partnership With <span style={{color:"#68AAB6"}}>.</span></h2>

      <div className="logos-wrapper">
        <img
          src={Logo}
          className="left-logo"
          alt="left logo"
        />

        <video
          className="handshake-video"
          autoPlay
          loop
          muted
          src={handVideo}
        />

        {/* Rotating right logos */}
        <img
          key={rightImages[currentImg]}
          src={rightImages[currentImg]}
          className="right-logo fade-img"
          alt="right logo"
        />
      </div>
    </div>
     <div className="partner-content">
        <h1>We’re proud to collaborate with these schools to build a smarter,
            more supportive learning environment for every student. Together,
            we empower children to grow with confidence through interactive learning,
            transparent communication, and the right tools for success.
            This partnership reflects our shared belief that education works
            best when school and home stay connected.</h1>
      </div>
      </>
  );
}
