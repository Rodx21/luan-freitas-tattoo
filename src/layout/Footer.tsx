import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: 6,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        opacity: 0.75,
      }}
    >
      <Typography sx={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
        Luan Freitas Tattoo • Dublin
      </Typography>
      <Typography sx={{ fontSize: 12, mt: 1, opacity: 0.7 }}>
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
}
