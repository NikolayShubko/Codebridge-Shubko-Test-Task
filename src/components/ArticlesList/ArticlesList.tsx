import { Box, List, Paper, Typography } from "@mui/material";
import { memo, type FC } from "react";

import { cutText, formatDate, highLightText } from "../../helpers";

import s from "./ArticleList.module.scss";
import type { ArticleInterface } from "../../types";
import LinkStyled from "../Link/LinkStyled";
import Loader from "../Loader/Loader";

type ArticlesListProps = {
  articles: ArticleInterface[];
  isLoading: boolean;
  query?: string;
};
const ArticlesList: FC<ArticlesListProps> = memo(function ArticlesList({
  articles,
  isLoading,
  query,
}) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <List className={s.articles_list}>
      {articles?.map((art) => {
        const date = formatDate(art.published_at || "");
        const text = cutText(art.summary || "");
        return (
          <Paper variant="elevation" elevation={5} key={art.id}>
            <Box component={"li"} className={s.articles_list_item}>
              <img
                src={art.image_url}
                alt={art.title}
                className={s.articles_list_image}
              />

              <Box className={s.articles_list_card}>
                <Box className={s.articles_list_card_date}>
                  <img
                    src={"/calendar-icon.png"}
                    alt="calendar"
                    width="16px"
                    height="16px"
                  />
                  <Typography variant={"caption"}>{date}</Typography>
                </Box>
                <Box className={s.articles_list_card_description}>
                  <Typography className={s.articles_list_card_title}>
                    {query ? highLightText(art.title, query) : art.title}
                  </Typography>
                  <Typography className={s.articles_list_card_summary}>
                    {query ? highLightText(text, query) : text}
                  </Typography>
                  <LinkStyled path={`/articles/${art.id}`}>
                    Read more
                    <img
                      width="12px"
                      height="10px"
                      src="/arrow-right.png"
                      alt="Read More"
                    />
                  </LinkStyled>
                </Box>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </List>
  );
});

export default ArticlesList;
