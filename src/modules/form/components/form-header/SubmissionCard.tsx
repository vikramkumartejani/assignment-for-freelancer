import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

interface SubmissionCardProps {
  image: string;
  title: string;
  count: number;
}

const SubmissionCard: React.FC<SubmissionCardProps> = ({
  image,
  title,
  count,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        border: `1px solid ${theme.custom.borderColor}`,
        borderRadius: "8px",
        padding: { xs: "10px 20px", sm: "20px 20px" },
        display: "flex",
        alignItems: "center",
        gap: "16px",
        boxShadow:'none !important',
      }}
    >
      <Image
        src={image}
        alt={title.toLowerCase().replace(" ", "-")}
        width={36}
        height={36}
      />
      <Box>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#243547",
            fontSize: { xs: "18px", sm: "20px" },
            fontWeight: 700,
            lineHeight: "28px",
            marginTop:'4px',
          }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubmissionCard;
