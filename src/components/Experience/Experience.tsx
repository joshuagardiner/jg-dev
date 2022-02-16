import React from "react";
import { Card } from "@joshuagardiner/typescript-component-library";
import styling from "./Experience.module.css";

/**
 * The Experience component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Experience component.
 */
export const Experience: React.FC = () => {
  return (
    <div data-testid={"experience-component"}>
      <h2 className={styling.title} data-testid={"experience-title"}>
        Experience
      </h2>
      <Card width={"100%"}>
        <h3 className={styling.role} data-testid={"experience-role"}>
          Software Development Engineer
        </h3>
        <h4 className={styling.company} data-testid={"experience-company"}>
          EMIS Health
        </h4>
        <h5 className={styling.tenure} data-testid={"experience-tenure"}>
          {`November '17 - Present`}
        </h5>
        <p className={styling.content} data-testid={"experience-content"}>
          I have enjoyed working with a wide-ranging, ever-changing tech stack during my time at the
          company beginning in C#, involving the refactoring of a legacy product alongside resolving
          priority SLA items.<br></br>
          <br></br>I was a member of the first set of engineers to begin coding the next generation
          of products for the business. Which allowed a great deal of flexibility and freedom as we
          identified new tools and services fit for use. Including learning exercises such as
          creating a Twitter bot (@motivationalboz) using Node.js and AWS Lambda to post a tweet on
          a CRON schedule.<br></br>
          <br></br>After this period of elaboration, I began to work exclusively in this space with
          Golang and the varying services AWS provide, inc. API Gateway, CloudFormation,
          CodePipeline and Lambda. Writing one of the first CloudFormation templates to deploy a
          CI/CD pipeline in the department.<br></br>
          <br></br>This has organically led to the consumption of API’s and a more front-end focus
          using React and TypeScript and allowed for more hands-on experience with Terraform and
          Docker through repository management and containerised applications.<br></br>
          <br></br>I began to contribute to our new and growing community initiatives before
          identifying an opportunity and leading on my own with the support of my peers, whilst
          actively looking for areas of improvement not only within the team but within the
          department by identifying new tools and best practices.<br></br>
          <br></br>I naturally undertook the mentoring of an apprentice developer and test engineer
          within my team, which led to a company-wide award in the inaugural EMIS Quarterly Heroes
          Q1 2021 for living the Supportive value of the business.
        </p>
        <Card marginTop={"2vw"} width="100%">
          <Card width={"50%"}>
            <h3 className={styling.role} data-testid={"experience-role"}>
              .NET Developer
            </h3>
            <h4 className={styling.company} data-testid={"experience-company"}>
              FDM Group
            </h4>
            <h4 className={styling.tenure} data-testid={"experience-tenure"}>
              {`May '17 - October '17`}
            </h4>
            <p className={styling.subContent} data-testid={"experience-sub-content"}>
              I joined the award-winning training programme and undertook weekly modules such as
              SQL, Web Development and Professional Skills. Before a more concentrated .NET period
              focusing on the SOLID principles, Object-oriented programming and TDD, which concluded
              in a presentation to my peers and account managers focusing on the eCommerce project
              created during this time.
            </p>
          </Card>
          <Card width={"50%"}>
            <h3 className={styling.role} data-testid={"experience-role"}>
              Customer Service Assistant
            </h3>
            <h4 className={styling.company} data-testid={"experience-company"}>
              {`Sainsbury's`}
            </h4>
            <h4 className={styling.tenure} data-testid={"experience-tenure"}>
              {`December '13 - June '15`}
            </h4>
            <p className={styling.subContent} data-testid={"experience-sub-content"}>
              Responsible for delivering first-class customer service in any capacity around the
              store. My role in the first instance was to operate the checkouts. Whilst during the
              busier period&apos; I would become the focal point of the checkouts department.
              Ensuring all colleagues have everything they need to hand, answering any customer
              queries a colleague could not.
            </p>
          </Card>
        </Card>
      </Card>
    </div>
  );
};
