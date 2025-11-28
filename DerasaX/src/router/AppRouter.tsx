import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RequestDemoPage" element={<RequestDemoPage />} />
    </Routes>
  );
}
