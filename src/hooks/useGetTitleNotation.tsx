import { useEffect, useState } from "react";
import type { ApiResponse, ArticleInterface } from "../types";

function useGetTitleNotation(query: string): {
  titleArticles: ArticleInterface[];
  isLoadingTitles: boolean;
  titleArticlesCount: number;
  errorArticleTitle: string | null;
} {
  const [titleArticles, setTitleArticles] = useState<ArticleInterface[]>([]);
  const [isLoadingTitles, setIsLoadingTitles] = useState<boolean>(false);

  const [titleArticlesCount, setTitleArticlesCount] = useState<number>(0);
  const [errorArticleTitle, setErrorArticleTitle] = useState<string | null>(
    null
  );

  useEffect(() => {
    const queryWithComa = query.trimEnd().replaceAll(" ", ",");
    const getData = async () => {
      if (!query) {
        setTitleArticles([]);
        return;
      }

      setIsLoadingTitles(true);
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=100&title_contains_one=${queryWithComa}`
        );
        const result: ApiResponse = await response.json();
        setTitleArticlesCount(result.count);
        setTitleArticles(result.results);
      } catch (err) {
        if (err instanceof Error) {
          setErrorArticleTitle(err.message);
        } else {
          setErrorArticleTitle("Unknows Error");
        }
      } finally {
        setIsLoadingTitles(false);
      }
    };
    getData();
  }, [query]);

  return {
    titleArticles,
    isLoadingTitles,
    titleArticlesCount,
    errorArticleTitle,
  };
}

export default useGetTitleNotation;
