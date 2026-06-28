import "./FaqButton.css";
import faqIcon from "../../assets/icons/Faq-button.png";
import React, { useState } from "react";
import Faqpage from "./Faqpage";

const FaqButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="faq-btn" onClick={() => setOpen(true)}>
        <img src={faqIcon} />
      </button>

      <Faqpage isOpen={open} close={() => setOpen(false)} />
    </>
  );
};

export default FaqButton;
