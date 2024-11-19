import { Box, Typography } from "@mui/material";

const sectionStyles = {
  padding: { xs: "6px", sm: "12px" },
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const titleStyles = { fontWeight: "500", fontSize: "13px", color: "#58728D" };
const contentStyles = { color: "#243547", fontWeight: "600", fontSize: "14px" };

interface InfoBoxProps {
  label: string;
  value: React.ReactNode;
}

const cleanValue = (value: React.ReactNode) => {
    if (typeof value === "string") {
      return value.replace(/,+$/, "").trim();   
    }
    return value;
  };
  

const InfoBox: React.FC<InfoBoxProps> = ({ label, value }) => (
  <Box sx={sectionStyles}>
    <Typography sx={titleStyles}>{label}:</Typography>
    <Typography sx={contentStyles}>{cleanValue(value)}</Typography>
  </Box>
);

export default InfoBox;
