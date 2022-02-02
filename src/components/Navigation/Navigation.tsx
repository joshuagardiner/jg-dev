import React from "react";
import { IconButton } from "@joshuagardiner/typescript-component-library";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import styling from "./Navigation.module.css";

/**
 * The Navigation component is responsbile for rendering actionable
 * IconButton's within the application Header.
 *
 * @returns the Navigation component.
 */
export const Navigation: React.FC = () => {
  return (
    <div className={styling.navigation} data-testid={"navigation-component"}>
      <div className={styling.navigationTitle} data-testid={"navigation-title"}>
        JG.dev
      </div>
      <div className={styling.navigationIcons}>
        <div className={styling.navigationIcon}>
          <IconButton
            color="#FFFFFF"
            data-testid="navigation-github"
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
            data-testid="navigation-linkedin"
            external={true}
            height="1.8vw"
            href="https://www.linkedin.com/in/joshua-gardiner"
            icon={IoLogoLinkedin}
            width="1.8vw"
          />
        </div>
      </div>
    </div>
  );
};
