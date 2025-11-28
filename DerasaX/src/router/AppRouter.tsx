import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage"
import SignIn from "../pages/SignIn/SignIn";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RequestDemoPage" element={<RequestDemoPage />} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
  );
}
