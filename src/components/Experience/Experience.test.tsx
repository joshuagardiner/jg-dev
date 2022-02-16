import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the Experience component correctly.", () => {
    render(<Experience />);

    const experienceComponent = screen.getByTestId("experience-component");
    const experienceTitle = screen.getByTestId("experience-title");
    const experienceRoles = screen.getAllByTestId("experience-role");
    const experienceCompanies = screen.getAllByTestId("experience-company");
    const experienceTenures = screen.getAllByTestId("experience-tenure");
    const experienceContent = screen.getByTestId("experience-content");
    const experienceSubContent = screen.getAllByTestId("experience-sub-content");

    expect(experienceComponent).toBeDefined();
    expect(experienceTitle.textContent).toEqual("Experience");
    expect(experienceRoles).toHaveLength(3);
    expect(experienceCompanies).toHaveLength(3);
    expect(experienceTenures).toHaveLength(3);
    expect(experienceSubContent).toHaveLength(2);
    expect(experienceRoles[0].textContent).toEqual("Software Development Engineer");
    expect(experienceCompanies[0].textContent).toEqual("EMIS Health");
    expect(experienceTenures[0].textContent).toEqual("November '17 - Present");
    expect(experienceRoles[1].textContent).toEqual(".NET Developer");
    expect(experienceCompanies[1].textContent).toEqual("FDM Group");
    expect(experienceTenures[1].textContent).toEqual("May '17 - October '17");
    expect(experienceRoles[2].textContent).toEqual("Customer Service Assistant");
    expect(experienceCompanies[2].textContent).toEqual("Sainsbury's");
    expect(experienceTenures[2].textContent).toEqual("December '13 - June '15");
    expect(experienceContent.textContent).toEqual(
      "I have enjoyed working with a wide-ranging, ever-changing tech stack during my time at the company beginning in C#, involving the refactoring of a legacy product alongside resolving priority SLA items.I was a member of the first set of engineers to begin coding the next generation of products for the business. Which allowed a great deal of flexibility and freedom as we identified new tools and services fit for use. Including learning exercises such as creating a Twitter bot (@motivationalboz) using Node.js and AWS Lambda to post a tweet on a CRON schedule.After this period of elaboration, I began to work exclusively in this space with Golang and the varying services AWS provide, inc. API Gateway, CloudFormation, CodePipeline and Lambda. Writing one of the first CloudFormation templates to deploy a CI/CD pipeline in the department.This has organically led to the consumption of API’s and a more front-end focus using React and TypeScript and allowed for more hands-on experience with Terraform and Docker through repository management and containerised applications.I began to contribute to our new and growing community initiatives before identifying an opportunity and leading on my own with the support of my peers, whilst actively looking for areas of improvement not only within the team but within the department by identifying new tools and best practices.I naturally undertook the mentoring of an apprentice developer and test engineer within my team, which led to a company-wide award in the inaugural EMIS Quarterly Heroes Q1 2021 for living the Supportive value of the business."
    );
    expect(experienceSubContent[0].textContent).toEqual(
      "I joined the award-winning training programme and undertook weekly modules such as SQL, Web Development and Professional Skills. Before a more concentrated .NET period focusing on the SOLID principles, Object-oriented programming and TDD, which concluded in a presentation to my peers and account managers focusing on the eCommerce project created during this time."
    );
    expect(experienceSubContent[1].textContent).toEqual(
      "Responsible for delivering first-class customer service in any capacity around the store. My role in the first instance was to operate the checkouts. Whilst during the busier period' I would become the focal point of the checkouts department. Ensuring all colleagues have everything they need to hand, answering any customer queries a colleague could not."
    );
  });

  it("renders the Experience component unchanged.", () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });
});
