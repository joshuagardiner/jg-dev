import React from "react";
import { IconButton } from "@joshuagardiner/typescript-component-library";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styling from "./Footer.module.css";

/**
 * The Footer component is responsible for rendering the components
 * that sit within the application Footer.
 *
 * @returns the Footer component
 */
export const Footer: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.contactInfo} data-testid={"footer-contact"}>
          <p data-testid={"footer-contact-address"}>37 Oakwood Gardens, Halifax, HX28HB</p>
          <p data-testid={"footer-contact-email"}>joshuagardiner@live.com</p>
          <p data-testid={"footer-contact-telephone"}>+44 7947 633 294</p>
        </div>
        <div className={styling.authorInfo} data-testid={"footer-author"}>
          <a className={styling.authorText} data-testid={"footer-author-title"}>
            Joshua Gardiner, 2022
          </a>
          <div className={styling.authorSocials}>
            <IconButton
              className={styling.authorSocial}
              data-testid="footer-github-btn"
              external={true}
              href="https://github.com/joshuagardiner"
              icon={IoLogoGithub}
            />
            <IconButton
              className={styling.authorSocial}
              data-testid="footer-linkedin-btn"
              external={true}
              href="https://www.linkedin.com/in/joshua-gardiner"
              icon={IoLogoLinkedin}
            />
          </div>
        </div>
      </div>
    </>
  );
};
