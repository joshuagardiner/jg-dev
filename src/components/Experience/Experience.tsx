import React from "react";
import { IExperienceProps } from "./IExperienceProps";
import styles from "./Experience.module.scss";

/**
 * The Experience component is responsible for rendering a single employment
 * experience within the application body.
 *
 * @props the properties that can be passed into the component.
 * @returns the Experience component.
 */
export const Experience: React.FC<IExperienceProps> = (props: IExperienceProps) => {
  const { company, content, role, tenure } = props;

  return (
    <>
      <h3 className={styles.role} data-testid={"experience-role"}>
        {role}
      </h3>
      <h4 className={styles.company} data-testid={"experience-company"}>
        {company}
      </h4>
      <h5 className={styles.tenure} data-testid={"experience-tenure"}>
        {tenure}
      </h5>
      {content.map((content: any) => (
        <p key={content.id} className={styles.content} data-testid={"experience-content"}>
          {content.value}
        </p>
      ))}
      <hr className={styles.divider} />
    </>
  );
};
