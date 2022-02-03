import React, { useEffect, useState } from "react";
import { getTitle } from "../../client/Client";
import { Navigation } from "../Navigation/Navigation";
import styling from "./Header.module.css";

/**
 * The Header component is responsible for rendering the components
 * that sit within the application Header.
 *
 * @returns the Header component.
 */
export const Header: React.FC = (): JSX.Element => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    getTitle().then(
      (result) => {
        setTitle(result.title);
      },
      (error) => {
        setError("Error: " + error);
      }
    );
  });

  return error ? (
    <div className={styling.container} data-testid={"header-component"}>
      {error}
    </div>
  ) : (
    <div className={styling.container} data-testid={"header-component"}>
      <Navigation title={title} />
    </div>
  );
};
