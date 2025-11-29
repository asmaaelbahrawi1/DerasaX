import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage";
import SignIn from "../pages/SignIn/SignIn";

import Events from "../pages/Events/Events";
import Activities from "../pages/Activities/Activities";
import News from "../pages/News/News";

import Product from "../pages/Product/Product";
import AboutPage from "../pages/About/AboutPage";

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
    </Routes>
  );
}
