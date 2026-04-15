import { Box, Typography } from "@mui/material";
import Navbar from "../../../layout/Navbar";

export default function PortfolioPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary", px: 6, py: 12 }}>
      <Navbar />

      <Typography variant="h3" sx={{ mb: 6 }}>
        Portfolio
      </Typography>

      <Typography sx={{ opacity: 0.6 }}>
        Portfolio grid will be implemented here.
      </Typography>
    </Box>
  );
}
