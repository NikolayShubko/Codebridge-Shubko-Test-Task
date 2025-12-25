import { Box, CircularProgress } from "@mui/material";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <Box className={s.loader}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
