import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

// Define the transition for bottom-to-top animation
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement }, // Ensure children is explicitly typed as ReactElement
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorName: string;
}

const VendorPopup: React.FC<VendorPopupProps> = ({ open, onClose, vendorName }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}  // Use the Transition component for animation
      keepMounted
    >
      <DialogTitle>{vendorName}</DialogTitle>
      <DialogContent>
        {/* Add your detailed content for the vendor here */}
        <p>Details for {vendorName}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VendorPopup;
