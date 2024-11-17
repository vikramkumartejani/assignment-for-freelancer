import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import Image from "next/image";

interface CustomButtonProps extends ButtonProps {
  text: string;
  iconSrc?: string;
  iconAlt?: string;
  startIcon?: React.ReactNode;
  shadow: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  iconSrc,
  iconAlt,
  startIcon,
  shadow,
  sx,
  ...props
}) => {
  // Conditional styling based on the shadow prop
  const boxShadowStyle = shadow
    ? {} // If shadow is true, no change needed (default behavior)
    : {
        boxShadow: "none !important", // Forcefully disable shadow
        "&:hover": {
          backgroundColor: "#D44A2A",
          boxShadow: "none !important", // Ensure no hover shadow
        },
        "&:focus": {
          boxShadow: "none !important", // Remove focus shadow
        },
        "&:active": {
          boxShadow: "none !important", // Remove active shadow
        },
      };

  return (
    <MuiButton
      sx={{
        textTransform: "capitalize",
        fontSize: "14px",
        fontWeight: 600,
        padding: "10px 12px",
        borderRadius: "4px",
        ...boxShadowStyle, // Apply shadow styles conditionally
        ...sx, // Allow additional custom styles from the parent
      }}
      {...props}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt || ""}
          width={20}
          height={20}
          className="mr-1 -mt-[1px]"
        />
      )}
      {startIcon && startIcon}
      {text}
    </MuiButton>
  );
};

export default CustomButton;
