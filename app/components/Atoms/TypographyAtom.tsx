import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TypographyAtomProps extends TypographyProps {
  text: string;
}

const TypographyAtom: React.FC<TypographyAtomProps> = ({
  text,
  sx,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        fontSize: "16px",
        color: "inherit",
        fontWeight: 400,
        lineHeight: "1.5",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default TypographyAtom;
