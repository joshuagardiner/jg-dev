import React from "react";
import {
  Card,
  Text,
  Title,
  Title as Company,
  Title as Role,
  Title as Tenure,
} from "@joshuagardiner/typescript-component-library";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Experience component.
 */
export const Experience: React.FC = () => {
  return (
    <div data-testid={"experience-component"}>
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
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`I have enjoyed working with a wide ranging, ever changing tech stack during my time at the company which began in C#, involving the refactoring of a legacy product alongside resolving priority SLA items.`}
        />
        <Text
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`I was a member of the first set of engineers to begin coding the next generation of product for the business which allowed a great deal of flexibility and freedom as we identified new tools and services fit for use. Including as a learning exercise the creation of a Twitter bot (@motivationalboz) using Node.js and AWS Lambda to post a tweet on a CRON schedule.`}
        />
        <Text
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`After this period of elaboration I began to work exclusively in this space with Golang and the varying services AWS provide, inc. API Gateway, CloudFormation, CodePipeline and Lambda. Writing one of the first CloudFormation templates which deployed a CI/CD pipeline in the department.`}
        />
        <Text
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`This has organically led to the consumption of API’s and a more front-end focus with the use of React and TypeScript, and allowed for more hands-on experience with the likes of Terraform and Docker through repository management and containerised applications.`}
        />
        <Text
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`I began to contribute to our new and growing community initiatives before identifying an opportunity and leading on my own with the support of my peers, whilst actively looking for areas of improvement not only within the team but within the department by identifying new tools and best practices.`}
        />
        <Text
          fontSize={"1vw"}
          lineHeight={"2.5vw"}
          maxWidth={"75%"}
          text={`I naturally undertook the mentoring of an apprentice developer and test engineer within my team, which led to a company-wide award in the inaugural EMIS Quarterly Heroes Q1 2021 for living the Supportive value of the business.`}
        />
        <Card marginTop={"2vw"} width="100%">
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
              fontSize={".75vw"}
              lineHeight={"2.5vw"}
              maxWidth={"75%"}
              text={`I joined the award winning training programme and undertook weekly modules such as: SQL, Web Development and Professional Skills. Before a more concentrated .NET period which focused on the SOLID principles, Object-oriented programming and TDD. Culminating in a presentation to my peers, and wider department involving the eCommerce project created during this time.`}
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
              fontSize={".75vw"}
              lineHeight={"2.5vw"}
              maxWidth={"75%"}
              text={`Responsible for delivering a first class customer service in any capacity around the store. My role was to in the first instance operate the checkouts, whilst during busier periods I would become the focal point of the checkouts department. Ensuring all colleagues have everything they need to hand, answering any customer queries a colleague could not.`}
            />
          </Card>
        </Card>
      </Card>
    </div>
  );
};
