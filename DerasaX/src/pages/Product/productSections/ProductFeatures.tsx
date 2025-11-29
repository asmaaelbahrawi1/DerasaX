import React from "react";
import "../Product.css";
import icon1 from '../../../assets/icons/icon-product-1.png'
import icon2 from '../../../assets/icons/icon-product-2.png'
import icon3 from '../../../assets/icons/icon-product-3.png'
import icon4 from '../../../assets/icons/icon-product-4.png'

const ProductFeatures = () => {
  return (
    <>
      <section className="pf-container">
        <h1>Product Features</h1>
        <h3>
          Discover the key features that make EduTera
          <br />a smarter, faster, and more engaging
        </h3>

        <div className="pf-grid">
          <div className="pf-card">
            <div className="pf-icon-circle">
              <img src={icon1} alt="teacher" />
            </div>
            <h4>Teacher dashboard</h4>
            <p>
              Overview with attendance, homework,
              alerts, and quick actions. Data accurate to
              latest update.
            </p>
          </div>

          <div className="pf-card">
            <div className="pf-icon-circle">
              <img src={icon2} alt="student" />
            </div>
            <h4>Student notes</h4>
            <p>
              Display attendance %, homework %, scores;
              add teacher notes. Metrics accurate, notes
              saved and retrievable.
            </p>
          </div>

          <div className="pf-card">
            <div className="pf-icon-circle">
              <img src={icon3} alt="attendance" />
            </div>
            <h4>Attendence tarcking</h4>
            <p>
              Record attendance and generate calendar
              reports. Attendance status visible per day;
              export available.
            </p>
          </div>

          <div className="pf-card">
            <div className="pf-icon-circle">
              <img src={icon4} alt="auth" />
            </div>
            <h4>Authentication</h4>
            <p>
                Secure login, role‑based access, school data
                isolation. Each user accesses only authorized
                modules; school data is isolated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFeatures;
