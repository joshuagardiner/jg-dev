import React from "react";
import { Card, Collection } from "@joshuagardiner/typescript-component-library";
import { IEducation } from "../../lib/models/IEducation";
import { Education } from "../Education/Education";
import { IEducationCollectionProps } from "./IEducationCollectionProps";
import styles from "./EducationCollection.module.scss";

/**
 * The EducationCollection component is responsible for rendering multiple academic
 * details the application body.
 *
 * @param props the properties that can be passed into the component.
 * @returns the EducationCollection component.
 */
export const EducationCollection: React.FC<IEducationCollectionProps> = (
  props: IEducationCollectionProps
) => {
  const { education } = props;

  return education.length > 0 ? (
    <div data-testid={"education-collection"}>
      <h2 className={styles.title} data-testid={"education-collection-title"}>
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
    <div data-testid={"education-collection-no-results"} />
  );
};
