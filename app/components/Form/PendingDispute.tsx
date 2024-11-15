import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface PendingDisputProps {
  isVisible: boolean;
  onClose: () => void; // Callback to close the drawer
}

const PendingDisput: React.FC<PendingDisputProps> = ({
  isVisible,
  onClose,
}) => {
  // Create a reference for the drawer
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Effect to handle clicks outside the drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close the drawer if clicked outside
      }
    };

    // Add event listener for outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Box
      ref={drawerRef}
      sx={{
        position: "absolute",
        top: "0",
        right: "40px", // Positioned to the left of the sidebar
        width: "371px",
        maxWidth: "371px",
        height: "auto",
        backgroundColor: "#FFF",
        border: "1px solid #E0E0E0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        transform: isVisible ? "translateX(0)" : "translateX(100%)", // Slide-in effect
        transition: "transform 0.3s ease-out", // Smooth transition
        zIndex: "1",
      }}
    >
      <h4>This is the new box!</h4>
      {/* Add content to the new box */}
    </Box>
  );
};

export default PendingDisput;
