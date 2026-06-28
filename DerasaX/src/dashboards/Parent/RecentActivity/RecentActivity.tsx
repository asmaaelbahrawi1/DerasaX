import "./RecentActivity.css";
import { Clock } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      title: "Homework",
      desc: "Submitted Write a Story assignment",
      date: "07/12/2025, 17:00:00",
    },
    {
      title: "Quiz",
      desc: "Completed Spelling Test with score 45/50",
      date: "04/12/2025, 15:00:00",
    },
    {
      title: "Lesson",
      desc: "Completed Plant Life Cycle lesson",
      date: "03/12/2025, 13:00:00",
    },
  ];

  return (
    <div className="activity-box">
      <h2>Recent activity</h2>

      {activities.map((item, index) => (
        <div className="activity-card" key={index}>
          <h3>{item.title}</h3>

          <p>{item.desc}</p>

          <span>
            <Clock size={12} />
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;