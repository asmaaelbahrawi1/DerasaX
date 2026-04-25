import "./threecards.css";
import "../../../../styles/global.css";
import "../../../../styles/theme.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import modalVedio from "../../../../assets/videos/Inspiring_Connecting_Empowering_Experiences_Video.mp4";

// ✅ FIX: استيراد الصور بدل string paths
import eventImg from "../../../../assets/images/event.jpg";
import activityImg from "../../../../assets/images/activity.jpg";
import newsImg from "../../../../assets/images/news.jpg";

interface Card {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  videoUrl: string;
  path: string;
  description: string;
  fullDescription: string;
  keyPoints: string[];
}

const cards: Card[] = [
  {
    id: 1,
    title: "Our Events",
    subtitle: "Community for everyone",
    image: eventImg,
    videoUrl: modalVedio,
    path: "/Events",
    description: "Details about graduation programs...",
    fullDescription:
      "We’re always creating experiences that inspire, connect, and empower. From tech talks to creative workshops and community gatherings, each event is designed to bring people together, spark ideas, and build something meaningful.",
    keyPoints: ["fun", "joy", "connection", "teamwork"],
  },
  {
    id: 2,
    title: "Our Activities",
    subtitle: "Engage and Learn",
    image: activityImg,
    videoUrl: modalVedio,
    path: "/Activities",
    description: "Details about kids learning activities...",
    fullDescription:
      "Our activities are designed to foster growth and creativity in a fun, engaging environment. We offer a wide range of programs that cater to different age groups and interests, ensuring everyone finds something they love.",
    keyPoints: ["creativity", "learning", "engagement", "development"],
  },
  {
    id: 3,
    title: "Our News",
    subtitle: "Stay Updated",
    image: newsImg,
    videoUrl: modalVedio,
    path: "/News",
    description: "Details about announcements and updates...",
    fullDescription:
      "Stay informed with the latest news and updates from our community. We regularly share important announcements, success stories, and upcoming initiatives to keep everyone in the loop.",
    keyPoints: ["updates", "announcements", "information", "community"],
  },
];

const ThreeCards = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleExploreClick = (targetPath: string) => {
    navigate(targetPath);
    setSelectedCard(null);
  };

  const currentIndex = selectedCard
    ? cards.findIndex((card) => card.id === selectedCard.id)
    : -1;

  const goToPreviousCard = () => {
    if (currentIndex > 0) {
      setSelectedCard(cards[currentIndex - 1]);
    }
  };

  const goToNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setSelectedCard(cards[currentIndex + 1]);
    }
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          key={card.id}
          onClick={() => setSelectedCard(card)}
          className={`card ${index === 1 ? "middle-card" : ""}`}
        >
          <img src={card.image} className="card-image" alt={card.title} />
          <div className="card-title">{card.title}</div>
        </div>
      ))}

      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div
            className="modal-box-new modal-center-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content-wrapper">
              <div className="modal-image-col">
                <video
                  className="modal-video-new"
                  src={selectedCard.videoUrl}
                  autoPlay
                  loop
                  muted
                />
              </div>

              <div className="modal-text-col">
                <h2>{selectedCard.title}</h2>
                <p className="modal-subtitle">{selectedCard.subtitle}</p>
                <p className="modal-full-description">
                  {selectedCard.fullDescription}
                </p>

                {selectedCard.keyPoints?.length > 0 && (
                  <>
                    <p className="key-points-title">Key points</p>
                    <div className="key-points-container">
                      {selectedCard.keyPoints.map((point, index) => (
                        <span key={index} className="key-point-tag">
                          {point}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div className="modal-actions">
                  {currentIndex > 0 && (
                    <button
                      className="nav-btn prev-btn"
                      onClick={goToPreviousCard}
                    >
                      Previous
                    </button>
                  )}

                  <button
                    className="explore-btn"
                    onClick={() =>
                      handleExploreClick(selectedCard.path)
                    }
                  >
                    Explore more
                  </button>

                  {currentIndex < cards.length - 1 && (
                    <button
                      className="nav-btn next-btn"
                      onClick={goToNextCard}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeCards;