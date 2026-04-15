import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./app/public/pages/HomePage";
import AboutPage from "./app/public/pages/AboutPage";
import PortfolioPage from "./app/public/pages/PortfolioPage";
import BookPage from "./app/public/pages/BookPage";
import { Grain } from "./components/Grain";
import { CustomCursor } from "./components/CustomCursor";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ minHeight: "100vh" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <Grain />
      <CustomCursor />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </Box>
  );
}
