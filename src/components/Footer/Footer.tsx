import React from "react";
import styling from "./Footer.module.css";

/**
 * The Footer component is responsible for rendering the components
 * that sit within the application Footer.
 *
 * @returns the Footer component
 */
export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styling.container}>
        <p data-testid={"footer"}>Joshua Gardiner, 2022</p>
      </div>
    </>
  );
};
