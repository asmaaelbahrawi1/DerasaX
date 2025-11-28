import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import RequestDemoPage from "../pages/RequestDemo/RequestDemoPage"
import SignIn from "../pages/SignIn/SignIn";
import Events from "../pages/Events/Events"
import Activities from "../pages/Activities/Activities"
import News from "../pages/News/News"
// import ThreeCards from '../pages/Home/HomePageSections/ThreeCardsSection/threecards';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RequestDemoPage" element={<RequestDemoPage />} />
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/Activities" element={<Activities/>} />
      <Route path="/News" element={<News/>} />

    </Routes>
  );
}
