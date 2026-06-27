import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage";
import SignIn from "../pages/SignIn/SignIn";

import Events from "../pages/Events/Events";
import Activities from "../pages/Activities/Activities";
import News from "../pages/News/News";

import Product from "../pages/Product/Product";
import AboutPage from "../pages/About/AboutPage";
import NavTeacher from "../dashboards/Teacher/NavTeacher/NavTeacher";
import Lessons from "../dashboards/Teacher/lessons/Lessons";
import Dashboard from "../dashboards/Teacher/dashboard/Dashboard";
import Quizzes from "../dashboards/Teacher/Quizzes/Quizzes";
import OfficeHour from "../dashboards/Teacher/OfficeHour/OfficeHour";
import Messages from "../dashboards/Teacher/Messages/Messages";
import Community from "../dashboards/Teacher/Community/Community";
import Profile from "../dashboards/Teacher/Profile/Profile";
import FooterTeacher from "../dashboards/Teacher/FooterTeacher/FooterTeacher";
import Settings from "../dashboards/Teacher/Settings/Settings";

import ParentDashboard from "../dashboards/Parent/ParentDashboard/ParentDashboard";


export default function AppRouter() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RequestDemoPage" element={<RequestDemoPage />} />
      <Route path="/SignIn" element={<SignIn />} />
      
      <Route path="/Events" element={<Events />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/News" element={<News />} />

      <Route path="/product" element={<Product />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/NavTeacher" element={<NavTeacher />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/office-hour" element={<OfficeHour />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/footerTeacher" element={<FooterTeacher />} />

      <Route path="/parent-dashboard" element={<ParentDashboard />} />


    </Routes>
  );
}
