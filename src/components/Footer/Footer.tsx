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
        <p data-testid={"footer"}>Joshua Gardiner, 2022</p>
      </div>
    </>
  );
};
