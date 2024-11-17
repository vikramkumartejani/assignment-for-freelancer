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
  const theme = useTheme();  

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { text: "Forms", image: "/assets/form.svg", link: "/", id: 0 },
    { text: "Reports", image: "/assets/reports.svg", link: "/report", id: 1 },
    { text: "Forms", image: "/assets/no-active-form.svg", link: "/", id: 2 },
    {
      text: "Settings",
      image: "/assets/setting.svg",
      link: "/setting",
      id: 3,
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
        height: "92%",
        backgroundColor: theme.palette.background.default,  
        color: theme.palette.text.primary,  
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
                    : theme.palette.text.secondary,  
                backgroundColor:
                  selectedIndex === index
                    ? theme.palette.action.hover
                    : "transparent",
                padding: "8px 20px",
                borderRadius: 1,
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": { backgroundColor: theme.palette.action.hover }, 
              }}
              component="a"
            >
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    color:
                      selectedIndex === index
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary, 
                    minWidth: "28px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`${item.text} icon`}
                    width={20} 
                    height={20}  
                  />
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: selectedIndex === index ? "bold" : "normal",
                    color:
                      selectedIndex === index
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,  
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
          borderTop: `1px solid ${theme.palette.divider}`, 
          display: "flex",
          alignItems: "center",
          color: theme.palette.text.primary,  
          gap: "12px",
          padding: "8px 24px",
          borderRadius: 1,
          cursor: "pointer",
          fontWeight: "600",
          "&:hover": { backgroundColor: theme.palette.action.hover }, 
        }}
      >
        <Image src="/assets/bin.svg" alt="bin" width={11.67} height={15} />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "23.8px",
            color: theme.palette.secondary.main, 
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
