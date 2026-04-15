import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0A0A",
      paper: "#111111",
    },
    primary: { main: "#C6A75E" },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255,255,255,0.65)",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontFamily: "Cormorant Garamond", fontWeight: 500 },
    h2: { fontFamily: "Cormorant Garamond", fontWeight: 500 },
    h3: { fontFamily: "Cormorant Garamond", fontWeight: 500 },
  },
});

export default theme;
