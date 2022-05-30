import React from "react";
import { IconButton } from "@joshuagardiner/typescript-component-library";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ISummaryContent } from "../../lib/models/ISummary";
import { ISummaryProps } from "./ISummaryProps";
import styles from "./Summary.module.scss";

/**
 * The Summary component is responsible for rendering author information
 * and brief background within the application body.
 *
 * @param props the properties that can be passed into the component.
 * @returns the Summary component.
 */
export const Summary: React.FC<ISummaryProps> = (props: ISummaryProps) => {
  const { summary } = props;

  return (
    <div data-testid={"summary"}>
      <div className={styles.avatarContainer}>
        <Image
          className={styles.avatar}
          src="/avatar.jpg"
          alt="jg_avatar"
          height={0}
          layout="responsive"
          priority={true}
          width={0}
        />
      </div>
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
      <div className={styles.description} data-testid={"summary-description"}>
        {summary.content.map((c: ISummaryContent) => {
          return (
            <p key={c.id} data-testid={"summary-description-content"}>
              {c.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};
