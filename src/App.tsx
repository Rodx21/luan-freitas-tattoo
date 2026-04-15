import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./app/public/pages/HomePage";
import AboutPage from "./app/public/pages/AboutPage";
import PortfolioPage from "./app/public/pages/PortfolioPage";
import BookPage from "./app/public/pages/BookPage";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
