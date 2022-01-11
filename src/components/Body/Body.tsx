import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import { Summary } from "../Summary/Summary";
import { Skills } from "../Skills/Skills";
import { Experience } from "../Experience/Experience";
import { Education } from "../Education/Education";
import styling from "./Body.module.css";

export const Body: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.content}>
          <Card marginTop={"-9.5vw"} width={"66%"}>
            <Summary />
            <Skills />
            <Experience />
            <Education />
          </Card>
        </div>
      </div>
    </>
  );
};