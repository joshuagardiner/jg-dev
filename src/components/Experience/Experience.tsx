import React from "react";
import { IExperienceProps } from "./IExperienceProps";
import styling from "./Experience.module.css";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Experience component.
 */
export const Experience: React.FC<IExperienceProps> = (props: IExperienceProps) => {
  const { company, content, id, priority, role, tenure } = props;

  return (
    <>
      <h3 className={styling.role} data-testid={"experience-role"}>
        {role}
      </h3>
      <h4 className={styling.company} data-testid={"experience-company"}>
        {company}
      </h4>
      <h5 className={styling.tenure} data-testid={"experience-tenure"}>
        {tenure}
      </h5>
      {content.map((content: any) => (
        <p key={content.id} className={styling.content} data-testid={"experience-content"}>
          {content.value}
        </p>
      ))}
      <hr className={styling.divider} />
    </>
  );
};
