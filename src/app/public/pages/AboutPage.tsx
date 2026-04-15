import { Box, Typography } from "@mui/material";
import Navbar from "../../../layout/Navbar";

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary", px: 6, py: 12 }}>
      <Navbar />

      <Typography variant="h3" sx={{ mb: 4 }}>
        About
      </Typography>

      <Typography sx={{ maxWidth: 600, opacity: 0.7, lineHeight: 1.8 }}>
        Tattooing is precision. Every line carries permanence.
        Every piece tells a story that lasts.
      </Typography>
    </Box>
  );
}
