import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router";
import type { FC } from "react";
import type React from "react";

import s from "./LinkStyled.module.scss";
type LinkStyledProps = {
  path: string;
  children: React.ReactNode;
};

const LinkStyled: FC<LinkStyledProps> = ({ path, children }) => {
  return (
    <Link className={s.link} component={RouterLink} to={path}>
      {children}
    </Link>
  );
};

export default LinkStyled;
