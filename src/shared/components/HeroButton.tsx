import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type HeroButtonProps = ButtonProps & {
  label: string;
};

export default function HeroButton({ label, ...props }: HeroButtonProps) {
  return (
    <Button
      {...props}
      endIcon={<ArrowForwardIcon />}
      sx={{
        minWidth: { xs: 220, md: 290 },
        height: 58,
        borderRadius: 0,
        px: 3.5,

        backgroundColor: "rgba(240,235,225,0.02)",
        color: "rgba(240,235,225,0.92)",
        border: "1px solid rgba(240,235,225,0.45)",
        backdropFilter: "blur(6px)",

        fontFamily: "Inter",
        letterSpacing: 4,
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: 12,

        "& .MuiButton-endIcon": { marginLeft: "14px" },
        "& .MuiButton-endIcon svg": { fontSize: 18, opacity: 0.9 },

        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          left: 18,
          right: 18,
          bottom: 10,
          height: "1px",
          backgroundColor: "rgba(240,235,225,0.2)",
          transform: "scaleX(0.0)",
          transformOrigin: "left",
          transition: "transform 180ms ease",
        },

        transition:
          "transform 160ms ease, border-color 160ms ease, background-color 160ms ease, color 160ms ease",

        "&:hover": {
          transform: "translateY(-2px)",
          backgroundColor: "rgba(240,235,225,0.08)",
          borderColor: "rgba(201,168,108,0.85)",
          color: "#F0EBE1",
        },
        "&:hover:after": { transform: "scaleX(1)" },
        "&:active": { transform: "translateY(1px)" },
      }}
    >
      {label}
    </Button>
  );
}
