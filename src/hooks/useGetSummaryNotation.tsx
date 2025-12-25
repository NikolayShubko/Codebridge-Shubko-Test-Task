import { useEffect, useState } from "react";
import type { ApiResponse, ArticleInterface } from "../types";

function useGetSummaryNotation(query: string): {
  summaryArticles: ArticleInterface[];
  isLoadingSummarys: boolean;
  summaryArticlesCount: number;
  errorArticleSummary: string | null;
} {
  const [isLoadingSummarys, setIsLoadingSummarys] = useState<boolean>(false);
  const [summaryArticles, setSummaryArticles] = useState<
    ArticleInterface[] | []
  >([]);
  const [summaryArticlesCount, setSummaryArticlesCount] = useState<number>(0);
  const [errorArticleSummary, setErrorArticleSummary] = useState<string | null>(
    null
  );

  useEffect(() => {
    const queryWithComa = query.trimEnd().replaceAll(" ", ",");
    const getData = async () => {
      if (!query) {
        setSummaryArticles([]);
        return;
      }
      setIsLoadingSummarys(true);
      try {
        const response = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=100&summary_contains_one=${queryWithComa}`
        );
        const result: ApiResponse = await response.json();
        setSummaryArticles(result.results);
        setSummaryArticlesCount(result.count);
      } catch (err) {
        if (err instanceof Error) {
          setErrorArticleSummary(err.message);
        } else {
          setErrorArticleSummary("Unknows Error");
        }
      } finally {
        setIsLoadingSummarys(false);
      }
    };
    getData();
  }, [query]);

  return {
    summaryArticles,
    isLoadingSummarys,
    summaryArticlesCount,
    errorArticleSummary,
  };
}

export default useGetSummaryNotation;
