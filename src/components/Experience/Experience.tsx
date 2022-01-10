import React from "react";
import {
  Card,
  Text,
  Title,
  Title as Company,
  Title as Role,
  Title as Tenure,
} from "@joshuagardiner/typescript-component-library";

export const Experience: React.FC = () => {
  return (
    <>
      <Title fontSize={"2vw"} marginTop={"5%"} text={"Experience"} />
      <Card width={"100%"}>
        <Role
          fontSize={"1.25vw"}
          text={"Software Development Engineer"}
          textTransform={"uppercase"}
        />
        <Company
          fontSize={"1vw"}
          text={"EMIS Health"}
          textTransform={"uppercase"}
        />
        <Tenure
          fontSize={".75vw"}
          text={"November '17 - Present"}
          textTransform={"uppercase"}
        />
        <Text
          fontSize={"1.125vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.`}
        />
        <Card width={"50%"}>
          <Role
            fontSize={"1.25vw"}
            text={".NET Developer"}
            textTransform={"uppercase"}
          />
          <Company
            fontSize={"1vw"}
            text={"FDM Group"}
            textTransform={"uppercase"}
          />
          <Tenure
            fontSize={".75vw"}
            text={"May '17 - October '17"}
            textTransform={"uppercase"}
          />
          <Text
            fontSize={"1.125vw"}
            lineHeight={"2.5vw"}
            maxWidth={"75%"}
            text={`You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.`}
          />
        </Card>
        <Card width={"50%"}>
          <Role
            fontSize={"1.25vw"}
            text={"Customer Service Assistant"}
            textTransform={"uppercase"}
          />
          <Company
            fontSize={"1vw"}
            text={"Sainsbury's"}
            textTransform={"uppercase"}
          />
          <Tenure
            fontSize={".75vw"}
            text={"December '13 - June '15"}
            textTransform={"uppercase"}
          />
          <Text
            fontSize={"1.125vw"}
            lineHeight={"2.5vw"}
            maxWidth={"75%"}
            text={`You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.`}
          />
        </Card>
      </Card>
    </>
  );
};
