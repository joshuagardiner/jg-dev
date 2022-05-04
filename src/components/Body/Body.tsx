import React from "react";
import { Card, LoadingSpinner } from "@joshuagardiner/typescript-component-library";
import { Client } from "../../client/Client";
import { IEducation } from "../../lib/models/IEducation";
import { IExperience } from "../../lib/models/IExperience";
import { ISkills } from "../../lib/models/ISkills";
import { ISummary } from "../../lib/models/ISummary";
import { EducationCollection } from "../EducationCollection/EducationCollection";
import { ExperienceCollection } from "../ExperienceCollection/ExperienceCollection";
import { SkillsCollection } from "../SkillsCollection/SkillsCollection";
import { Summary } from "../Summary/Summary";
import styles from "./Body.module.scss";

/**
 * The Body component is responsible for rendering the components
 * that sit within the application's main body of content.
 *
 * @returns the Body component.
 */
export const Body: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [education, setEducation] = React.useState([] as IEducation[]);
  const [experiences, setExperiences] = React.useState([] as IExperience[]);
  const [skills, setSkills] = React.useState({} as ISkills);
  const [summary, setSummary] = React.useState({} as ISummary);

  React.useEffect(() => {
    new Client().getContent().then((result) => {
      setEducation(result.education);
      setExperiences(result.experiences);
      setSkills(result.skills);
      setSummary(result.summary);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <div className={styles.container} data-testid={"body"}>
        <Card className={styles.content}>
          <Summary summary={summary} />
          <SkillsCollection skills={skills} />
          <ExperienceCollection experiences={experiences} />
          <EducationCollection education={education} />
        </Card>
      </div>
    );
  }

  return <LoadingSpinner className={styles.spinner} text={"Loading.."} />;
};
