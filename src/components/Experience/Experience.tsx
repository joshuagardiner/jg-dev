import React from "react";
import { Card, Collection, CollectionColumn } from "@joshuagardiner/typescript-component-library";
import { IExperienceProps } from "./IExperienceProps";
import styling from "./Experience.module.css";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Experience component.
 */
export const Experience: React.FC<IExperienceProps> = (props: IExperienceProps) => {
  const { experiences } = props;

  return experiences ? (
    <div data-testid={"experience-component"}>
      <h2 className={styling.title} data-testid={"experience-title"}>
        Experience
      </h2>
      <Collection>
        <Card>
          <h3 className={styling.role} data-testid={"experience-role"}>
            {experiences[0].role}
          </h3>
          <h4 className={styling.company} data-testid={"experience-company"}>
            {experiences[0].company}
          </h4>
          <h5 className={styling.tenure} data-testid={"experience-tenure"}>
            {experiences[0].tenure}
          </h5>
          <p className={styling.content} data-testid={"experience-content"}>
            {experiences[0].content[0]}
            <br></br>
            <br></br>
            {experiences[0].content[1]}
            <br></br>
            <br></br>
            {experiences[0].content[2]}
            <br></br>
            <br></br>
            {experiences[0].content[3]}
            <br></br>
            <br></br>
            {experiences[0].content[4]}
            <br></br>
            <br></br>
            {experiences[0].content[5]}
          </p>
        </Card>
        <CollectionColumn className={styling.cardColumnCollection}>
          <Card className={styling.subExperience}>
            <h3 className={styling.role} data-testid={"experience-role"}>
              {experiences[1].role}
            </h3>
            <h4 className={styling.company} data-testid={"experience-company"}>
              {experiences[1].company}
            </h4>
            <h4 className={styling.tenure} data-testid={"experience-tenure"}>
              {experiences[1].tenure}
            </h4>
            <p className={styling.content} data-testid={"experience-sub-content"}>
              {experiences[1].content[0]}
            </p>
          </Card>
          <Card className={styling.subExperience}>
            <h3 className={styling.role} data-testid={"experience-role"}>
              {experiences[2].role}
            </h3>
            <h4 className={styling.company} data-testid={"experience-company"}>
              {experiences[2].company}
            </h4>
            <h4 className={styling.tenure} data-testid={"experience-tenure"}>
              {experiences[2].tenure}
            </h4>
            <p className={styling.content} data-testid={"experience-sub-content"}>
              {experiences[2].content[0]}
            </p>
          </Card>
        </CollectionColumn>
      </Collection>
    </div>
  ) : (
    <></>
  );
};
