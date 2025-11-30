import "./Faqpage.css";
import faqIcon from "../../assets/icons/Faq-icon.gif";
import React, { useState } from "react";

interface Props { isOpen: boolean;close: () => void;}

const FaqPanel: React.FC<Props> = ({ isOpen, close }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
    };

    const questions = [
    {
        q: "How this work?",
        a: "This platform works by providing users full access to learning tools, resources, and guidance step-by-step.",
    },
    {
        q: "How this work?",
        a: "You simply select what you need and we guide you through the process.",
    },
    {
        q: "How this work?",
        a: "Everything here is optimized to make your experience easy and smooth.",
    },
    {
        q: "How this work?",
        a: "Contact our support team anytime if you have more questions.",
    },
    ];

    return (
    <>
        { isOpen && <div className="faq-overlay" onClick={close}></div>}

        <div className={`faq-panel ${isOpen ? "open" : ""}`}>
        <div className="faq-left">
            <img src={faqIcon} className="faq-icon" />
            <h2>Any Questions? We got you.</h2>
            <p>
            Here are the answers to the questions we get the most. If you're
            still curious, we’re always here to help.
            </p>
        </div>
        <div className="faq-right">
            {questions.map((item, i) => (
            <div key={i} className="faq-item-wrapper">
                <div className="faq-item" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="plus">{activeIndex === i ? "−" : "+"}</span>
                </div>
                <div className={`faq-answer ${activeIndex === i ? "show" : ""}`}>
                {item.a}
                </div>
            </div>
            ))}
        </div>
        </div>
    </>
    );
};

export default FaqPanel;
