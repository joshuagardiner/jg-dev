import React from "react";
import { Card, CollectionColumn } from "@joshuagardiner/typescript-component-library";
import { IExperience } from "../../lib/models/IExperience";
import { Experience } from "../Experience/Experience";
import { IExperienceCollectionProps } from "./IExperienceCollectionProps";
import styles from "./ExperienceCollection.module.scss";

/**
 * The ExperienceCollection component is responsible for rendering multiple employment
 * experiences within the application body.
 *
 * @param props the properties that can be passed into the component.
 * @returns the ExperienceCollection component.
 */
export const ExperienceCollection: React.FC<IExperienceCollectionProps> = (
  props: IExperienceCollectionProps
) => {
  const { experiences } = props;

  return experiences.length > 0 ? (
    <div data-testid={"experience-collection"}>
      <h2 className={styles.title} data-testid={"experience-collection-title"}>
        Experience
      </h2>
      <CollectionColumn>
        {experiences.map((e: IExperience) => (
          <Card key={e.id} className={e.priority ? styles.experience : styles.subExperience}>
            <Experience company={e.company} content={e.content} role={e.role} tenure={e.tenure} />
          </Card>
        ))}
      </CollectionColumn>
    </div>
  ) : (
    <div data-testid={"experience-collection-no-results"} />
  );
};
