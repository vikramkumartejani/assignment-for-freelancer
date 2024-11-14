import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogContent, DialogActions } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorName: string;
}

const VendorPopup: React.FC<VendorPopupProps> = ({
  open,
  onClose,
  vendorName,
}) => {
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        className="mt-[70px]"
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {vendorName}
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent style={{ padding: "16px 24px" }}>
          <List sx={{ pt: 2 }}>
            <ListItemButton>
              <ListItemText
                primary="Vendor Information"
                secondary="Example information here"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText
                primary="Key Contacts and Details"
                secondary="Secondary details here"
              />
            </ListItemButton>
          </List>
        </DialogContent>

        <DialogActions style={{ padding: "16px" }}>
          <Button
            onClick={onClose}
            variant="contained"
            color="primary"
            size="small"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default VendorPopup;