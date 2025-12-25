import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import { SearchProvider } from "./context/Search/SearchProvider.tsx";
import "@styles/global.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#363636",
    },
    text: { primary: "#363636" },
  },
  typography: {
    caption: { fontSize: "14px" },
    fontFamily: "var(--main-font-family)",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
