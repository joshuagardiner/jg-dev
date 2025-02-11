/**
 * @returns an example of a curriculum vitae response.
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
        id: "1bc0fd31-9950-4441-b7f1-6975aa53b574",
        priority: true,
        role: "Software Engineer",
        company: "Lloyd's Banking Group",
        tenure: "November '22 - Present",
        text: [
          {
            id: "3afacc94-e5ca-444f-91c5-b1d5d8b79633",
            value:
              "At Lloyd's Banking Group, I play a key role in delivering best-in-class mortgage journeys to customers, utilizing React and TypeScript to build modern, digital experiences. As the lead engineer, I managed a team responsible for migrating from legacy applications to new digital solutions, ensuring that we achieved optimal outcomes for customers. A notable achievement was leading the replatforming of a legacy application, completing the project ahead of schedule within a very tight timeframe."
          },
          {
            id: "2faa1093-e469-4041-b1a3-29c359498e10",
            value:
              "In recognition of my contributions, I was honored with the platform-wide 'Trust' award at the end of 2024, nominated by my peers for my dedication to stepping up and supporting both my leaders and my team. I served as a key enabler, expediting work across the platform and driving progress across various environments. In addition to my technical leadership, I also mentor an industry placement engineer, helping to nurture and grow the group's talent footprint while fostering a collaborative and supportive team environment."
          }
        ]
      },
      {
        id: "5bf6539c-2872-477b-93a5-bf6ed8754a0g",
        priority: false,
        role: "Software Development Engineer",
        company: "EMIS Health",
        tenure: "November '17 - November '22",
        text: [
          {
            id: "0b3db32f-a3f3-4361-8538-cbf7c2c2eb2a",
            value:
              "At EMIS Health, I worked with a diverse and ever-evolving tech stack, beginning with .NET development on their flagship product. I played a key role in ensuring high-priority software licensing agreements were met ahead of deadlines."
          },
          {
            id: "69c06caa-635e-421e-94b8-3953afcf3c9b",
            value:
              "I was part of the first engineering team tasked with building the next-generation product, which provided the opportunity to transition into a variety of technologies, including React, TypeScript, and Node.js. This shift gave me the flexibility to explore and implement innovative tools and services, a key achievemnt was the creation of an ‘X’ bot (@motivationalboz) using Node.js and AWS Lambda, automating tweets on a CRON schedule as part of a learning exercise."
          },
          {
            id: "26d2935f-5d9b-441f-ac16-aef47c4daedc",
            value:
              "As my role evolved, I expanded my expertise further into front-end technologies like React and TypeScript, adding tools including Terraform and Docker for Infrastructure as Code (IaC), repository management, and containerizing applications. This experience was instrumental in the development of industry-leading solutions."
          },
          {
            id: "44446faf-11a5-4c2f-a83a-b40442fff3f7",
            value:
              "I actively contributed to the company’s community initiatives, identifying opportunities for improvement across both my team and department. This led me to mentor both an apprentice developer and a test engineer, fostering knowledge sharing and growth within the team. My leadership and proactive approach were recognized with a company-wide award at the inaugural EMIS Quarterly Heroes in Q1 2021, where I was honored for embodying the 'Supportive' value of the business."
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
              "I joined FDM Group’s award-winning training program, where I gained hands-on experience through weekly modules covering a variety of key topics such as SQL, Web Development, and Professional Skills. My training culminated in a focused period on .NET development, where I deepened my understanding of core principles such as SOLID, Object-Oriented Programming (OOP), and Test-Driven Development (TDD). This practical learning was applied to an eCommerce project, which I presented to both my peers and wider department, showcasing my ability to apply industry-standard techniques to real-world development challenges."
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
              "In this role, I was responsible for delivering a first-class customer experience both at the tills and on self-service checkouts. I consistently provided excellent service, assisting customers efficiently while ensuring their needs were met with a friendly and professional approach. As the leader within the checkout department, I was tasked with managing and supporting a team of colleagues. This included ensuring they understood their responsibilities and were well-equipped to contribute to the department's smooth operations. My leadership helped ensure that customers had a seamless journey through the department, contributing to the overall positive shopping experience."
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
      address: "4 Miller Road, Halewood, Liverpool, L260AJ",
      email: "joshuagardiner.dev@gmail.com",
      name: "Joshua Gardiner",
      role: "Software Engineer",
      telephone: "+44 7947 633 294",
      text: [
        {
          id: "11dc047d-9f34-4557-938a-01294d74e81a",
          value:
            "An experienced software engineer in delivering reliable, secure, innovative, customer-focused solutions."
        },
        {
          id: "113945ae-5d6c-4233-9957-25d66a5ebdab",
          value:
            "A proactive leader and mentor with proven experiences in improving team processes and delivery, earning company-wide awards across roles for my supportive contributions."
        }
      ]
    }
  };
}
