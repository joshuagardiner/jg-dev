import React from "react";
import { Card, Collection } from "@joshuagardiner/typescript-component-library";
import { IEducationProps } from "./IEducationProps";
import styling from "./Education.module.css";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Education component.
 */
export const Education: React.FC<IEducationProps> = (props: IEducationProps) => {
  const { education } = props;

  return education ? (
    <div className={styling.container} data-testid={"education-component"}>
      <h2 className={styling.title} data-testid={"education-title"}>
        Education
      </h2>
      <Collection className={styling.cardCollection}>
        <Card>
          <h3 className={styling.course} data-testid={"education-course"}>
            {education[0].courseOfStudy}
          </h3>
          <h4 className={styling.faculty} data-testid={"education-faculty"}>
            {education[0].placeOfStudy}
          </h4>
          <h5 className={styling.tenure} data-testid={"education-tenure"}>
            {education[0].tenure}
          </h5>
        </Card>
        <Card>
          <h4 className={styling.faculty} data-testid={"education-faculty"}>
            {education[1].placeOfStudy}
          </h4>
          <h5 className={styling.tenure} data-testid={"education-tenure"}>
            {education[1].tenure}
          </h5>
          <p className={styling.grades} data-testid={"education-grades"}>
            {education[1].grades[0]}
            <br></br>
            {education[1].grades[1]}
            <br></br>
            {education[1].grades[2]}
          </p>
        </Card>
      </Collection>
    </div>
  ) : (
    <></>
  );
};
