import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import SignIn from "../pages/SignIn/SignIn";
// import bg from "../assets/images/Signin-bg.png";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
