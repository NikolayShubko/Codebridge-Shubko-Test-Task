import { ArticlesList, SearchBar } from "../components";
import { useGetData, useSearch } from "../hooks";

const Home = () => {
  const { data, isLoading } = useGetData();
  const { debouncedQuery, articlesResult, isLoadingSearch } = useSearch();
  const isSearching = !!debouncedQuery;
  const articlesToRender = isSearching ? articlesResult : data ?? [];
  const isLoadingRender = isLoading || isLoadingSearch;
  return (
    <>
      <SearchBar />

      <ArticlesList
        articles={articlesToRender}
        isLoading={isLoadingRender}
        query={isSearching ? debouncedQuery : ""}
      />
    </>
  );
};

export default Home;
