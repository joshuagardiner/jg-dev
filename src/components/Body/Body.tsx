import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import { Client } from "../../client/Client";
import { IContent } from "../../lib/models/IContent";
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
  const [content, setContent] = React.useState({} as IContent);

  React.useEffect(() => {
    new Client().getContent().then((result) => {
      setContent(result.content);
    });
  }, []);

  return (
    <div className={styling.container} data-testid={"body-component"}>
      <div className={styling.content}>
        <Card marginTop={"-9.5vw"} width={"80%"}>
          <Summary summary={content.summary} />
          <Skills skills={content.skills} />
          <Experience experiences={content.experiences} />
          <Education education={content.education} />
        </Card>
      </div>
    </div>
  );
};
