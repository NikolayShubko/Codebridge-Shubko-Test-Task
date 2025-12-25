import { Box, InputBase, Typography } from "@mui/material";
import useSearch from "../../hooks/useSearch";
import s from "./SearchBar.module.scss";
const SearchBar = () => {
  const { query, setQuery, debouncedQuery, isLoadingSearch, articlesCount } =
    useSearch();
  return (
    <>
      <Box className={s.search_container}>
        <Typography
          component={"label"}
          htmlFor={"searchbar"}
          className={s.search_header}
        >
          Filter by Keywords
        </Typography>
        <Box className={s.input_wrapper}>
          <InputBase
            className={s.search_input}
            type="text"
            id="searchbar"
            name="search"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.target.value);
            }}
          />
          <img
            src="/search.png"
            width="20px"
            height="20px"
            className={s.search_input_icon}
          />
        </Box>
      </Box>
      {debouncedQuery && !isLoadingSearch && (
        <Typography className={s.search_result_counter}>
          Results: {articlesCount}
        </Typography>
      )}
    </>
  );
};

export default SearchBar;
