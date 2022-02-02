import { render, screen } from "@testing-library/react";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the Experience component correctly.", () => {
    render(<Experience />);

    const experienceTitles = screen.getAllByTestId("title");
    const experienceCards = screen.getAllByTestId("card");
    const experienceText = screen.getAllByTestId("text");

    expect(experienceTitles).toBeDefined();
    expect(experienceTitles).toHaveLength(10);
    expect(experienceTitles[0].textContent).toEqual("Experience");
    expect(experienceTitles[1].textContent).toEqual("Software Development Engineer");
    expect(experienceTitles[2].textContent).toEqual("EMIS Health");
    expect(experienceTitles[3].textContent).toEqual("November '17 - Present");
    expect(experienceTitles[4].textContent).toEqual(".NET Developer");
    expect(experienceTitles[5].textContent).toEqual("FDM Group");
    expect(experienceTitles[6].textContent).toEqual("May '17 - October '17");
    expect(experienceTitles[7].textContent).toEqual("Customer Service Assistant");
    expect(experienceTitles[8].textContent).toEqual("Sainsbury's");
    expect(experienceTitles[9].textContent).toEqual("December '13 - June '15");
    expect(experienceCards).toBeDefined();
    expect(experienceCards).toHaveLength(4);
    expect(experienceText).toBeDefined();
    expect(experienceText).toHaveLength(8);
    expect(experienceText[0].textContent).toEqual(
      "I have enjoyed working with a wide ranging, ever changing tech stack during my time at the company which began in C#, involving the refactoring of a legacy product alongside resolving priority SLA items."
    );
    expect(experienceText[1].textContent).toEqual(
      "I was a member of the first set of engineers to begin coding the next generation of product for the business which allowed a great deal of flexibility and freedom as we identified new tools and services fit for use. Including as a learning exercise the creation of a Twitter bot (@motivationalboz) using Node.js and AWS Lambda to post a tweet on a CRON schedule."
    );
    expect(experienceText[2].textContent).toEqual(
      "After this period of elaboration I began to work exclusively in this space with Golang and the varying services AWS provide, inc. API Gateway, CloudFormation, CodePipeline and Lambda. Writing one of the first CloudFormation templates which deployed a CI/CD pipeline in the department."
    );
    expect(experienceText[3].textContent).toEqual(
      "This has organically led to the consumption of API’s and a more front-end focus with the use of React and TypeScript, and allowed for more hands-on experience with the likes of Terraform and Docker through repository management and containerised applications."
    );
    expect(experienceText[4].textContent).toEqual(
      "I began to contribute to our new and growing community initiatives before identifying an opportunity and leading on my own with the support of my peers, whilst actively looking for areas of improvement not only within the team but within the department by identifying new tools and best practices."
    );
    expect(experienceText[5].textContent).toEqual(
      "I naturally undertook the mentoring of an apprentice developer and test engineer within my team, which led to a company-wide award in the inaugural EMIS Quarterly Heroes Q1 2021 for living the Supportive value of the business."
    );
    expect(experienceText[6].textContent).toEqual(
      "I joined the award winning training programme and undertook weekly modules such as: SQL, Web Development and Professional Skills. Before a more concentrated .NET period which focused on the SOLID principles, Object-oriented programming and TDD. Culminating in a presentation to my peers, and wider department involving the eCommerce project created during this time."
    );
    expect(experienceText[7].textContent).toEqual(
      "Responsible for delivering a first class customer service in any capacity around the store. My role was to in the first instance operate the checkouts, whilst during busier periods I would become the focal point of the checkouts department. Ensuring all colleagues have everything they need to hand, answering any customer queries a colleague could not."
    );
  });

  it("renders the Experience component unchanged.", () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });
});
