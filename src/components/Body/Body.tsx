import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { Skills } from "../Skills/Skills";
import { Summary } from "../Summary/Summary";
import styling from "./Body.module.css";

/**
 * The Body component is responsible for rendering the components
 * that sit within the application's main Body of content.
 *
 * @returns the Body component.
 */
export const Body: React.FC = () => {
  return (
    <div className={styling.container} data-testid={"body-component"}>
      <div className={styling.content}>
        <Card marginTop={"-9.5vw"} width={"66%"}>
          <Summary />
          <Skills />
          <Experience />
          <Education />
        </Card>
      </div>
    </div>
  );
};
