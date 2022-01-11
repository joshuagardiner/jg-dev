import React from "react";
import {
  Card,
  Title,
  Title as Course,
  Title as Tenure,
  Title as University,
} from "@joshuagardiner/typescript-component-library";
import styling from "./Education.module.css";

export const Education: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <Title fontSize={"2vw"} marginTop={"7.5%"} text={"Education"} />
        <Card width={"100%"}>
          <Course fontSize={"1.25vw"} text={"BSc COMPUTING"} />
          <University
            fontSize={"1vw"}
            text={"Manchester Metropolitan University"}
            textTransform={"uppercase"}
          />
          <Tenure
            fontSize={".75vw"}
            text={"September '11 - June '16"}
            textTransform={"uppercase"}
          />
        </Card>
      </div>
    </>
  );
};
