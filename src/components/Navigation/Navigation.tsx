import { IconButton } from "@joshuagardiner/typescript-component-library";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { INavigationProps } from "./INavigationProps";
import styling from "./Navigation.module.css";

/**
 * The Navigation component is responsbile for rendering actionable
 * IconButton's within the application Header.
 *
 * @returns the Navigation component.
 */
export const Navigation: React.FC<INavigationProps> = ({ title }): JSX.Element => {
  return (
    <div className={styling.navigation} data-testid={"navigation-component"}>
      <div className={styling.navigationTitle} data-testid={"navigation-title"}>
        {title}
      </div>
      <div className={styling.navigationIcons}>
        <IconButton
          className={styling.navigationIcon}
          data-testid={"navigation-github-btn"}
          external={true}
          href={"https://github.com/joshuagardiner"}
          icon={IoLogoGithub}
        />
        <IconButton
          className={styling.navigationIcon}
          data-testid="navigation-linkedin-btn"
          external={true}
          href="https://www.linkedin.com/in/joshua-gardiner"
          icon={IoLogoLinkedin}
        />
      </div>
    </div>
  );
};
