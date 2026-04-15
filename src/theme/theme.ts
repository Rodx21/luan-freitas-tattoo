import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0C0906",
      paper:   "#141008",
    },
    primary: { main: "#C9A86C" },
    text: {
      primary:   "#F0EBE1",
      secondary: "rgba(240,235,225,0.55)",
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
