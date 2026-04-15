import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Book", path: "/book" },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pt: { xs: 2.5, md: 3 },
        px: { xs: 3, md: 6 },
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {/* Left: LF Logo (2x bigger) */}
      <Box
        component={Link}
        to="/"
        sx={{
          justifySelf: "start",
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          pointerEvents: "auto",
        }}
      >
        <img
          src="/assets/logos/monogram_lf_transparent_gold.png"
          alt="Luan Freitas Tattoo"
          style={{
            height: "64px",
            width: "auto",
            display: "block",
            opacity: 0.98,
          }}
        />
      </Box>

      {/* Center: Menu */}
      <Box
        sx={{
          justifySelf: "center",
          display: "flex",
          gap: { xs: 2.5, md: 3.5 },
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        {links.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Typography
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontSize: 12,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                opacity: isActive ? 1 : 0.82,
                position: "relative",
                py: 0.5,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                  bottom: -4,
                  height: "2px",
                  width: isActive ? "100%" : "0%",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  transition: "width 0.2s ease",
                },
                "&:hover": { opacity: 1 },
                "&:hover:after": { width: "100%" },
              }}
            >
              {item.label}
            </Typography>
          );
        })}
      </Box>

      {/* Right: Instagram (2x bigger) */}
      <Box
        sx={{
          justifySelf: "end",
          display: "flex",
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        <Box
          component="a"
          href="https://www.instagram.com/luanfreitas_tattoo/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: "999px",
            color: "rgba(255,255,255,0.9)",
            opacity: 0.9,
            "&:hover": { opacity: 1, color: "primary.main" },
          }}
        >
          <InstagramIcon sx={{ fontSize: 36 }} />
        </Box>
      </Box>
    </Box>
  );
}
