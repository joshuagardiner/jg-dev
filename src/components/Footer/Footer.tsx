import React from "react";
import styles from "./Footer.module.scss";

/**
 * The Footer component is responsible for rendering the components
 * that sit within the application footer.
 *
 * @returns the Footer component
 */
export const Footer: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.separator}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={styles.wave} d="M1200 120L0 16.48 0 0 1200 0 1200 120z" />
      </svg>
      <p className={styles.author} data-testid={"footer"}>
        Joshua Gardiner, 2024
      </p>
    </div>
  );
};
