import React from "react";
import { IconButton } from "@joshuagardiner/typescript-component-library";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ISummaryProps } from "./ISummaryProps";
import styles from "./Summary.module.scss";

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
      <img
        className={styles.avatar}
        srcSet="/avatar_250.jpg 425w,
             /avatar_350.jpg 768w"
        sizes="(max-width: 768px) 425px,
            768px"
        src="/avatar.jpg"
        alt="jg_avatar"
      />
      <h1 className={styles.title} data-testid={"summary-title"}>
        {summary.name}
      </h1>
      <h3 className={styles.role} data-testid={"summary-role"}>
        {summary.role}
      </h3>
      <p className={styles.contactInformation} data-testid={"summary-contact-address"}>
        {summary.address}
      </p>
      <p className={styles.contactInformation} data-testid={"summary-contact-email"}>
        {summary.email}
      </p>
      <p className={styles.contactInformation} data-testid={"summary-contact-telephone"}>
        {summary.telephone}
      </p>
      <div className={styles.socialMediaIcons}>
        <IconButton
          className={styles.socialMediaIcon}
          data-testid={"summary-github-btn"}
          external={true}
          href={"https://github.com/joshuagardiner"}
          icon={IoLogoGithub}
        />
        <IconButton
          className={styles.socialMediaIcon}
          data-testid="summary-linkedin-btn"
          external={true}
          href="https://www.linkedin.com/in/joshua-gardiner"
          icon={IoLogoLinkedin}
        />
      </div>
      <p className={styles.description} data-testid={"summary-description"}>
        <a data-testid={"summary-description-content"}>{summary.content.p1}</a>
        <br></br>
        <br></br>
        <a data-testid={"summary-description-content"}>{summary.content.p2}</a>
      </p>
    </div>
  ) : (
    <></>
  );
};
