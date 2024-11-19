import { AppBar, Box, IconButton, Toolbar, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SearchBar from "../Molecule/SearchBar";
import DrawerMenu from "../Molecule/DrawerMenu";
import { useMediaQuery, useTheme } from "@mui/material";
import Logo from "../Atoms/Logo";

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#192839", zIndex: 1100 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </Box>

        {!isMobile && <SearchBar placeholder="Quick Search" />}

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar
            alt="Profile"
            src="/assets/profile.svg"
            sx={{ width: 45, height: 40 }}
          />

          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: "#fff", p: 0 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </AppBar>
  );
};

export default Header;
