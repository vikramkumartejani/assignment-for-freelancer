import { AppBar, Box, IconButton, Toolbar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DrawerMenu from "./DrawerMenu";

const DashboardHeader: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      position="fixed"
      sx={{ height: "48px", backgroundColor: "#192839", zIndex: 1300 }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "0 24px 0 12px",
          justifyContent: "space-between",
          height: "100% !important",
          alignItems: "center",
        }}
      >
        <Logo />

        {!isMobile && <SearchBar placeholder="Quick Search" />}

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            alt="Profile"
            src="/assets/profile.svg"
            sx={{ width: 32, height: 32 }}
          />

          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: "#fff", p: 0 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default DashboardHeader;
