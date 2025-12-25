import { createContext } from "react";
import type { SearchContextInterface } from "../../types";

export const SearchContext = createContext<SearchContextInterface | undefined>(
  undefined
);
