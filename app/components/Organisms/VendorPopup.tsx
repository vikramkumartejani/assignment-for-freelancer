import React, { FC, useState } from "react";
import { Dialog, Box } from "@mui/material";
import { SubmissionData } from "../Data/TableData";
import VendorPopupHeader from "./VendorPopupHeader";
import VendorPopupContent from "./VendorPopupContent";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import VendorPopupSidePanel from "./VendorPopupSidePanel";

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorData: SubmissionData | null;
}

type IconType = "sms" | "preview" | "history" | null;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VendorPopup: FC<VendorPopupProps> = ({ open, onClose, vendorData }) => {
  const [selectedIcon, setSelectedIcon] = useState<IconType>(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);  

  const handleIconClick = (icon: IconType) => {
    setSelectedIcon(icon);
    setIsBoxVisible(icon === "sms"); 
  };

  const onCloseBox = () => {
    setIsBoxVisible(false); 
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      className="mt-[80px]"
    >
      <Box sx={{ overflowX: "hidden", height: "100%" }}>
        <VendorPopupHeader vendorData={vendorData} onClose={onClose} />

        <Box sx={{ display: "flex", position: "relative", height: "100%" }}>
          <VendorPopupContent
            vendorData={vendorData}
            openS={false}
            handleClickOpen={() => {}}
            handleClose={() => {}}
            handleRaiseDispute={() => {}}
          />

          <VendorPopupSidePanel
            selectedIcon={selectedIcon}
            handleIconClick={handleIconClick}
            isBoxVisible={isBoxVisible}  
            onCloseBox={onCloseBox}  
          />
        </Box>
      </Box>
    </Dialog>
  );
};

export default VendorPopup;
