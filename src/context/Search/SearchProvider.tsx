import { useMemo, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { SearchContext } from "./SearchContext";
import useGetTitleNotation from "../../hooks/useGetTitleNotation";
import useGetSummaryNotation from "../../hooks/useGetSummaryNotation";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query);

  const { titleArticles, isLoadingTitles, titleArticlesCount } =
    useGetTitleNotation(debouncedQuery);

  const { summaryArticles, isLoadingSummarys, summaryArticlesCount } =
    useGetSummaryNotation(debouncedQuery);

  const articlesResult = useMemo(() => {
    if (!titleArticles.length && !summaryArticles.length) return [];

    const titleIds = new Set(titleArticles.map((item) => item.id));
    const uniqueSummaryArticles = summaryArticles.filter(
      (item) => !titleIds.has(item.id)
    );
    return [...titleArticles, ...uniqueSummaryArticles];
  }, [titleArticles, summaryArticles]);

  const isLoadingSearch = isLoadingTitles || isLoadingSummarys;

  const articlesCount = debouncedQuery
    ? titleArticlesCount + summaryArticlesCount
    : 0;

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        debouncedQuery,
        articlesResult,
        isLoadingSearch,
        articlesCount,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
