import type { ArticleInterface } from "./ArticleInterface";

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ArticleInterface[] | [];
}
