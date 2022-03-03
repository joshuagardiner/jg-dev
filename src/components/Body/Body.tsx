import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import { Client } from "../../client/Client";
import { IContent } from "../../lib/models/IContent";
import { EducationCollection } from "../EducationCollection/EducationCollection";
import { ExperienceCollection } from "../ExperienceCollection/ExperienceCollection";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Skills } from "../Skills/Skills";
import { Summary } from "../Summary/Summary";
import styles from "./Body.module.scss";

/**
 * The Body component is responsible for rendering the components
 * that sit within the application's main body of content.
 *
 * @returns the Body component.
 */
export const Body: React.FC = () => {
  const [contentState, setContentState] = React.useState({
    content: {} as IContent,
    loaded: false
  });

  React.useEffect(() => {
    new Client().getContent().then((result) => {
      setContentState({ content: result.content, loaded: true });
    });
  }, []);

  if (contentState.loaded) {
    return (
      <div className={styles.container} data-testid={"body-component"}>
        <Card className={styles.content}>
          <Summary summary={contentState.content.summary} />
          <Skills skills={contentState.content.skills} />
          <ExperienceCollection experiences={contentState.content.experiences} />
          <EducationCollection education={contentState.content.education} />
        </Card>
      </div>
    );
  }

  return <LoadingSpinner text={"Loading.."} />;
};
