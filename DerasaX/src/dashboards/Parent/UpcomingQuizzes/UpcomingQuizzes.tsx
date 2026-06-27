import "./UpcomingQuizzes.css";
import { ChevronRight } from "lucide-react";

const UpcomingQuizzes = () => {
  const quizzes = [
    {
      title: "Reading Comprehension",
      subject: "Reading",
      date: "04/12/2025",
    },
    {
      title: "Spelling Test",
      subject: "English",
      date: "04/12/2025",
    },
    {
      title: "Science Quiz",
      subject: "Science",
      date: "04/12/2025",
    },
  ];

  return (
    <div className="quiz-box">
      <h2>Upcoming quizzes</h2>

      {quizzes.map((quiz, index) => (
        <div className="quiz-card" key={index}>
          <div>
            <h3>{quiz.title}</h3>
            <p>{quiz.subject}</p>
            <span>{quiz.date}</span>
          </div>

          <div className="lesson-link">
            To lesson <ChevronRight size={15} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingQuizzes;