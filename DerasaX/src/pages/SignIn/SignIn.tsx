import React, { useState } from "react";
import "./SignIn.css";
import google from "../../assets/icons/google.png";
import arrow from "../../assets/icons/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/images/Signin-bg.png";
import { useAuth } from "../../context/AuthContext";
import { getRouteForRole } from "../../utils/jwt";

interface FormValues {
  userID: string;
  password: string;
}

interface FormErrors {
  userID?: string;
  password?: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [values, setValues] = useState<FormValues>({
    userID: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState("");

  const validate = (fieldValues: FormValues = values): FormErrors => {
    const temp: FormErrors = {};

    if ("userID" in fieldValues) {
      if (!fieldValues.userID) temp.userID = "User ID is required";
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) temp.password = "Password is required";
      else if (fieldValues.password.length < 6)
        temp.password = "Password must be at least 6 characters";
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
    setAuthError("");

    const fieldError = validate({ ...values, [name]: value });
    setErrors(fieldError);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({ userID: true, password: true });
    setAuthError("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const role = await login({
        userID: values.userID.trim(),
        password: values.password,
      });

      const route = getRouteForRole(role);

      if (!route) {
        setAuthError("Your account role is not supported yet.");
        return;
      }

      navigate(route, { replace: true });
    } catch (error) {
      setAuthError(
        error instanceof Error ? error.message : "Invalid User ID or password."
      );
    } finally {
      setIsSubmitting(false);
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
          <label>User ID</label>
          <input
            type="text"
            name="userID"
            placeholder="Enter your User ID"
            value={values.userID}
            onChange={handleChange}
            disabled={isSubmitting}
            className={errors.userID && touched.userID ? "error-input" : ""}
          />
          {touched.userID && errors.userID && (
            <span className="error">{errors.userID}</span>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            disabled={isSubmitting}
            className={errors.password && touched.password ? "error-input" : ""}
          />
          {touched.password && errors.password && (
            <span className="error">{errors.password}</span>
          )}

          {authError && <span className="error">{authError}</span>}

          <div className="options">
            <label className="remember">
              <input type="checkbox" disabled={isSubmitting} /> Remember me
            </label>
            <a href="" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn-sign" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>

          <button type="button" className="btn-google" disabled={isSubmitting}>
            <img src={google} alt="google" /> Sign in with google
          </button>

          <p className="text">
            Do you want a demo? <Link to="/RequestDemoPage">Request now</Link>
          </p>
        </form>
        

      </div>   
            {/* <Link to="/dashboard">Sign In as teacher </Link> */}
            <Link to="/parent-dashboard">Sign In as Parent</Link>
            <Link to="/SchoolAdminDashboard">Sign In as Admin</Link>


    </div>
  );
}
