import { useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";

type Style = "All" | "Blackwork" | "Realism" | "Fine Line" | "Old School" | "Watercolor";

interface Piece {
  id: number;
  style: Exclude<Style, "All">;
  title: string;
  size: string;
  src: string;
  aspect: "portrait" | "square" | "landscape";
}

const PIECES: Piece[] = [
  { id: 1,  style: "Blackwork",  title: "Serpent Sleeve",       size: "Full Sleeve",    src: "", aspect: "portrait"  },
  { id: 2,  style: "Realism",    title: "Portrait Study",       size: "A4",             src: "", aspect: "portrait"  },
  { id: 3,  style: "Fine Line",  title: "Botanical Branch",     size: "15 × 8 cm",      src: "", aspect: "landscape" },
  { id: 4,  style: "Blackwork",  title: "Sacred Geometry",      size: "20 × 20 cm",     src: "", aspect: "square"    },
  { id: 5,  style: "Old School", title: "Anchor & Roses",       size: "12 × 10 cm",     src: "", aspect: "square"    },
  { id: 6,  style: "Realism",    title: "Eye of the Beholder",  size: "10 × 8 cm",      src: "", aspect: "square"    },
  { id: 7,  style: "Watercolor", title: "Hummingbird",          size: "10 × 12 cm",     src: "", aspect: "portrait"  },
  { id: 8,  style: "Fine Line",  title: "Moon Phases",          size: "30 × 4 cm",      src: "", aspect: "landscape" },
  { id: 9,  style: "Blackwork",  title: "Mandala Back Piece",   size: "Back Piece",     src: "", aspect: "square"    },
  { id: 10, style: "Realism",    title: "Wildlife — Lion",      size: "A5",             src: "", aspect: "portrait"  },
  { id: 11, style: "Old School", title: "Swallow & Dagger",     size: "10 × 14 cm",     src: "", aspect: "portrait"  },
  { id: 12, style: "Watercolor", title: "Galaxy Sleeve Detail", size: "Partial Sleeve", src: "", aspect: "portrait"  },
];

const FILTERS: Style[] = ["All", "Blackwork", "Realism", "Fine Line", "Old School", "Watercolor"];

const ASPECT_RATIOS: Record<Piece["aspect"], string> = {
  portrait:  "3 / 4",
  square:    "1 / 1",
  landscape: "4 / 3",
};

const tx: Transition = { duration: 0.4 };

export default function PortfolioPage() {
  const [active, setActive]   = useState<Style>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? PIECES : PIECES.filter((p) => p.style === active);
  const lightboxPiece = lightbox !== null ? PIECES.find((p) => p.id === lightbox) : null;

  function navigate(dir: -1 | 1) {
    if (lightbox === null) return;
    const idx  = filtered.findIndex((p) => p.id === lightbox);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />

      {/* ── HEADER ── */}
      <Box
        sx={{
          pt: { xs: 20, md: 26 },
          pb: { xs: 6, md: 8 },
          px: { xs: 4, md: 10 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={tx}>
          <Typography
            sx={{
              fontSize: 10,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "primary.main",
              mb: 3,
              opacity: 0.85,
            }}
          >
            Selected Work
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontStyle: "italic",
              fontSize: { xs: 64, sm: 90, md: 120 },
              fontWeight: 400,
              lineHeight: 0.9,
              mb: 3,
              letterSpacing: -1,
            }}
          >
            Portfolio
          </Typography>
          <Typography
            sx={{ opacity: 0.35, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", mt: 2 }}
          >
            {PIECES.length} pieces · Dublin, Ireland
          </Typography>
        </motion.div>
      </Box>

      {/* ── FILTER ── */}
      <Box
        sx={{
          px: { xs: 4, md: 10 },
          py: 3,
          display: "flex",
          gap: { xs: 3, md: 5 },
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(240,235,225,0.06)",
          overflowX: "auto",
        }}
      >
        {FILTERS.map((f) => (
          <Box
            key={f}
            onClick={() => setActive(f)}
            sx={{
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              pb: 0.5,
              color: active === f ? "primary.main" : "rgba(240,235,225,0.38)",
              borderBottom: active === f ? "1px solid" : "1px solid transparent",
              borderColor: active === f ? "primary.main" : "transparent",
              transition: "color 0.2s, border-color 0.2s",
              whiteSpace: "nowrap",
              "&:hover": { color: active === f ? "primary.main" : "rgba(240,235,225,0.70)" },
            }}
          >
            {f}
          </Box>
        ))}
      </Box>

      {/* ── MASONRY GRID ── */}
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          columns: { xs: 2, sm: 3, md: 4 },
          columnGap: { xs: "8px", md: "12px" },
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((piece, i) => (
            <motion.div
              key={piece.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 } satisfies Transition}
              style={{ breakInside: "avoid", marginBottom: "10px", display: "inline-block", width: "100%" }}
            >
              <Box
                onClick={() => setLightbox(piece.id)}
                sx={{
                  position: "relative",
                  aspectRatio: ASPECT_RATIOS[piece.aspect],
                  backgroundColor: "#0f0b07",
                  overflow: "hidden",

                  // clip-path reveal on hover
                  "& .reveal": {
                    clipPath: "inset(100% 0 0 0)",
                    transition: "clip-path 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  },
                  "&:hover .reveal": {
                    clipPath: "inset(0% 0 0 0)",
                  },
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Number badge */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: 14,
                    left: 16,
                    fontFamily: "Cormorant Garamond",
                    fontSize: 11,
                    opacity: 0.2,
                    letterSpacing: 1,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                >
                  {String(piece.id).padStart(2, "0")}
                </Typography>

                {/* Image or placeholder */}
                {piece.src ? (
                  <Box
                    component="img"
                    src={piece.src}
                    alt={piece.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(145deg, #141414 0%, #1a1a1a 50%, #111 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Cormorant Garamond",
                        fontStyle: "italic",
                        fontSize: 10,
                        letterSpacing: 3,
                        opacity: 0.15,
                        textTransform: "uppercase",
                      }}
                    >
                      {piece.style}
                    </Typography>
                  </Box>
                )}

                {/* Clip-path overlay — reveals from bottom */}
                <Box
                  className="reveal"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond",
                      fontSize: { xs: 13, md: 16 },
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {piece.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 9,
                      letterSpacing: 2,
                      opacity: 0.5,
                      mt: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {piece.style} · {piece.size}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>

      {/* ── LIGHTBOX ── */}
      <Modal
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: { xs: 2, md: 8 },
          }}
        >
          {lightboxPiece && (
            <>
              <Box
                sx={{
                  maxWidth: "80vw",
                  maxHeight: "72vh",
                  aspectRatio: ASPECT_RATIOS[lightboxPiece.aspect],
                  backgroundColor: "#141008",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 240,
                  minHeight: 240,
                  border: "1px solid rgba(240,235,225,0.06)",
                }}
              >
                {lightboxPiece.src ? (
                  <Box
                    component="img"
                    src={lightboxPiece.src}
                    alt={lightboxPiece.title}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: "Cormorant Garamond", opacity: 0.15, letterSpacing: 3, fontStyle: "italic" }}>
                    {lightboxPiece.style}
                  </Typography>
                )}
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography sx={{ fontFamily: "Cormorant Garamond", fontStyle: "italic", fontSize: 22 }}>
                  {lightboxPiece.title}
                </Typography>
                <Typography sx={{ fontSize: 10, opacity: 0.35, letterSpacing: 2.5, textTransform: "uppercase", mt: 1 }}>
                  {lightboxPiece.style} · {lightboxPiece.size}
                </Typography>
              </Box>

              <IconButton onClick={() => navigate(-1)} sx={{ position: "absolute", left: { xs: -8, md: -16 }, top: "38%", color: "rgba(240,235,225,0.42)", "&:hover": { color: "#F0EBE1" } }}>
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => navigate(1)}  sx={{ position: "absolute", right: { xs: -8, md: -16 }, top: "38%", color: "rgba(240,235,225,0.42)", "&:hover": { color: "#F0EBE1" } }}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </>
          )}

          <IconButton onClick={() => setLightbox(null)} sx={{ position: "absolute", top: -48, right: 0, color: "rgba(240,235,225,0.42)", "&:hover": { color: "#F0EBE1" } }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>

      <Footer />
    </Box>
  );
}
