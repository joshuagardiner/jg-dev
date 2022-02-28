import React from "react";
import { Card, CollectionColumn } from "@joshuagardiner/typescript-component-library";
import { IExperienceCollectionProps } from "./IExperienceCollectionProps";
import styling from "./ExperienceCollection.module.css";
import { Experience } from "../Experience/Experience";

/**
 * The ExperienceCollection component is responsible for rendering content
 * within the application Body.
 *
 * @returns the ExperienceCollection component.
 */
export const ExperienceCollection: React.FC<IExperienceCollectionProps> = (
  props: IExperienceCollectionProps
) => {
  const { experiences } = props;

  return experiences ? (
    <div data-testid={"experience-component"}>
      <h2 className={styling.title} data-testid={"experience-title"}>
        Experience
      </h2>
      <CollectionColumn>
        {experiences.map((exp: any) => (
          <Card key={exp.id} className={exp.priority ? styling.experience : styling.subExperience}>
            <Experience
              company={exp.company}
              content={exp.content}
              id={exp.id}
              priority={exp.priority}
              role={exp.role}
              tenure={exp.tenure}
            />
          </Card>
        ))}
      </CollectionColumn>
    </div>
  ) : (
    <></>
  );
};
