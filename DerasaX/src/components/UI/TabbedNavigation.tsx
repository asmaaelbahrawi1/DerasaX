import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TabbedNavigation.css'; 

import event1 from '../../assets/images/Ev1.png';
import event2 from '../../assets/images/Ev2.png';
import event3 from '../../assets/images/Ev3.png';
import event4 from '../../assets/images/Ev4.png';
import event5 from '../../assets/images/Ev5.png';
import event6 from '../../assets/images/Ev6.png';

import modalVideo1 from '../../assets/videos/1.mp4';
import modalVideo2 from '../../assets/videos/2.mp4';
import modalVideo3 from '../../assets/videos/3.mp4';
import modalVideo4 from '../../assets/videos/4.mp4';
import modalVideo5 from '../../assets/videos/5.mp4';
import modalVideo6 from '../../assets/videos/6.mp4';

interface Card {
    id: number;
    subtitle: string;

    image: string;      
    videoUrl: string; 
    // path: string;        
    description: string;
    fullDescription: string;
    keyPoints: string[];
}

const pageContent: Record<string, { title: string; subtitle: string; cards: Card[] }> = {
    '/Events': {
        title: "Moments They’ll Never Forget",
        subtitle: "Our events are designed to help children discover who they are through fun, teamwork, and new experiences.",
        cards: [
            { id: 1, subtitle: "Welcome & Fun Day.",  image: event1, videoUrl: modalVideo1, description: "Community for everyone", fullDescription: "A full day dedicated to fun games and icebreakers to make everyone feel welcome and comfortable.", keyPoints: ["fun", "joy", "Experience", "Teamwork"] },
            { id: 2, subtitle: "Smart Habits Festival", image: event2, videoUrl: modalVideo2, description: "Community for everyone", fullDescription: "We teach children how to stay organized, responsible, and positive through playful booths and interactive learning stations.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 3, subtitle: "Culture & Discovery Day", image:event3, videoUrl: modalVideo3,  description: "Community for everyone", fullDescription: "Children explore different countries through games, costumes, and stories — opening their minds to new worlds and new friends..", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 4, subtitle: "Creativity Carnival", image: event4, videoUrl: modalVideo4,  description: "Community for everyone", fullDescription: "Kids showcase their imagination through drawing, crafts, storytelling, and mini performances celebrating their unique talents.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 5, subtitle: "Kids Talent Showcase", image: event5, videoUrl: modalVideo5, description: "Community for everyone", fullDescription: "A friendly stage for singing, drawing, acting, and inventions giving children the chance to shine and celebrate what makes them special.", keyPoints:["fun", "joy", "Experience", "Teamwork"]  },
            { id: 6, subtitle: "Problem-Solving Day", image: event6, videoUrl: modalVideo6,  description: "Community for everyone", fullDescription: "A full day of treasure hunts, puzzles, and clever missions  teaching kids how to think smart, stay patient, and work together to win.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
        ],
    },
    '/Activities': {
        title: " Adventure and Exploration Activities",
        subtitle: "Activities Focused on Self-Discovery, Teamwork, and New Experiences Making the child full of experience",
        cards: [
            { id: 10, subtitle: "Welcome & Fun Day.",  image: event1, videoUrl: modalVideo1, description: "Community for everyone", fullDescription: "A full day dedicated to fun games and icebreakers to make everyone feel welcome and comfortable.", keyPoints: ["fun", "joy", "Experience", "Teamwork"] },
            { id: 11, subtitle: "Smart Habits Festival", image: event2, videoUrl: modalVideo2, description: "Community for everyone", fullDescription: "We teach children how to stay organized, responsible, and positive through playful booths and interactive learning stations.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 12, subtitle: "Culture & Discovery Day", image:event3, videoUrl: modalVideo3,  description: "Community for everyone", fullDescription: "Children explore different countries through games, costumes, and stories — opening their minds to new worlds and new friends..", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 13, subtitle: "Creativity Carnival", image: event4, videoUrl: modalVideo4,  description: "Community for everyone", fullDescription: "Kids showcase their imagination through drawing, crafts, storytelling, and mini performances celebrating their unique talents.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 14, subtitle: "Kids Talent Showcase", image: event5, videoUrl: modalVideo5, description: "Community for everyone", fullDescription: "A friendly stage for singing, drawing, acting, and inventions giving children the chance to shine and celebrate what makes them special.", keyPoints:["fun", "joy", "Experience", "Teamwork"]  },
            { id: 15, subtitle: "Problem-Solving Day", image: event6, videoUrl: modalVideo6,  description: "Community for everyone", fullDescription: "A full day of treasure hunts, puzzles, and clever missions  teaching kids how to think smart, stay patient, and work together to win.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
        ],
    },
    '/News': {
        title: "Always Something New Happening",
        subtitle: "Our journey is always growing and your children grow with us. Discover our news for more knowledge",
        cards: [
            { id: 10, subtitle: "Welcome & Fun Day.",  image: event1, videoUrl: modalVideo1, description: "Community for everyone", fullDescription: "A full day dedicated to fun games and icebreakers to make everyone feel welcome and comfortable.", keyPoints: ["fun", "joy", "Experience", "Teamwork"] },
            { id: 11, subtitle: "Smart Habits Festival", image: event2, videoUrl: modalVideo2, description: "Community for everyone", fullDescription: "We teach children how to stay organized, responsible, and positive through playful booths and interactive learning stations.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 12, subtitle: "Culture & Discovery Day", image:event3, videoUrl: modalVideo3,  description: "Community for everyone", fullDescription: "Children explore different countries through games, costumes, and stories — opening their minds to new worlds and new friends..", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 13, subtitle: "Creativity Carnival", image: event4, videoUrl: modalVideo4,  description: "Community for everyone", fullDescription: "Kids showcase their imagination through drawing, crafts, storytelling, and mini performances celebrating their unique talents.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
            { id: 14, subtitle: "Kids Talent Showcase", image: event5, videoUrl: modalVideo5, description: "Community for everyone", fullDescription: "A friendly stage for singing, drawing, acting, and inventions giving children the chance to shine and celebrate what makes them special.", keyPoints:["fun", "joy", "Experience", "Teamwork"]  },
            { id: 15, subtitle: "Problem-Solving Day", image: event6, videoUrl: modalVideo6,  description: "Community for everyone", fullDescription: "A full day of treasure hunts, puzzles, and clever missions  teaching kids how to think smart, stay patient, and work together to win.", keyPoints: ["fun", "joy", "Experience", "Teamwork"]  },
        ],
    },
};

const TabbedNavigation: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const currentPath = location.pathname;
    const currentData = pageContent[currentPath] || pageContent['/Events']; // fallback

    const tabs = [
        { name: "Events", path: "/Events" },
        { name: "Activites", path: "/Activities" },
        { name: "News", path: "/News" },
    ];

    const handleTabClick = (path: string) => {
        navigate(path);
    };
    
    

    const isActive = (path: string) => currentPath === path;

    return (
        <div className="tab-navigation-container">
            {/* navigation buttons */}
            <div className="tabs-navigation">
                {tabs.map((tab) => (
                    <button 
                        key={tab.path}
                        className={`tab-btn ${isActive(tab.path) ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick(tab.path)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

                {/* title and search */}
            <h2 className="section-title">{currentData.title}</h2>
            <p className="section-subtitle">{currentData.subtitle}</p>

            <div className="search-filter-row">
                <input type="text" placeholder="Search" className="search-input" />
                <button className="filter-btn">
                    <span className="filter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                        <path d="M35 8.33333H30M22.9167 5V11.6667M21.6667 8.33333H5M11.6667 20H5M17.9167 16.6667V23.3333M35 20H18.3333M35 31.6667H30M22.9167 28.3333V35M21.6667 31.6667H5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span> 
                </button>
            </div>
            {/* grid cards */}
            <div className="cards-grid-container">
                {currentData.cards.map((card) => (
                    <div key={card.id} onClick={() => setSelectedCard(card)} className="grid-card" >
                        <img src={card.image} className="card-image-grid" alt={card.subtitle} />
                    </div>
                ))}
            </div>
            
            {/* modal */}
            {selectedCard && (
                <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
                    <div className="modal-box-new modal-center-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content-wrapper">
                            
                            <div className="modal-image-col">
                                <video className="modal-video-new" src={selectedCard.videoUrl} controls={false} autoPlay loop muted >
                                </video>
                            </div>
                            
                            <div className="modal-text-col">
                                <p className="modal-subtitle">{selectedCard.subtitle}</p>
                                <p className='modal-description'>{selectedCard.description}</p>
                                <p className="modal-full-description">{selectedCard.fullDescription}</p>

                                {selectedCard.keyPoints && selectedCard.keyPoints.length > 0 && (
                                    <>
                                        <p className="key-points-title">Key points</p>
                                        <div className="key-points-container">
                                            {selectedCard.keyPoints.map((point, index) => (
                                                <span key={index} className="key-point-tag">{point}</span>
                                            ))}
                                        </div>
                                    </>
                                )}

                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabbedNavigation;