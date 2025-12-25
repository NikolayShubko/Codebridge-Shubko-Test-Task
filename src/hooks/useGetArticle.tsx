import { useEffect, useState } from "react";
import type { ArticleInterface } from "../types";

function useGetArticle(articleId?: string): {
  article: ArticleInterface | null;
  isLoading: boolean;
  errorArticle: string | null;
} {
  const [article, setArticle] = useState<ArticleInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorArticle, setErrorArticle] = useState<string | null>(null);
  useEffect(() => {
    const getData = async () => {
      if (!articleId) return;
      try {
        setIsLoading(true);
        const data = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/${articleId}/`
        );
        const result: ArticleInterface = await data.json();
        setArticle(result);
      } catch (err) {
        if (err instanceof Error) {
          setErrorArticle(err.message);
        } else {
          setErrorArticle("Unknows Error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [articleId]);
  return { article, isLoading, errorArticle };
}

export default useGetArticle;
