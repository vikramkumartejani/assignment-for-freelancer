import TypographyAtom from "@/src/components/TypographyAtom";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const SidebarBin: React.FC = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        gap: "12px",
        padding: "8px 24px",
        borderRadius: 1,
        cursor: "pointer",
        fontWeight: "600",
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <Image src="/assets/bin.svg" alt="bin" width={11.67} height={15} />
      <TypographyAtom
        text="Bin"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "23.8px",
          color: "secondary.main",
          marginTop: "1px",
        }}
      />
    </Box>
  );
};

export default SidebarBin;
