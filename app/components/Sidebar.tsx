"use client";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { text: "Forms", image: "/assets/form.svg", link: "/", id: 0 },
    {
      text: "Reports",
      image: "/assets/reports.svg",
      link: "/reports",
      id: 1,
    },
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
        height:'92%',
        backgroundColor: "#F8FAFC",
        color: "#3b3f5c",
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
                color: selectedIndex === index ? "#6c63ff" : "#475569",
                backgroundColor:
                  selectedIndex === index ? "#F4F2FF" : "transparent",
                padding: "8px 20px",
                borderRadius: 1,
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": { backgroundColor: "#f1f5f9" },
              }}
              component="a"
            >
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    color: selectedIndex === index ? "#6c63ff" : "#475569",
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
                    color: selectedIndex === index ? "#5D4AD4" : "#40566D",
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
          borderTop: "1px solid #6C849D17",
          display: "flex",
          alignItems: "center",
          color: "#475569",
          gap: "12px",
          padding: "8px 24px",
          borderRadius: 1,
          cursor: "pointer",
          fontWeight: "600",
          "&:hover": { backgroundColor: "#f1f5f9" },
        }}
      >
        <Image src="/assets/bin.svg" alt="bin" width={11.67} height={15} />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "23.8px",
            color: "#58728D",
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
