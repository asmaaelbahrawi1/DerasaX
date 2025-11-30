import './threecards.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import modalVedio from '../../../../assets/videos/Inspiring_Connecting_Empowering_Experiences_Video.mp4' 

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
    image: '/src/assets/images/event.jpg',
    videoUrl: modalVedio,
    path: '/Events', 
    description: "Details about graduation programs...",
    fullDescription: "We’re always creating experiences that inspire, connect, and empower. From tech talks to creative workshops and community gatherings, each event is designed to bring people together, spark ideas, and build something meaningful.",
    keyPoints: ["fun", "joy", "connection", "teamwork"],
  },
  {
    id: 2,
    title: "Our Activities",
    subtitle: "Engage and Learn",
    image: '/src/assets/images/activity.jpg',
    videoUrl: modalVedio,
    path: '/Activities', 
    description: "Details about kids learning activities...",
    fullDescription: "Our activities are designed to foster growth and creativity in a fun, engaging environment. We offer a wide range of programs that cater to different age groups and interests, ensuring everyone finds something they love.",
    keyPoints: ["creativity", "learning", "engagement", "development"],
  },
  {
    id: 3,
    title: "Our News",
    subtitle: "Stay Updated",
    image: '/src/assets/images/news.jpg',
    videoUrl: modalVedio,
    path: '/News', 
    description: "Details about announcements and updates...",
    fullDescription: "Stay informed with the latest news and updates from our community. We regularly share important announcements, success stories, and upcoming initiatives to keep everyone in the loop.",
    keyPoints: ["updates", "announcements", "information", "community"],
  },
];

const ThreeCards = () => {
    //nav hook
  const navigate = useNavigate(); 
  
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleExploreClick = (targetPath: string) => {
    navigate(targetPath);
    setSelectedCard(null); 
  };
  
  const goToPreviousCard = () => {
    if (selectedCard) {
      const currentIndex = cards.findIndex(card => card.id === selectedCard.id);
      if (currentIndex > 0) {
        setSelectedCard(cards[currentIndex - 1]);
      }
    }
  };

  const goToNextCard = () => {
    if (selectedCard) {
      const currentIndex = cards.findIndex(card => card.id === selectedCard.id);
      if (currentIndex < cards.length - 1) {
        setSelectedCard(cards[currentIndex + 1]);
      }
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
          <div className="modal-box-new modal-center-popup" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content-wrapper">
              <div className="modal-image-col">
                <video  className="modal-video-new" src={selectedCard.videoUrl}  controls={false}  autoPlay  loop muted  >
                  
                </video>
              </div>
              
              <div className="modal-text-col">
                <h2>{selectedCard.title}</h2>
                <p className="modal-subtitle">{selectedCard.subtitle}</p>
                <p className="modal-full-description">{selectedCard.fullDescription}</p>

                {selectedCard.keyPoints && selectedCard.keyPoints.length > 0 && (
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
                  {selectedCard.id > 1 && (
                    // back
                    <button className="nav-btn prev-btn" onClick={goToPreviousCard}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                          <path d="M2.27027 5L6 1.16667L4.86487 0L0 5L4.86487 10L6 8.83333L2.27027 5Z" fill="#0C7288"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                          <path d="M2.27027 5L6 1.16667L4.86487 0L0 5L4.86487 10L6 8.83333L2.27027 5Z" fill="#0C7288"/>
                        </svg>
                      Back
                    </button>
                  )}
                  {/* explore */}
                  <button className="explore-btn" onClick={() => handleExploreClick(selectedCard.path)} >
                    Explore more
                  </button>
                  {/*  Next */}
                  {selectedCard.id < cards.length && (
                    <button className="nav-btn next-btn" onClick={goToNextCard}>
                      Next  
                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                         <path d="M3.72973 5L0 1.16667L1.13513 0L6 5L1.13513 10L0 8.83333L3.72973 5Z" fill="#0C7288"/>
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M3.72973 5L0 1.16667L1.13513 0L6 5L1.13513 10L0 8.83333L3.72973 5Z" fill="#0C7288"/>
                      </svg>

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