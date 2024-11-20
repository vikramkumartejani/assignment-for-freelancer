import { Box, IconButton, Drawer, List } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "./SearchBar";
import Link from "next/link";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";

interface DrawerMenuProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isDrawerOpen,
  toggleDrawer,
}) => {
  const menuItems = [
    { text: "Forms", image: "/assets/form.svg", link: "/", id: 0 },
    { text: "Reports", image: "/assets/reports.svg", link: "/report", id: 1 },
    { text: "Forms", image: "/assets/no-active-form.svg", link: "/", id: 2 },
    { text: "Settings", image: "/assets/setting.svg", link: "/setting", id: 3 },
  ];

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#192839",
          color: "#fff",
          width: "100%",
          height: "100vh",
          padding: "10px 10px",
          position: "absolute",
          zIndex: 1400,
        },
      }}
    >
      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={toggleDrawer}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          marginTop: "10px",
          width: "100%",
          display: "flex ",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchBar placeholder="Quick Search" />
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Link href={item.link} key={item.id} passHref legacyBehavior>
            <SidebarMenuItem
              text={item.text}
              image={item.image}
              selected={false}
              onClick={() => {}}
            />
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
