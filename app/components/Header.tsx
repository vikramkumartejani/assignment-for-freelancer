"use client";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#192839", zIndex: 1100 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "10px" : "8px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/assets/logo.svg" alt="Logo" width={110} height={28} />
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            height: "40px",
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#243547",
            padding: "12px",
            width: isMobile ? "200px" : "400px",
            borderRadius: "8px 6px",
            marginTop: isMobile ? "0" : "0",
          }}
        >
          <Image
            src="/assets/search.svg"
            alt="search"
            width={23}
            height={19}
            className="mt-0.5"
          />
          <InputBase
            placeholder="Quick Search"
            sx={{
              fontSize: "15px",
              width: "300px",
              ml: 1,
              color: "#ffffff",
              "&::placeholder": {
                color: "#FFFFFF80",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          />
          <Typography
            variant="caption"
            className="text-nowrap"
            sx={{
              color: "#FFFFFF80",
              fontSize: "14px",
              fontWeight: "400",
              ml: 2,
            }}
          >
            Ctrl + K
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box>
            <Image
              src="/assets/profile.svg"
              alt="Logo"
              width={45}
              height={40}
            />
          </Box>
          {isMobile && (
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: "#fff",
                display: isMobile ? "block" : "none",
                marginTop: "-3px",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
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
            padding: "10px 16px",
            position: "absolute",
            zIndex: 1400,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          {/* Search */}
          <Box
            sx={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#243547",
              padding: "12px",
              width: "100%",
              borderRadius: "8px 6px",
            }}
          >
            <Image
              src="/assets/search.svg"
              alt="search"
              width={23}
              height={19}
              className="mt-0.5"
            />
            <InputBase
              placeholder="Quick Search"
              sx={{
                fontSize: "15px",
                width: "300px",
                ml: 1,
                color: "#ffffff",
                "&::placeholder": {
                  color: "#FFFFFF80",
                  fontSize: "14px",
                  fontWeight: "500",
                },
              }}
            />
            <Typography
              variant="caption"
              className="text-nowrap"
              sx={{
                color: "#FFFFFF80",
                fontSize: "14px",
                fontWeight: "400",
                ml: 2,
              }}
            >
              Ctrl + K
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
