import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, Box, Button } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import QueryInput from "../Molecule/QueryInput";
import TypographyAtom from "../Atoms/TypographyAtom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<unknown> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface VendorPopupProps {
  open: boolean;
  handleClose: () => void;
  handleRaiseDispute: () => void;
}

const VendorPopup: React.FC<VendorPopupProps> = ({ open, handleClose, handleRaiseDispute }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          width: "588px",
          right: 0,
          left: "auto",
          top: 0,
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          bottom: 0,
          height: "100%",
          position: "absolute",
        },
      }}
    >
      <Box sx={{ position: "relative", borderBottom: "1px solid #6C849D2E", height: "56px" }}>
        <Box sx={{ padding: "0px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <TypographyAtom text="Raise a Dispute" color="#243547" />
          <Button autoFocus color="inherit" onClick={handleClose}>
            <img src="/assets/close.svg" alt="close" />
          </Button>
        </Box>
      </Box>

      <DialogContent sx={{ padding: { xs: "14px 12px", sm: "14px 20px", md: "16px 24px" } }}>
        <TypographyAtom text="Add one or more issues for this submission to address specific problems" variant="body1" />
        <QueryInput />
        <Button
          variant="outlined"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "8px",
            border: "1px dashed #607d8b",
            borderColor: "#607d8b",
            color: "#607d8b",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "13px",
            "&:hover": {
              borderColor: "#2f5292",
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          Add New Query
        </Button>
      </DialogContent>

      <DialogActions sx={{ backgroundColor: "#F1F5FA", borderTop: "1px solid #6C849D2E", padding: "14px 24px" }}>
        <Button
          onClick={handleClose}
          sx={{
            padding: "0px 16px",
            height: "40px",
            color: "#4838B0",
            border: "2px solid #5D4AD43D",
            borderRadius: "8px",
            background: "white",
          }}
        >
          Close
        </Button>
        <Button
          onClick={handleRaiseDispute}
          sx={{
            padding: "0px 16px",
            height: "40px",
            color: "#FFAC70",
            backgroundColor: "#E9690C2E",
          }}
        >
          Raise Dispute
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VendorPopup;
