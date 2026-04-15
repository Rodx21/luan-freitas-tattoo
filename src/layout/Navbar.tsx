import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home",      path: "/" },
    { label: "About",     path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Book",      path: "/book" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        pt: scrolled ? 1.5 : { xs: 2.5, md: 3 },
        pb: scrolled ? 1.5 : 0,
        px: { xs: 3, md: 6 },
        zIndex: 1000,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        backgroundColor: scrolled ? "rgba(12,9,6,0.78)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(240,235,225,0.06)" : "1px solid transparent",
        transition: "backdrop-filter 0.4s ease, background-color 0.4s ease, padding 0.4s ease, border-color 0.4s ease",
        willChange: "backdrop-filter",
      }}
    >
      {/* Left: monogram */}
      <Box
        component={Link}
        to="/"
        sx={{ justifySelf: "start", display: "inline-flex", alignItems: "center", textDecoration: "none" }}
      >
        <img
          src="/assets/logos/monogram_lf_transparent_gold.png"
          alt="Luan Freitas"
          style={{
            height: scrolled ? "44px" : "58px",
            width: "auto",
            display: "block",
            opacity: 0.97,
            transition: "height 0.4s ease",
          }}
        />
      </Box>

      {/* Center: nav links */}
      <Box sx={{ justifySelf: "center", display: "flex", gap: { xs: 2.5, md: 4 }, alignItems: "center" }}>
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
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                opacity: isActive ? 1 : 0.65,
                position: "relative",
                py: 0.5,
                transition: "opacity 0.2s",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -3,
                  height: "1px",
                  backgroundColor: "primary.main",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s ease",
                },
                "&:hover": { opacity: 1 },
                "&:hover:after": { transform: "scaleX(1)" },
              }}
            >
              {item.label}
            </Typography>
          );
        })}
      </Box>

      {/* Right: Instagram */}
      <Box sx={{ justifySelf: "end", display: "flex", alignItems: "center" }}>
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
            color: "rgba(240,235,225,0.6)",
            transition: "color 0.2s",
            "&:hover": { color: "primary.main" },
          }}
        >
          <InstagramIcon sx={{ fontSize: 26 }} />
        </Box>
      </Box>
    </Box>
  );
}
