import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import styling from "./Education.module.css";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Education component.
 */
export const Education: React.FC = () => {
  return (
    <div className={styling.container} data-testid={"education-component"}>
      <h2 className={styling.title} data-testid={"education-title"}>
        Education
      </h2>
      <Card width={"100%"}>
        <h3 className={styling.course} data-testid={"education-course"}>
          BSc (Hons) COMPUTING
        </h3>
        <h4 className={styling.faculty} data-testid={"education-faculty"}>
          Manchester Metropolitan University
        </h4>
        <h5 className={styling.tenure} data-testid={"education-tenure"}>
          {`September '11 - June '16`}
        </h5>
        <Card marginTop={"1vw"} width={"100%"}>
          <h4 className={styling.faculty} data-testid={"education-faculty"}>
            The Brooksbank School and Sixth Form
          </h4>
          <h5 className={styling.tenure} data-testid={"education-tenure"}>
            {`September '03 - June '10`}
          </h5>
          <p className={styling.grades} data-testid={"education-grades"}>
            A-level&apos;s: Information technology, Geography<br></br>AS-level&apos;s: Business
            studies, Physical education<br></br>GCSE&apos;s: 10 [A-C]
          </p>
        </Card>
      </Card>
    </div>
  );
};
