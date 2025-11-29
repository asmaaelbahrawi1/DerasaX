import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
    </Routes>
  );
}
