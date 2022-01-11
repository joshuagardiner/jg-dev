import React from "react";
import { Text, Title } from "@joshuagardiner/typescript-component-library";
import styling from "./Skills.module.css";

export const Skills: React.FC = () => {
  const skillsArray = [
    "React",
    "TypeScript",
    "CI/CD",
    "AWS",
    "Azure",
    "TDD",
    "GitHub",
    "Jest",
    "Cypress",
    "Terraform",
    "Docker",
    "C#",
    "Golang",
  ];

  const softSkillsArray = [
    "Communication",
    "Iniative",
    "Leadership",
    "Problem solving",
    "Teamwork",
  ];

  return (
    <>
      <Title fontSize={"2vw"} marginTop={"7.5%"} text={"Skills"} />
      <ul className={styling.skills}>
        {skillsArray.map((skill) => (
          <li key={skill}>{<Text fontSize={"1.125vw"} text={skill} />}</li>
        ))}
        {softSkillsArray.map((softSkill) => (
          <li key={softSkill}>
            {<Text fontSize={"1.125vw"} text={softSkill} />}
          </li>
        ))}
      </ul>
    </>
  );
};
