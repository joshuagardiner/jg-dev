import React from "react";
import { IconButton } from "@joshuagardiner/typescript-component-library";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styling from "./Navigation.module.css";

export const Navigation: React.FC = () => {
  return (
    <>
      <div className={styling.navigation}>
        <div className={styling.navigationTitle}>JG.dev</div>
        <div className={styling.navigationIcons}>
          <div className={styling.navigationIcon}>
            <IconButton
              color="#FFFFFF"
              data-testid="instagram"
              external={true}
              height="1.8vw"
              href="https://github.com/joshuagardiner"
              icon={IoLogoGithub}
              width="1.8vw"
            />
          </div>
          <div className={styling.navigationIcon}>
            <IconButton
              color="#FFFFFF"
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
