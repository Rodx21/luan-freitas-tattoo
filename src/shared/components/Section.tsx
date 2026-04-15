import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bg?: "default" | "paper";
};

export default function Section({ children, bg = "default" }: Props) {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 10, md: 14 },
        backgroundColor: bg === "paper" ? "background.paper" : "background.default",
      }}
    >
      {children}
    </Box>
  );
}
