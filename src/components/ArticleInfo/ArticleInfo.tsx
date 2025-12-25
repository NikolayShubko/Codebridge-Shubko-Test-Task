import { Box, Paper, Typography } from "@mui/material";
import type { ArticleInterface } from "../../types";
import LinkStyled from "../Link/LinkStyled";
import type { FC } from "react";
import s from "./ArticleInfo.module.scss";
import Loader from "../Loader/Loader";

type ArticleInfoProp = {
  article: ArticleInterface | null;
  isLoading: boolean;
};

const ArticleInfo: FC<ArticleInfoProp> = ({ article, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (!article) {
    return <Typography>Article not found</Typography>;
  }
  return (
    <>
      <img
        className={s.article_image}
        src={article?.image_url}
        alt={article.title}
      />

      <Paper className={s.article_container} elevation={5}>
        <Box className={s.article_holder}>
          <Typography component={"h1"} className={s.article_title}>
            {article?.title}
          </Typography>
          <Typography className={s.article_summary}>
            {article?.summary}
          </Typography>
        </Box>
      </Paper>
      <Box className={s.link_holder}>
        <LinkStyled path={"/"}>
          <img src={"/arrow-left.png"} alt="arrow-left" />
          Back to homepage
        </LinkStyled>
      </Box>
    </>
  );
};

export default ArticleInfo;
