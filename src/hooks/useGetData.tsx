import { useEffect, useState } from "react";
import type { ArticleInterface } from "../types/ArticleInterface";

function useGetData(): {
  data: ArticleInterface[];
  isLoading: boolean;
  error: string | null;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ArticleInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=100"
        );
        const result = await response.json();

        setData(result.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknows Error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { data, isLoading, error };
}

export default useGetData;
