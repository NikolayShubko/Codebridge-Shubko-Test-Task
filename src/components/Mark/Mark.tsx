import React from "react";
import s from "./Mark.module.scss";
const Mark = ({ children }: { children: React.ReactNode }) => {
  return <mark className={s.mark}>{children}</mark>;
};

export default Mark;
