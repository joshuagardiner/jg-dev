import React from "react";
import styles from "./Header.module.scss";

/**
 * The Header component is responsible for rendering the components
 * that sit within the application header.
 *
 * @returns the Header component.
 */
export const Header: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container} data-testid={"header"}>
      <svg
        className={styles.separator}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={styles.wave} d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
      </svg>
    </div>
  );
};
