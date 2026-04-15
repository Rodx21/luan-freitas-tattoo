import { Box, Typography, Grid } from "@mui/material";
import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import HeroButton from "../../../shared/components/HeroButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay } satisfies Transition,
});

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", bgcolor: "background.default" }}>
      <Navbar />

      {/* ── HERO ── */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          px: { xs: 4, md: 10 },
          pb: { xs: 10, md: 14 },
          backgroundColor: "#0C0906",
          backgroundImage: "url(/assets/hero/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay — stronger at bottom-left */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 50%)",
          }}
        />

        {/* Hero text — left aligned, editorial */}
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 780 }}>
          <motion.div {...fadeUp(0.1)}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: 11,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "primary.main",
                mb: 3,
                opacity: 0.9,
              }}
            >
              Dublin, Ireland
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.25)}>
            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: { xs: 58, sm: 80, md: 110, lg: 130 },
                lineHeight: 0.95,
                mb: 1,
                textShadow: "0 20px 60px rgba(0,0,0,0.6)",
                letterSpacing: -1,
              }}
            >
              Luan
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.35)}>
            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 400,
                fontSize: { xs: 58, sm: 80, md: 110, lg: 130 },
                lineHeight: 0.95,
                mb: 5,
                textShadow: "0 20px 60px rgba(0,0,0,0.6)",
                letterSpacing: -1,
              }}
            >
              Freitas
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.5)}>
            <Box
              sx={{ width: 60, height: "1px", backgroundColor: "primary.main", mb: 4, opacity: 0.8 }}
            />
          </motion.div>

          <motion.div {...fadeUp(0.6)}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: 13, md: 15 },
                letterSpacing: 1.5,
                opacity: 0.65,
                textTransform: "uppercase",
                mb: 6,
                maxWidth: 360,
                lineHeight: 1.8,
              }}
            >
              Internationally Awarded Tattoo Artist
            </Typography>
          </motion.div>

          <motion.div {...fadeUp(0.75)}>
            <Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap" }}>
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <HeroButton label="Portfolio" />
              </Link>
              <Link to="/book" style={{ textDecoration: "none" }}>
                <HeroButton label="Book a Session" />
              </Link>
            </Box>
          </motion.div>
        </Box>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 9,
              letterSpacing: 4,
              textTransform: "uppercase",
              opacity: 0.35,
              writingMode: "vertical-rl",
              mb: 1,
            }}
          >
            Scroll
          </Typography>
          <Box sx={{ width: 1, height: 60, backgroundColor: "rgba(240,235,225,0.18)" }} />
        </motion.div>
      </Box>

      {/* ── ABOUT TEASER ── */}
      <Box
        sx={{
          px: { xs: 4, md: 10 },
          py: { xs: 12, md: 18 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
          backgroundColor: "background.paper",
        }}
      >
        <Grid container spacing={{ xs: 8, md: 14 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 3,
                  opacity: 0.85,
                }}
              >
                About the artist
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontStyle: "italic",
                  fontSize: { xs: 34, md: 50 },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  mb: 4,
                }}
              >
                Black & grey realism, portraits, and high-detail work.
              </Typography>
              <Typography sx={{ opacity: 0.6, lineHeight: 1.95, fontSize: 14, mb: 4, maxWidth: 420 }}>
                Born in Brazil, based in Dublin. Over a decade of craft across three continents —
                earning international recognition for precision, depth, and a distinctive aesthetic
                that treats every piece as a permanent collaboration.
              </Typography>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "primary.main",
                    opacity: 0.8,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "opacity 0.2s, gap 0.2s",
                    "&:hover": { opacity: 1, gap: 2 },
                  }}
                >
                  Read more →
                </Typography>
              </Link>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  backgroundColor: "#141008",
                  border: "1px solid rgba(240,235,225,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold corner accent */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 60,
                    height: 1,
                    backgroundColor: "primary.main",
                    opacity: 0.6,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 60,
                    backgroundColor: "primary.main",
                    opacity: 0.6,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: 13,
                    letterSpacing: 4,
                    opacity: 0.12,
                    textTransform: "uppercase",
                  }}
                >
                  Featured Work
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ── STATS STRIP ── */}
      <Box
        sx={{
          px: { xs: 4, md: 10 },
          py: { xs: 8, md: 10 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
          display: "flex",
          gap: { xs: 6, md: 0 },
          flexWrap: "wrap",
          justifyContent: { md: "space-between" },
          alignItems: "center",
        }}
      >
        {[
          { num: "10+",  label: "Years of experience" },
          { num: "4",    label: "International awards" },
          { num: "3",    label: "Continents" },
          { num: "500+", label: "Pieces completed" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Box sx={{ textAlign: { xs: "left", md: "center" } }}>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 44, md: 56 },
                  fontWeight: 400,
                  color: "primary.main",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {stat.num}
              </Typography>
              <Typography
                sx={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", opacity: 0.4 }}
              >
                {stat.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* ── PORTFOLIO TEASER ── */}
      <Box
        sx={{
          px: { xs: 4, md: 10 },
          py: { xs: 12, md: 16 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderBottom: "1px solid rgba(240,235,225,0.07)",
              pb: 3,
              mb: 6,
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 10,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  opacity: 0.4,
                  mb: 1.5,
                }}
              >
                Selected Work
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontStyle: "italic",
                  fontSize: { xs: 34, md: 52 },
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                Portfolio
              </Typography>
            </Box>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "primary.main",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 },
                }}
              >
                View all →
              </Typography>
            </Link>
          </Box>

          {/* 3-col preview grid */}
          <Grid container spacing={1.5}>
            {[{ aspect: "3/4" }, { aspect: "3/4" }, { aspect: "3/4" }].map((_, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <Box
                  sx={{
                    aspectRatio: _.aspect,
                    backgroundColor: "#141008",
                    border: "1px solid rgba(240,235,225,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: 11,
                      letterSpacing: 3,
                      opacity: 0.1,
                      textTransform: "uppercase",
                    }}
                  >
                    0{i + 1}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* ── CTA STRIP ── */}
      <Box
        sx={{
          px: { xs: 4, md: 10 },
          py: { xs: 12, md: 16 },
          borderTop: "1px solid rgba(240,235,225,0.06)",
          backgroundColor: "background.paper",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontStyle: "italic",
              fontSize: { xs: 36, md: 54 },
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: 560,
            }}
          >
            Ink is permanent. It should be perfect.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Link to="/book" style={{ textDecoration: "none" }}>
            <HeroButton label="Book a Session" />
          </Link>
        </motion.div>
      </Box>

      <Footer />
    </Box>
  );
}
