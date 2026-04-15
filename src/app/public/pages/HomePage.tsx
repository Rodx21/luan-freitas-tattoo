import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import HeroButton from "../../../shared/components/HeroButton";
import Section from "../../../shared/components/Section";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", bgcolor: "background.default" }}>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          backgroundColor: "#0A0A0A",
          backgroundImage: "url(/assets/hero/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          style={{ position: "relative", zIndex: 2, width: "100%" }}
        >
          {/* Prestige line */}
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 500,
              fontSize: { xs: 40, md: 58 },
              lineHeight: 1.03,
              mb: 2.5,
              textShadow: "0 10px 30px rgba(0,0,0,0.55)",
            }}
          >
            Internationally Awarded Tattoo Artist
          </Typography>

          {/* Signature line (no box) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.2,
              mb: 7,
            }}
          >
            {/* thin gold rule */}
            <Box
              sx={{
                width: 90,
                height: 1,
                backgroundColor: "primary.main",
                opacity: 0.9,
              }}
            />

            {/* name like a signature credit */}
            <Typography
              sx={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 500,
                fontSize: { xs: 26, md: 30 },
                letterSpacing: 0.6,
                opacity: 0.95,
              }}
            >
              Luan Freitas
            </Typography>

            {/* optional small wordmark under it (subtle) */}
            <img
              src="/assets/logos/wordmark_transparent_gold.png"
              alt="Luan Freitas Tattoo"
              style={{
                height: "22px",
                width: "auto",
                opacity: 0.8,
                marginTop: "6px",
              }}
            />
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <HeroButton component={Link} to="/portfolio" label="Portfolio" />
            <HeroButton component={Link} to="/book" label="Book" />
          </Box>
        </motion.div>
      </Box>

      {/* CONTINUATION */}
      <Section bg="paper">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Inter",
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.75,
                fontSize: 12,
                mb: 2,
              }}
            >
              About
            </Typography>

            <Typography variant="h3" sx={{ mb: 3 }}>
              Black & grey realism, portraits, and high-detail work.
            </Typography>

            <Typography sx={{ maxWidth: 560, opacity: 0.75, lineHeight: 1.9 }}>
              Placeholder text for now. Next we’ll add Luan’s biography, specialties, and studio details.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4 / 3",
                backgroundColor: "#0D0D0D",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </Grid>
        </Grid>
      </Section>

      <Footer />
    </Box>
  );
}
