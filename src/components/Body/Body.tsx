import React from "react";
import {
  Card,
  Text,
  Title,
  Title as Role,
} from "@joshuagardiner/typescript-component-library";
import Image from "next/image";
import styling from "./Body.module.css";

export const Body: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.content}>
          <Card marginTop={"-9.5vw"} width={"66%"}>
            <div
              style={{
                display: "inherit",
                height: "17vw",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                width: "17vw",
              }}
            >
              <Image
                className={styling.avatar}
                src={"/avatar.jpg"}
                alt={"jg_avatar"}
                layout="fill"
                objectFit="contain"
                height="17vw"
                width="17vw"
              />
            </div>
            <Title
              fontSize={"3.5vw"}
              marginTop={"5%"}
              text={"Joshua Gardiner"}
            />
            <Role
              fontSize={"1.25vw"}
              marginTop={"-1.75%"}
              text={"Software Development Engineer"}
              textTransform={"uppercase"}
            />
            <Text
              fontSize={"1.125vw"}
              lineHeight={"2.5vw"}
              maxWidth={"75%"}
              text={`You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.`}
            />
          </Card>
        </div>
      </div>
    </>
  );
};
