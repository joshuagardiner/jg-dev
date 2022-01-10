import React from "react";
import { Navigation } from "../Navigation/Navigation";
import styling from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <>
      <div className={styling.container}>
        <Navigation />
      </div>
    </>
  );
};
