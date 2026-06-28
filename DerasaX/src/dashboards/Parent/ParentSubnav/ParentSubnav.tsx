import "./ParentSubnav.css";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  Phone,
  MessageCircle,
  Bell,
  User,
} from "lucide-react";

const SubNav = () => {
  const location = useLocation();

  const items = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/parent-dashboard" },
    { name: "Academic Progress", icon: <BarChart3 />, path: "#" },
    { name: "Lessons", icon: <BookOpen />, path: "#" },
    { name: "Quizzes & HomeWorks", icon: <ClipboardList />, path: "#" },
    { name: "Documents", icon: <FileText />, path: "#" },
    { name: "Contact", icon: <Phone />, path: "#" },
    { name: "Messages", icon: <MessageCircle />, path: "#" },
    { name: "Notifications", icon: <Bell />, path: "#" },
    { name: "Profile", icon: <User />, path: "#" },
  ];

  return (
    <div className="subnav">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`subnav-item ${
            location.pathname === item.path ? "active" : ""
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SubNav;