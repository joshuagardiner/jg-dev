/**
 * @returns an example of a Content response.
 */
export function response() {
  return {
    education: [
      {
        course: "BSc (Hons) COMPUTING",
        faculty: "Manchester Metropolitan University",
        id: "bf237edd-9a86-4303-81a3-24c1679df63d",
        tenure: "September '11 - June '16"
      },
      {
        faculty: "The Brooksbank School and Sixth Form",
        grades: [
          {
            id: "45fa4124-05a0-4324-870e-343992093530",
            value: "A-level's: Information technology, Geography"
          },
          {
            id: "36b4bd13-2590-4e20-8633-2dcb0bf25b08",
            value: "AS-level's: Business studies, Physical education"
          },
          { id: "0d6ecdc7-4551-4086-9272-2d6bc12cf6ef", value: "GCSE's: 10 [A-C]" }
        ],
        id: "8c3568c7-ddff-4141-adae-616e2049544d",
        tenure: "September '03 - June '10"
      }
    ],
    experiences: [
      {
        id: "5bf6539c-2872-477b-93a5-bf6ed8754a0g",
        priority: true,
        role: "Software Development Engineer",
        company: "EMIS Health",
        tenure: "November '17 - Present",
        text: [
          {
            id: "0b3db32f-a3f3-4361-8538-cbf7c2c2eb2a",
            value:
              "I have enjoyed working with a wide ranging, ever changing tech stack during my time at the company which began in C#, involving the refactoring of a legacy product alongside resolving priority SLA items."
          },
          {
            id: "69c06caa-635e-421e-94b8-3953afcf3c9b",
            value:
              "I was a member of the first set of engineers to begin coding the next generation of product for the business which allowed a great deal of flexibility and freedom as we identified new tools and services fit for use. Including as a learning exercise the creation of a Twitter bot (@motivationalboz) using Node.js and AWS Lambda to post a tweet on a CRON schedule."
          },
          {
            id: "26d2935f-5d9b-441f-ac16-aef47c4daedc",
            value:
              "After this period of elaboration I began to work exclusively in this space with Golang and the varying services AWS provide, inc. API Gateway, CloudFormation, CodePipeline and Lambda. Writing one of the first CloudFormation templates which deployed a CI/CD pipeline in the department."
          },
          {
            id: "44446faf-11a5-4c2f-a83a-b40442fff3f7",
            value:
              "This has organically led to the consumption of API’s and a more front-end focus with the use of React and TypeScript, and allowed for more hands-on experience with the likes of Terraform and Docker through repository management and containerised applications."
          },
          {
            id: "06995db5-aed9-49bf-a831-a4ee6a49ca17",
            value:
              "I began to contribute to our new and growing community initiatives before identifying an opportunity and leading on my own with the support of my peers, whilst actively looking for areas of improvement not only within the team but within the department by identifying new tools and best practices."
          },
          {
            id: "145305f3-717b-4fc3-b147-36c3444aa906",
            value:
              "I naturally undertook the mentoring of an apprentice developer and test engineer within my team, which led to a company-wide award in the inaugural EMIS Quarterly Heroes Q1 2021 for living the Supportive value of the business."
          }
        ]
      },
      {
        id: "67f2ba35-8219-4735-b3bd-b924fc197c78",
        priority: false,
        role: ".NET Developer",
        company: "FDM Group",
        tenure: "May '17 - October '17",
        text: [
          {
            id: "fb72a0cd-228f-4c5a-8053-72f51f3107a8",
            value:
              "I joined the award winning training programme and undertook weekly modules such as: SQL, Web Development and Professional Skills. Before a more concentrated .NET period which focused on the SOLID principles, Object-oriented programming and TDD. Culminating in a presentation to my peers, and wider department involving the eCommerce project created during this time."
          }
        ]
      },
      {
        id: "d1c6f7eb-01c2-413c-b37a-49e50b215570",
        priority: false,
        role: "Customer Service Assistant",
        company: "Sainsbury's",
        tenure: "December '13 - June '15",
        text: [
          {
            id: "d2b8ad77-e28c-422c-9819-22ba2ad0e22a",
            value:
              "Responsible for delivering a first class customer service in any capacity around the store. My role was to in the first instance operate the checkouts, whilst during busier periods I would become the focal point of the checkouts department. Ensuring all colleagues have everything they need to hand, answering any customer queries a colleague could not."
          }
        ]
      }
    ],
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
