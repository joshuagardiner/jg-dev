import React from "react";
import { Card, Collection } from "@joshuagardiner/typescript-component-library";
import { IEducation } from "../../lib/models/IEducation";
import { Education } from "../Education/Education";
import { IEducationCollectionProps } from "./IEducationCollectionProps";
import styles from "./EducationCollection.module.scss";

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
    <div data-testid={"education-component"}>
      <h2 className={styles.title} data-testid={"education-title"}>
        Education
      </h2>
      <Collection className={styles.content}>
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
