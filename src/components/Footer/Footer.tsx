import React from "react";
import { IoLogoReact } from "react-icons/io5";
import styling from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.contactInfo}>
          <p>37 Oakwood Gardens, Halifax, HX28HB</p>
          <p>joshuagardiner@live.com</p>
          <p>+44 7947 633 294</p>
        </div>
        <div className={styling.authorInfo}>
          <a
            href={"https://www.linkedin.com/in/joshua-gardiner"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            Joshua Gardiner, 2022
          </a>

          <div className={styling.iconContainer}>
            <p className={styling.authorText}>Powered by:</p>
            <IoLogoReact className={styling.icon} />
          </div>
        </div>
      </div>
    </>
  );
};
