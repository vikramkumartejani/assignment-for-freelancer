import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

interface SidebarMenuItemProps {
  text: string;
  image: string;
  selectedImage: string; 
  selected: boolean;
  onClick: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ text, image, selectedImage, selected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        color: selected ? "primary.main" : "text.secondary",
        backgroundColor: selected ? "#F4F2FF" : "transparent",
        padding: "8px 18px",
        borderRadius: 1,
        cursor: "pointer",
        height: "40px",
        textDecoration: "none",
        "&:hover": { backgroundColor: "#F4F2FF" },
      }}
    >
      <ListItem disablePadding>
        <ListItemIcon sx={{ color: selected ? "primary.main" : "text.secondary", minWidth: "30px" }}>
          <Image 
            src={selected ? selectedImage : image}  
            alt={`${text} icon`} 
            width={20} 
            height={20} 
          />
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: selected ? "bold" : "normal",
            color: selected ? "#5D4AD4" : "#40566D",
            fontSize: "14px",
          }}
        />
      </ListItem>
    </Box>
  );
};

export default SidebarMenuItem;
