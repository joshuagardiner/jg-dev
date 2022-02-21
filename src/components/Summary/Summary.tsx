import React from "react";
import Image from "next/image";
import styling from "./Summary.module.css";
import { ISummaryProps } from "./ISummaryProps";

/**
 * The Summary component is responsible for rendering content
 * within the application Body.
 *
 * @returns the Summary component.
 */
export const Summary: React.FC<ISummaryProps> = (props: ISummaryProps) => {
  const { summary } = props;

  return summary ? (
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
        {summary.name}
      </h1>
      <h3 className={styling.role} data-testid={"summary-role"}>
        {summary.role}
      </h3>
      <div className={styling.content} data-testid={"summary-content"}>
        <p className={styling.contactInformation} data-testid={"summary-contact-address"}>
          {summary.address}
        </p>
        <p className={styling.contactInformation} data-testid={"summary-contact-email"}>
          {summary.email}
        </p>
        <p className={styling.contactInformation} data-testid={"summary-contact-telephone"}>
          {summary.telephone}
        </p>
        <p className={styling.description} data-testid={"summary-description"}>
          <a data-testid={"summary-description-content"}>{summary.content.p1}</a>
          <br></br>
          <br></br>
          <a data-testid={"summary-description-content"}>{summary.content.p2}</a>
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};
