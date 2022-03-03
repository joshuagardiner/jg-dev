import React from "react";
import styles from "./Footer.module.scss";

/**
 * The Footer component is responsible for rendering the components
 * that sit within the application footer.
 *
 * @returns the Footer component
 */
export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.author} data-testid={"footer"}>
        Joshua Gardiner, 2022
      </p>
    </div>
  );
};
