import { useContext } from "react";
import { SearchContext } from "../context/Search/SearchContext";

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Something went wrong");
  }
  return context;
}

export default useSearch;
