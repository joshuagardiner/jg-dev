import React from "react";
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
      <h1 className={styling.title} data-testid={"summary-title"}>
        Joshua Gardiner
      </h1>
      <h3 className={styling.role} data-testid={"summary-role"}>
        Software Development Engineer
      </h3>
      <div className={styling.content} data-testid={"summary-content"}>
        <p className={styling.contactInformation} data-testid={"summary-contact-address"}>
          37 Oakwood Gardens, Halifax, HX28HB
        </p>
        <p className={styling.contactInformation} data-testid={"summary-contact-email"}>
          joshuagardiner@live.com
        </p>
        <p className={styling.contactInformation} data-testid={"summary-contact-telephone"}>
          +44 7947 633 294
        </p>
        <p className={styling.description} data-testid={"summary-description"}>
          An experienced software development engineer with a passion for developing web
          applications. Well-versed in a variety of technologies to create applications that are
          reliable and user-friendly.
          <br></br> A budding leader with a proven ability to mentor and motivate colleagues, who
          can communicate confidently, problem-solve effectively and use initiative to deliver
          applications tailored to organizational needs using best practices and the best tool for
          the job.
        </p>
      </div>
    </div>
  );
};
