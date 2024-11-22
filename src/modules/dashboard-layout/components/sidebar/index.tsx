import { Box, List } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material";
import Link from "next/link";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarBin from "./SidebarBin";

interface MenuItem {
  text: string;
  image: string;
  selectedImage: string; // Add selectedImage
  link: string;
  id: number;
}

const Sidebar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const theme = useTheme();

  const handleListItemClick = (index: number): void => {
    setSelectedIndex(index);
  };

  const menuItems: MenuItem[] = [
    { text: "Forms", image: "/assets/no-active-form.svg", selectedImage: "/assets/form.svg", link: "/", id: 0 },
    { text: "Reports", image: "/assets/reports.svg", selectedImage: "/assets/active-barchart.svg", link: "/report", id: 1 },
    { text: "Forms", image: "/assets/no-active-form.svg", selectedImage: "/assets/form.svg", link: "/", id: 2 },
    { text: "Settings", image: "/assets/setting.svg", selectedImage: "/assets/active-settings.svg", link: "/setting", id: 3 },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "96%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: "16px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Link href={item.link} key={item.id} passHref legacyBehavior>
            <SidebarMenuItem
              text={item.text}
              image={item.image}
              selectedImage={item.selectedImage} // Pass selectedImage
              selected={selectedIndex === item.id}
              onClick={() => handleListItemClick(item.id)}
            />
          </Link>
        ))}
      </List>

      {/* BIN */}
      <SidebarBin />
    </Box>
  );
};

export default Sidebar;
