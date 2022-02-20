import React from "react";
import { Client } from "../../client/Client";
import { Navigation } from "../Navigation/Navigation";
import styling from "./Header.module.css";

/**
 * The Header component is responsible for rendering the components
 * that sit within the application Header.
 *
 * @returns the Header component.
 */
export const Header: React.FC = (): JSX.Element => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    new Client()
      .getTitle()
      .then((result) => {
        setTitle(result.title.name);
      })
      .catch((e) => {
        setTitle("JG.dev");
      });
  }, []);

  return (
    <div className={styling.container} data-testid={"header-component"}>
      <Navigation title={title} />
    </div>
  );
};
