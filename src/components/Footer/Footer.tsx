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

          <div className={styling.authorSocials}>
            <IconButton
              color="#132138"
              data-testid="instagram"
              external={true}
              height="1.8vw"
              href="https://github.com/joshuagardiner"
              icon={IoLogoGithub}
              width="1.8vw"
            />
            <IconButton
              color="#132138"
              data-testid="linkedin"
              external={true}
              height="1.8vw"
              href="https://www.linkedin.com/in/joshua-gardiner"
              icon={IoLogoLinkedin}
              width="1.8vw"
            />
          </div>
        </div>
      </div>
    </>
  );
};
