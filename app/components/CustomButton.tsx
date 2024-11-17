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
  const boxShadowStyle = shadow
    ? {}  
    : {
        boxShadow: "none !important",  
        "&:hover": {
          backgroundColor: "#D44A2A",
          boxShadow: "none !important", 
        },
        "&:focus": {
          boxShadow: "none !important",  
        },
        "&:active": {
          boxShadow: "none !important", 
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
        ...boxShadowStyle,  
        ...sx,  
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
