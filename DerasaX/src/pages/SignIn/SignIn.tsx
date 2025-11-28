import React, { useState } from "react";
import "./SignIn.css";
import google from "../../assets/icons/google.png";
import arrow from "../../assets/icons/arrow.png";
import { Link } from "react-router-dom";
import bg from "../../assets/images/Signin-bg.png";

interface FormValues {
  email: string;
  password: string;
  id: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  id?: string;
}

export default function SignIn() {
  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
    id: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (fieldValues: FormValues = values): FormErrors => {
    const temp: FormErrors = {};

    if ("email" in fieldValues) {
      if (!fieldValues.email) temp.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email))
        temp.email = "Email is not valid";
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) temp.password = "Password is required";
      else if (fieldValues.password.length < 6)
        temp.password = "Password must be at least 6 characters";
    }

    if ("id" in fieldValues) {
      if (!fieldValues.id) temp.id = "ID is required";
    }

    return temp;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setTouched({ ...touched, [name]: true });

    const fieldError = validate({ ...values, [name]: value });
    setErrors(fieldError);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ email: true, password: true, id: true });

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!", values);
    }
  };

  return (
    <div
      className="signin-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="top-div">
        <Link to="/" className="home-link">
         <img src={arrow} alt="" className="arrow" />   Home Page
        </Link>
      </div>

      <div className="form-container">
        <h2>Welcome Back</h2>
        <p>Please enter your details</p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={errors.email && touched.email ? "error-input" : ""}
          />
          {touched.email && errors.email && (
            <span className="error">{errors.email}</span>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            className={errors.password && touched.password ? "error-input" : ""}
          />
          {touched.password && errors.password && (
            <span className="error">{errors.password}</span>
          )}

          <label>ID</label>
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            value={values.id}
            onChange={handleChange}
            className={errors.id && touched.id ? "error-input" : ""}
          />
          {touched.id && errors.id && <span className="error">{errors.id}</span>}

          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <a href="" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-sign">
            Sign in
          </button>

          <button type="button" className="btn-google">
            <img src={google} alt="google" /> Sign in with google
          </button>

          <p className="text">
            Do you want a demo? <a href="#">Request now</a>
          </p>
        </form>
      </div>
    </div>
  );
}
