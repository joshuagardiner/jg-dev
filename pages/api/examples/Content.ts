/**
 * @returns an example of a Content response.
 */
export function response() {
  return {
    skills: {
      technical: [
        "React",
        "TypeScript",
        "CI/CD",
        "AWS",
        "Azure",
        "TDD",
        "GitHub",
        "Jest",
        "Cypress",
        "Terraform",
        "Docker",
        "C#",
        "Golang"
      ],
      soft: ["Communication", "Iniative", "Leadership", "Problem solving", "Teamwork"]
    },
    summary: {
      address: "37 Oakwood Gardens, Halifax, HX28HB",
      email: "joshuagardiner@live.com",
      name: "Joshua Gardiner",
      role: "Software Development Engineer",
      telephone: "+44 7947 633 294",
      text: [
        "An experienced software development engineer with a passion for developing web applications. Well-versed in a variety of technologies to create applications that are reliable and user-friendly.",
        "A budding leader with a proven ability to mentor and motivate colleagues, who can communicate confidently, problem-solve effectively and use initiative to deliver applications tailored to organizational needs using best practices and the best tool for the job."
      ]
    }
  };
}
