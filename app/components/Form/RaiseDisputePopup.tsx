import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  DialogActions,
  DialogContent,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface VendorPopupProps {
  open: boolean;
  handleClose: () => void;
  handleRaiseDispute: () => void;
}

const VendorPopup: React.FC<VendorPopupProps> = ({
  open,
  handleClose,
  handleRaiseDispute,
}) => {
  return (
    <React.Fragment>
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
        {/* Header */}
        <Box
          sx={{
            position: "relative",
            borderBottom: "1px solid #6C849D2E",
            height: "56px",
          }}
        >
          <Box
            sx={{
              padding: "0px 8px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                ml: 2,
                flex: 1,
                color: "#243547",
                fontSize: "20px",
                fontWeight: "800",
              }}
              variant="h6"
              component="div"
            >
              Raise a Dispute
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <Image
                src="/assets/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </Button>
          </Box>
        </Box>

        {/* Inputs */}
        <DialogContent
          sx={{
            padding: {
              xs: "14px 12px",
              sm: "14px 20px",
              md: "16px 24px",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "13px", fontWeight: "500", color: "#2F4256" }}
            gutterBottom
          >
            Add one or more issues for this submission to address specific
            problems
          </Typography>

          <Box
            sx={{
              marginTop: "12px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: "13px", fontWeight: "500", color: "#40566D" }}
            >
              Query Subject
            </Typography>
            <input
              type="text"
              placeholder="Add Subject (ex. Missing Adhar card, Address Proof)"
              className="placeholder:text-[#90A5BB] text-[14px] mt-2 border border-[#6C849D52] w-full h-[43px] rounded-lg outline-none px-3"
            />

            <Typography
              variant="h6"
              sx={{
                marginTop: "16px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#40566D",
              }}
            >
              Query Description
            </Typography>
            <textarea
              placeholder="Add Query"
              className="resize-none py-2 h-[95px] placeholder:text-[#90A5BB] text-[14px] mt-2 border border-[#6C849D52] w-full rounded-lg outline-none px-3"
            />

            <Button
              variant="outlined"
              fullWidth
              sx={{
                marginTop: 2,
                padding: "8px",
                borderColor: "#607d8b",
                color: "#607d8b",
                fontSize: "13px",
                border: "1px dashed #607d8b",
                textTransform: "none",
                fontWeight: "500",
                borderRadius: 2,
                "&:hover": {
                  borderColor: "#2f5292",
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Add New Query
            </Button>
          </Box>
        </DialogContent>

        <DialogActions
          style={{
            backgroundColor: "#F1F5FA",
            borderTop: "1px solid #6C849D2E",
          }}
          sx={{
            padding: {
              xs: "14px 12px",
              sm: "14px 20px",
              md: "16px 24px",
            },
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              textTransform: "capitalize",
              padding: "0px 16px",
              height: "40px",
              border: "2px solid #5D4AD43D",
              color: "#4838B0",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "8px",
            }}
          >
            Close
          </Button>
          <Button
            onClick={handleRaiseDispute}
            sx={{
              textTransform: "capitalize",
              height: "40px",
              backgroundColor: "#E9690C2E",
              color: "#FFAC70",
              fontSize: "14px",
              fontWeight: "600",
              padding: "0px 16px",
            }}
          >
            Raise Dispute
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default VendorPopup;
