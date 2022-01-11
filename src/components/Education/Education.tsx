import React from "react";
import {
  Card,
  Text,
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
          <Course fontSize={"1.25vw"} text={"BSc (Hons) COMPUTING"} />
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
          <Card marginTop={"1vw"} width={"100%"}>
            <University
              fontSize={"1vw"}
              text={"The Brooksbank School and Sixth Form"}
              textTransform={"uppercase"}
            />
            <Tenure
              fontSize={".75vw"}
              text={"September '03 - June '10"}
              textTransform={"uppercase"}
            />
            <Text
              fontSize={".75vw"}
              text={"A-level's: Information technology, Geography"}
            />
            <Text
              fontSize={".75vw"}
              text={"AS-level's: Business studies, Physical education"}
            />
            <Text fontSize={".75vw"} text={"GCSE's: 10 [A-C]"} />
          </Card>
        </Card>
      </div>
    </>
  );
};
