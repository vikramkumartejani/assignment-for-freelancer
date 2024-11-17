"use client";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme(); // Access the theme object

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { text: "Forms", image: "/assets/form.svg", link: "/", id: 0 },
    { text: "Reports", image: "/assets/reports.svg", link: "/reports", id: 1 },
    { text: "Forms", image: "/assets/no-active-form.svg", link: "/", id: 2 },
    {
      text: "Settings",
      image: "/assets/setting.svg",
      link: "/settings",
      id: 3,
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "92%",
        backgroundColor: theme.palette.background.default, // Use background color from theme
        color: theme.palette.text.primary, // Use text primary color from theme
        padding: "16px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Main Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item, index) => (
          <Link href={item.link} key={item.id} passHref legacyBehavior>
            <Box
              onClick={() => handleListItemClick(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                color:
                  selectedIndex === index
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary, // Use theme colors
                backgroundColor:
                  selectedIndex === index
                    ? theme.palette.action.hover
                    : "transparent",
                padding: "8px 20px",
                borderRadius: 1,
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": { backgroundColor: theme.palette.action.hover }, // Use theme hover color
              }}
              component="a"
            >
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary, // Use theme colors
                    minWidth: "28px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.text} icon`}
                    width={20} // Set width to your preference
                    height={20} // Set height to your preference
                  />
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: selectedIndex === index ? "bold" : "normal",
                    color:
                      selectedIndex === index
                        ? theme.palette.primary.main
                        : theme.palette.text.primary, // Use theme colors
                    fontSize: "14px",
                  }}
                />
              </ListItem>
            </Box>
          </Link>
        ))}
      </List>

      {/* BIN */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`, // Use theme divider color
          display: "flex",
          alignItems: "center",
          color: theme.palette.text.primary, // Use text primary color from theme
          gap: "12px",
          padding: "8px 24px",
          borderRadius: 1,
          cursor: "pointer",
          fontWeight: "600",
          "&:hover": { backgroundColor: theme.palette.action.hover }, // Use theme hover color
        }}
      >
        <Image src="/assets/bin.svg" alt="bin" width={11.67} height={15} />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "23.8px",
            color: theme.palette.secondary.main, // Use secondary color from theme
            marginTop: "1px",
          }}
        >
          Bin
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
