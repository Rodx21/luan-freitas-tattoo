import { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Grid,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Navbar from "../../../layout/Navbar";
import Footer from "../../../layout/Footer";

const STYLES = ["Blackwork", "Realism", "Fine Line", "Old School", "Watercolor", "Not sure yet"];
const SIZES  = ["Small (up to 5 cm)", "Medium (5–15 cm)", "Large (15–25 cm)", "XL / Full piece (25 cm+)"];
const BODY_PARTS = [
  "Forearm", "Upper Arm", "Full Sleeve", "Chest", "Back",
  "Ribs", "Leg", "Calf", "Ankle / Foot", "Neck", "Hand", "Other",
];

const WHATSAPP_NUMBER = "353000000000"; // replace with Luan's number

interface FormState {
  name: string;
  email: string;
  instagram: string;
  style: string;
  size: string;
  bodyPart: string;
  description: string;
  budget: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  instagram: "",
  style: "",
  size: "",
  bodyPart: "",
  description: "",
  budget: "",
};

const fieldSx = {
  "& .MuiInput-root": {
    color: "rgba(240,235,225,0.90)",
    fontSize: 15,
    "&:before": { borderBottomColor: "rgba(240,235,225,0.11)" },
    "&:hover:not(.Mui-disabled):before": { borderBottomColor: "rgba(201,168,108,0.55)" },
    "&:after": { borderBottomColor: "#C9A86C" },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(240,235,225,0.30)",
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "rgba(201,168,108,0.85)" },
  "& .MuiSelect-icon": { color: "rgba(240,235,225,0.32)" },
  "& .MuiInputBase-input": { paddingBottom: "10px" },
};

export default function BookPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function set(key: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files).slice(0, 5));
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  }

  function buildWhatsAppMessage() {
    const lines = [
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      form.instagram ? `📸 *Instagram:* ${form.instagram}` : null,
      `🎨 *Style:* ${form.style}`,
      `📐 *Size:* ${form.size}`,
      `📍 *Body part:* ${form.bodyPart}`,
      form.budget ? `💶 *Budget:* ${form.budget}` : null,
      `📝 *Description:*\n${form.description}`,
      files.length > 0 ? `\n📎 *References:* ${files.length} image(s) — will send separately.` : null,
    ]
      .filter(Boolean)
      .join("\n");

    return encodeURIComponent(lines);
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);

    // Simulate a brief loading state before redirecting
    await new Promise((r) => setTimeout(r, 800));

    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

    setSubmitted(true);
    setLoading(false);

    // Open WhatsApp in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.style &&
    form.size &&
    form.bodyPart &&
    form.description.trim().length >= 20;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />

      {/* ── HEADER ── */}
      <Box
        sx={{
          pt: { xs: 18, md: 22 },
          pb: { xs: 6, md: 8 },
          px: { xs: 3, md: 10 },
          borderBottom: "1px solid rgba(240,235,225,0.06)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond",
              fontSize: { xs: 42, md: 64 },
              fontWeight: 500,
              lineHeight: 1,
              mb: 2,
            }}
          >
            Book a Session
          </Typography>
          <Typography sx={{ opacity: 0.45, fontSize: 14, lineHeight: 1.8, maxWidth: 560 }}>
            Fill out the form below. Luan personally reviews every request and will reach out
            within 48–72 hours to discuss your concept and availability.
          </Typography>
        </motion.div>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: { xs: 6, md: 10 } }}>
        <Grid container spacing={{ xs: 6, md: 10 }}>

          {/* ── FORM ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    border: "1px solid rgba(201,168,108,0.3)",
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ fontSize: 40, color: "primary.main", opacity: 0.85 }} />
                  <Typography
                    sx={{ fontFamily: "Cormorant Garamond", fontSize: 30, fontWeight: 500 }}
                  >
                    Request sent.
                  </Typography>
                  <Typography sx={{ opacity: 0.6, lineHeight: 1.8, fontSize: 14 }}>
                    A WhatsApp conversation was opened with your details pre-filled. If it didn't open
                    automatically, send the message manually. Luan will reply within 48–72 hours.
                  </Typography>
                  <Button
                    variant="text"
                    onClick={() => { setForm(EMPTY); setFiles([]); setSubmitted(false); }}
                    sx={{
                      alignSelf: "flex-start",
                      color: "rgba(240,235,225,0.48)",
                      fontSize: 12,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      mt: 1,
                      p: 0,
                      "&:hover": { color: "#F0EBE1", background: "none" },
                    }}
                  >
                    Submit another request
                  </Button>
                </Box>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                {/* Contact */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 2 }}
                  >
                    Contact
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="Full name *" value={form.name} onChange={set("name")} variant="standard" fullWidth sx={fieldSx} />
                    <TextField label="Email *" type="email" value={form.email} onChange={set("email")} variant="standard" fullWidth sx={fieldSx} />
                    <TextField label="Instagram (optional)" value={form.instagram} onChange={set("instagram")} variant="standard" fullWidth sx={fieldSx} />
                  </Box>
                </Box>

                {/* Tattoo details */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 2 }}
                  >
                    Tattoo Details
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                      select
                      label="Style *"
                      value={form.style}
                      onChange={set("style")}
                      variant="standard"
                      fullWidth
                      sx={fieldSx}
                    >
                      {STYLES.map((s) => (
                        <MenuItem key={s} value={s} sx={{ fontSize: 14 }}>{s}</MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      select
                      label="Approximate size *"
                      value={form.size}
                      onChange={set("size")}
                      variant="standard"
                      fullWidth
                      sx={fieldSx}
                    >
                      {SIZES.map((s) => (
                        <MenuItem key={s} value={s} sx={{ fontSize: 14 }}>{s}</MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      select
                      label="Body placement *"
                      value={form.bodyPart}
                      onChange={set("bodyPart")}
                      variant="standard"
                      fullWidth
                      sx={fieldSx}
                    >
                      {BODY_PARTS.map((p) => (
                        <MenuItem key={p} value={p} sx={{ fontSize: 14 }}>{p}</MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label="Budget (optional)"
                      placeholder="e.g. €300–500"
                      value={form.budget}
                      onChange={set("budget")}
                      variant="standard"
                      fullWidth
                      sx={fieldSx}
                    />
                  </Box>
                </Box>

                {/* Description */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 2 }}
                  >
                    Your Concept
                  </Typography>
                  <TextField
                    label="Describe your idea *"
                    placeholder="Tell Luan about your concept, any symbols, meaning, or references. The more detail, the better."
                    value={form.description}
                    onChange={set("description")}
                    variant="standard"
                    fullWidth
                    multiline
                    rows={5}
                    sx={fieldSx}
                  />
                </Box>

                {/* Reference images */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 2 }}
                  >
                    Reference Images (optional, max 5)
                  </Typography>

                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleFiles}
                  />

                  <Button
                    variant="outlined"
                    startIcon={<AttachFileIcon />}
                    onClick={() => fileRef.current?.click()}
                    disabled={files.length >= 5}
                    sx={{
                      borderRadius: 0,
                      borderColor: "rgba(240,235,225,0.13)",
                      color: "rgba(240,235,225,0.58)",
                      fontSize: 12,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      "&:hover": { borderColor: "rgba(201,168,108,0.6)", color: "#F0EBE1" },
                    }}
                  >
                    Attach images
                  </Button>

                  {files.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                      {files.map((f) => (
                        <Chip
                          key={f.name}
                          label={f.name}
                          onDelete={() => removeFile(f.name)}
                          size="small"
                          sx={{
                            fontSize: 11,
                            backgroundColor: "rgba(240,235,225,0.06)",
                            color: "rgba(240,235,225,0.65)",
                            borderRadius: "4px",
                            "& .MuiChip-deleteIcon": { color: "rgba(240,235,225,0.38)" },
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={!isValid || loading}
                  endIcon={loading ? <CircularProgress size={16} color="inherit" /> : <ArrowForwardIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: 0,
                    px: 4,
                    py: 1.8,
                    border: "1px solid",
                    borderColor: isValid ? "rgba(240,235,225,0.52)" : "rgba(240,235,225,0.11)",
                    backgroundColor: "rgba(240,235,225,0.02)",
                    color: isValid ? "rgba(240,235,225,0.92)" : "rgba(240,235,225,0.22)",
                    fontSize: 12,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontFamily: "Inter",
                    transition: "all 200ms ease",
                    "&:hover": {
                      backgroundColor: "rgba(240,235,225,0.07)",
                      borderColor: "rgba(201,168,108,0.8)",
                      color: "#F0EBE1",
                    },
                    "&:disabled": { cursor: "not-allowed" },
                  }}
                >
                  {loading ? "Sending…" : "Send Request via WhatsApp"}
                </Button>

                <Typography sx={{ fontSize: 11, opacity: 0.3, lineHeight: 1.6 }}>
                  Submitting opens a WhatsApp conversation with your details pre-filled.
                  No payment is collected at this stage.
                </Typography>
              </motion.form>
            )}
          </Grid>

          {/* ── SIDEBAR ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>

                {/* What to expect */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 3 }}
                  >
                    What to expect
                  </Typography>
                  {[
                    { t: "48–72 h response", d: "Every request is read personally. No automated replies." },
                    { t: "Custom design only",  d: "Luan does not replicate existing tattoos or flash designs." },
                    { t: "Deposit required",    d: "A deposit is required to lock your date. Fully refundable if cancelled 7+ days in advance." },
                    { t: "Touch-up included",   d: "One complimentary touch-up session included for all pieces." },
                  ].map((item) => (
                    <Box
                      key={item.t}
                      sx={{ pb: 3, mb: 3, borderBottom: "1px solid rgba(240,235,225,0.07)" }}
                    >
                      <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>{item.t}</Typography>
                      <Typography sx={{ opacity: 0.5, fontSize: 13, lineHeight: 1.7 }}>{item.d}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* Pricing guide */}
                <Box>
                  <Typography
                    sx={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", opacity: 0.35, mb: 3 }}
                  >
                    Pricing Guide
                  </Typography>
                  {[
                    { size: "Small",  range: "€150 – €300" },
                    { size: "Medium", range: "€300 – €600" },
                    { size: "Large",  range: "€600 – €1,200" },
                    { size: "Full piece / sleeve", range: "from €1,500" },
                  ].map((row) => (
                    <Box
                      key={row.size}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 1.5,
                        borderBottom: "1px solid rgba(240,235,225,0.06)",
                      }}
                    >
                      <Typography sx={{ fontSize: 13, opacity: 0.6 }}>{row.size}</Typography>
                      <Typography
                        sx={{ fontFamily: "Cormorant Garamond", fontSize: 18, color: "primary.main" }}
                      >
                        {row.range}
                      </Typography>
                    </Box>
                  ))}
                  <Typography sx={{ fontSize: 11, opacity: 0.3, mt: 2, lineHeight: 1.6 }}>
                    Final price depends on complexity, detail, and session time.
                    Exact quote given after consultation.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
