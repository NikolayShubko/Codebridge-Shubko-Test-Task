import type { ArticleInterface } from "./ArticleInterface";

export interface SearchContextInterface {
  query: string;
  isLoadingSearch: boolean;
  setQuery: (query: string) => void;
  debouncedQuery: string;
  articlesResult: ArticleInterface[];
  articlesCount: number;
}
