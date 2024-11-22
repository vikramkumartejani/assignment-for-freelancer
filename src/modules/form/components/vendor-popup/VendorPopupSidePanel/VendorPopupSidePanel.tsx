import React from "react";
import { Box } from "@mui/material";
import PendingDisput from "./PendingDispute";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

type IconType = "sms" | "preview" | "history" | null;

interface VendorPopupSidePanelProps {
  selectedIcon: IconType;
  handleIconClick: (icon: IconType) => void;
  isBoxVisible: boolean;
  onCloseBox: () => void;
}

const VendorPopupSidePanel: React.FC<VendorPopupSidePanelProps> = ({
  selectedIcon,
  handleIconClick,
  isBoxVisible,
  onCloseBox,
}) => {
  const iconStyles = (selected: boolean) => ({
    color: selected ? "#5D4AD4" : "#58728D",
  });

  const handleIconClickWrapper = (icon: IconType) => {
    if (selectedIcon === icon) {
      return;
    }
    handleIconClick(icon);
  };

  return (
    <Box
      sx={{
        background: "#F1F5FA",
        border: "none",
        zIndex: "2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Side Panel */}
      <Box sx={{ display: "flex" }}>
        <PendingDisput isVisible={isBoxVisible} onClose={onCloseBox} />
        <Box
          sx={{
            paddingY: "16px",
            height: "100vh",
            width: "40px",
            minWidth: "40px",
            zIndex: "2",
          }}
        >
          {["sms", "preview", "history"].map((iconType) => (
            <Box
              key={iconType}
              sx={{
                padding: "8px",
                marginBottom: "12px",
                cursor: "pointer",
                background:
                  selectedIcon === iconType ? "#EAE7FA" : "transparent",
                borderLeft:
                  selectedIcon === iconType ? "1px solid #5D4AD4" : "none",
              }}
              onClick={() => handleIconClickWrapper(iconType as IconType)}
            >
              {iconType === "sms" && (
                <SmsOutlinedIcon sx={iconStyles(selectedIcon === "sms")} />
              )}
              {iconType === "preview" && (
                <PreviewOutlinedIcon
                  sx={iconStyles(selectedIcon === "preview")}
                />
              )}
              {iconType === "history" && (
                <HistoryOutlinedIcon
                  sx={iconStyles(selectedIcon === "history")}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default VendorPopupSidePanel;
