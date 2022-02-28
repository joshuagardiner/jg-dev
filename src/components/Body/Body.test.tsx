import { render, screen } from "@testing-library/react";
import React from "react";
import { Body } from "./Body";

describe("Body", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect");
    jest.spyOn(React, "useState");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Body component correctly.", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            education: [
              {
                id: "1",
                course: "Politics",
                faculty: "University of Edinburgh",
                tenure: "September '00 - June '01"
              },
              {
                id: "2",
                faculty: "Hogwarts School of Witchcraft and Wizardry",
                grades: [{ id: "1", value: "OWL's" }],
                tenure: "September '03 - June '10"
              }
            ],
            experiences: [
              {
                id: "1",
                priority: true,
                role: "Minister for Magic",
                company: "Ministry of Magic",
                tenure: "May '05 - Present",
                text: [{ id: "1", value: "Blah" }]
              }
            ],
            skills: {
              technical: ["Spellcasting"],
              soft: ["Bravery"]
            },
            summary: {
              name: "Harry Potter",
              role: "Auror",
              address: "4 Privet Drive, Little Whinging, Surrey",
              email: "Harry.Potter@MoM.co.uk",
              telephone: "+44 1234 567 890",
              text: ["Test paragraph 1.", "Test paragraph 2."]
            }
          })
      })
    );

    render(<Body />);

    const bodyComponent = await screen.findByTestId("body-component");
    const summaryComponent = screen.getByTestId("summary-component");
    const skillsComponent = screen.getByTestId("skills-component");
    const experienceComponent = screen.getByTestId("experience-component");
    const educationComponent = screen.getByTestId("education-component");

    expect(bodyComponent).toBeDefined();
    expect(summaryComponent).toBeDefined();
    expect(skillsComponent).toBeDefined();
    expect(experienceComponent).toBeDefined();
    expect(educationComponent).toBeDefined();
  });
});
