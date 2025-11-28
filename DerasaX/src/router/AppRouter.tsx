import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage"
import SignIn from "../pages/SignIn/SignIn";
import Product from "../pages/Product/Product";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RequestDemoPage" element={<RequestDemoPage />} />
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
  );
}
