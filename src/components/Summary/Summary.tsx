import React from "react";
import { Text, Title, Title as Role } from "@joshuagardiner/typescript-component-library";
import Image from "next/image";
import styling from "./Summary.module.css";

/**
 * The Summary component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Summary component.
 */
export const Summary: React.FC = () => {
  return (
    <div data-testid={"summary-component"}>
      <div
        style={{
          display: "inherit",
          height: "17vw",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          width: "17vw"
        }}
      >
        <Image
          className={styling.avatar}
          src={"/avatar.jpg"}
          alt={"jg_avatar"}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
      <Title
        data-testid={"summary-title"}
        fontSize={"3.5vw"}
        marginTop={"7.5%"}
        text={"Joshua Gardiner"}
      />
      <Role
        fontSize={"1.25vw"}
        marginTop={"-1.75%"}
        text={"Software Development Engineer"}
        textTransform={"uppercase"}
      />
      <div className={styling.contactInformation} data-testid={"summary-contact"}>
        <p data-testid={"summary-contact-address"}>37 Oakwood Gardens, Halifax, HX28HB</p>
        <p data-testid={"summary-contact-email"}>joshuagardiner@live.com</p>
        <p data-testid={"summary-contact-telephone"}>+44 7947 633 294</p>
      </div>
      <Text
        fontSize={"1.125vw"}
        lineHeight={"2.5vw"}
        maxWidth={"75%"}
        text={`An experienced software development engineer with a passion for developing web applications. Well-versed in a variety of technologies and writing code to create applications that are reliable and user-friendly.`}
      />
      <Text
        fontSize={"1.125vw"}
        lineHeight={"2.5vw"}
        maxWidth={"75%"}
        text={`A budding leader with a proven ability to mentor and motivate colleagues, who can communicate confidently, problem-solve effectively and utilise initiative to deliver applications that are tailored to organizational needs using best practices and the best tool for the job.`}
      />
    </div>
  );
};
