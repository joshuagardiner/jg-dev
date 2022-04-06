import React from "react";
import styles from "./Header.module.scss";

/**
 * The Header component is responsible for rendering the components
 * that sit within the application header.
 *
 * @returns the Header component.
 */
export const Header: React.FC = (): JSX.Element => {
  return <div className={styles.container} data-testid={"header"} />;
};
