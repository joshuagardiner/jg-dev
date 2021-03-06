import { render, screen } from "@testing-library/react";
import React from "react";
import { Body } from "./Body";

describe("Body", () => {
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
              text: [
                { id: "1", value: "Test paragraph 1." },
                { id: "2", value: "Test paragraph 2." }
              ]
            }
          })
      })
    );

    render(<Body />);

    expect(await screen.findByTestId("body")).toBeDefined();
    expect(screen.getByTestId("summary")).toBeDefined();
    expect(screen.getByTestId("skills-collection")).toBeDefined();
    expect(screen.getByTestId("experience-collection")).toBeDefined();
    expect(screen.getByTestId("education-collection")).toBeDefined();
  });
});
