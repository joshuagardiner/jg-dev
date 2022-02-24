import React from "react";
import styling from "./Header.module.css";

/**
 * The Header component is responsible for rendering the components
 * that sit within the application Header.
 *
 * @returns the Header component.
 */
export const Header: React.FC = (): JSX.Element => {
  return <div className={styling.container} data-testid={"header-component"} />;
};
