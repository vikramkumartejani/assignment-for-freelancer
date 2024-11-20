import { Box, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Image from "next/image";

interface SidebarMenuItemProps {
  text: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ text, image, selected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        color: selected ? "primary.main" : "text.secondary",
        backgroundColor: selected ? "action.hover" : "transparent",
        padding: "8px 20px",
        borderRadius: 1,
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <ListItem disablePadding>
        <ListItemIcon sx={{ color: selected ? "primary.main" : "text.secondary", minWidth: "28px" }}>
          <Image src={image} alt={`${text} icon`} width={20} height={20} />
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: selected ? "bold" : "normal",
            color: selected ? "primary.main" : "text.primary",
            fontSize: "14px",
          }}
        />
      </ListItem>
    </Box>
  );
};

export default SidebarMenuItem;
