import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, Typography, Box } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import CustomButton from "../CustomButton";

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
            <CustomButton
              autoFocus
              color="inherit"
              onClick={handleClose}
              iconSrc="/assets/close.svg" // Optional icon source
              text="" // Empty text because the icon is the only content
              shadow={false} // No shadow in this case
            />
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
            <CustomButton
              variant="outlined"
              fullWidth
              text="Add New Query"
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
              shadow={true}
            />
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
          <CustomButton
            text="Close"
            sx={{
              padding: "0px 16px",
              height: "40px",
              color: "#4838B0",
              border: "2px solid #5D4AD43D",
              borderRadius: "8px",
              background: "white",
            }}
            shadow={true}
          />
          <CustomButton
            onClick={handleRaiseDispute}
            text="Raise Dispute"
            sx={{
              padding: "0px 16px",
              height: "40px",
              color: "#FFAC70",
              backgroundColor: "#E9690C2E",
            }}
            shadow={true}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default VendorPopup;
