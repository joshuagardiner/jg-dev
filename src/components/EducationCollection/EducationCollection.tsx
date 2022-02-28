import React from "react";
import { Card, Collection } from "@joshuagardiner/typescript-component-library";
import { IEducation } from "../../lib/models/IEducation";
import { Education } from "../Education/Education";
import { IEducationCollectionProps } from "./IEducationCollectionProps";
import styling from "./EducationCollection.module.css";

/**
 * The EducationCollection component is responsible for rendering content
 * within the application Body.
 *
 * @returns the EducationCollection component.
 */
export const EducationCollection: React.FC<IEducationCollectionProps> = (
  props: IEducationCollectionProps
) => {
  const { education } = props;

  return education ? (
    <div className={styling.container} data-testid={"education-component"}>
      <h2 className={styling.title} data-testid={"education-title"}>
        Education
      </h2>
      <Collection className={styling.cardCollection}>
        {education.map((e: IEducation) => (
          <Card key={e.id}>
            <Education course={e.course} faculty={e.faculty} grades={e.grades} tenure={e.tenure} />
          </Card>
        ))}
      </Collection>
    </div>
  ) : (
    <></>
  );
};
