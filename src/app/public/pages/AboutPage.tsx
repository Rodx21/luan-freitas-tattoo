import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";
import HeroButton from "../../../shared/components/HeroButton";

const AWARDS = [
  { year: "2024", title: "Best Blackwork",      event: "Dublin Tattoo Convention" },
  { year: "2023", title: "1st Place — Realism", event: "London International Tattoo" },
  { year: "2023", title: "Best of Day",         event: "Brighton Tattoo Convention" },
  { year: "2022", title: "Best Sleeve",         event: "Lisbon Tattoo Expo" },
];

const SPECIALTIES = [
  { label: "Blackwork",  desc: "Bold, graphic, timeless. From mandalas to full sleeves." },
  { label: "Realism",    desc: "Portraits, wildlife, and hyperdetail in black & grey." },
  { label: "Fine Line",  desc: "Delicate, precise, minimalist linework." },
  { label: "Old School", desc: "Classic flash, bold outlines, solid fills." },
  { label: "Watercolor", desc: "Painterly washes of colour, no harsh outlines." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

export default function AboutPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />

      {/* ── HERO ── */}
      <Box
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 8, md: 12 },
          px: { xs: 3, md: 10 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Text column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontStyle: "italic",
                  fontSize: { xs: 60, sm: 80, md: 100 },
                  fontWeight: 400,
                  lineHeight: 0.95,
                  mb: 3,
                  letterSpacing: -1,
                }}
              >
                Luan Freitas
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={1}>
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 3,
                  opacity: 0.9,
                }}
              >
                Internationally Awarded Tattoo Artist · Dublin, Ireland
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={2}>
              <Typography sx={{ opacity: 0.7, lineHeight: 1.9, fontSize: 15, maxWidth: 520, mb: 2 }}>
                Born in Brazil, based in Dublin. Luan has spent over a decade refining his craft
                across three continents — São Paulo, London, and now Ireland — earning international
                recognition for his precision, depth, and distinctive aesthetic.
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3}>
              <Typography sx={{ opacity: 0.7, lineHeight: 1.9, fontSize: 15, maxWidth: 520, mb: 5 }}>
                Every piece is treated as a collaboration. Luan spends time understanding your vision
                before a single line is drawn — because ink is permanent, and it should be perfect.
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={4}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  <HeroButton label="View Portfolio" />
                </Link>
                <Link to="/book" style={{ textDecoration: "none" }}>
                  <HeroButton label="Book a Session" />
                </Link>
              </Box>
            </motion.div>
          </Grid>

          {/* Artist photo placeholder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 5",
                  backgroundColor: "#141008",
                  border: "1px solid rgba(240,235,225,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: 13,
                    letterSpacing: 3,
                    opacity: 0.15,
                    textTransform: "uppercase",
                  }}
                >
                  Artist Photo
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ── SPECIALTIES ── */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, mb: 2 }}
          >
            Specialties
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: { xs: 30, md: 42 },
              fontWeight: 500,
              mb: 8,
              maxWidth: 520,
            }}
          >
            Five styles, one standard of excellence.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {SPECIALTIES.map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.label}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Box sx={{ borderTop: "1px solid rgba(240,235,225,0.09)", pt: 3, height: "100%" }}>
                  <Box
                    sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "primary.main", mb: 2 }}
                  />
                  <Typography
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 22, fontWeight: 500, mb: 1.5 }}
                  >
                    {s.label}
                  </Typography>
                  <Typography sx={{ opacity: 0.6, fontSize: 14, lineHeight: 1.75 }}>
                    {s.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── AWARDS ── */}
      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, mb: 2 }}
          >
            Recognition
          </Typography>
          <Typography
            sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 30, md: 42 }, fontWeight: 500, mb: 8 }}
          >
            Award-winning work.
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {AWARDS.map((a, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "60px 1fr", md: "100px 1fr 1fr" },
                  alignItems: "center",
                  gap: 3,
                  py: 3,
                  borderBottom: "1px solid rgba(240,235,225,0.07)",
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Typography
                  sx={{ fontFamily: "Cormorant Garamond", fontSize: 28, opacity: 0.25, fontWeight: 500 }}
                >
                  {a.year}
                </Typography>
                <Typography
                  sx={{ fontFamily: "Cormorant Garamond", fontSize: { xs: 18, md: 22 }, fontWeight: 500 }}
                >
                  {a.title}
                </Typography>
                <Typography sx={{ fontSize: 13, opacity: 0.45, display: { xs: "none", md: "block" } }}>
                  {a.event}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* ── STUDIO + PROCESS ── */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Studio info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                sx={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, mb: 2 }}
              >
                Studio
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 26, md: 36 },
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                Dublin, Ireland
              </Typography>
              <Typography sx={{ opacity: 0.6, lineHeight: 1.9, fontSize: 14, mb: 2 }}>
                Operating from a private studio in the heart of Dublin, appointments are
                by consultation only. Walk-ins are not accepted — every session is planned
                to ensure the best possible result.
              </Typography>
              <Typography sx={{ opacity: 0.6, lineHeight: 1.9, fontSize: 14 }}>
                Full address shared upon booking confirmation.
              </Typography>
            </motion.div>
          </Grid>

          {/* Process steps */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                sx={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, mb: 2 }}
              >
                Process
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 26, md: 36 },
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                How it works.
              </Typography>
              {[
                { n: "01", label: "Submit your idea",  desc: "Fill out the booking form with your concept, size, and reference images." },
                { n: "02", label: "Consultation",      desc: "Luan reviews your request and reaches out to discuss details and set a date." },
                { n: "03", label: "Custom design",     desc: "A bespoke design is created — no flash, no copy-paste." },
                { n: "04", label: "Your session",      desc: "Show up ready. The rest is permanent." },
              ].map((step) => (
                <Box key={step.n} sx={{ display: "flex", gap: 3, mb: 3, alignItems: "flex-start" }}>
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: 24,
                      opacity: 0.2,
                      minWidth: 32,
                      lineHeight: 1,
                      pt: 0.2,
                    }}
                  >
                    {step.n}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>{step.label}</Typography>
                    <Typography sx={{ opacity: 0.55, fontSize: 13, lineHeight: 1.75 }}>{step.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
