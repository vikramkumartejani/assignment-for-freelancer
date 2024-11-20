import React from "react";
import { Box, Button } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface ThemeToggleButtonProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 10,
        right: 10,
      }}
    >
      <Button
        variant="contained"
        onClick={toggleDarkMode}
        className="max-w-[40px] w-full min-w-[40px] rounded-full"
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
    </Box>
  );
};

export default ThemeToggleButton;
