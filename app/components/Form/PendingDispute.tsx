import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  IconButton,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

interface PendingDisputProps {
  isVisible: boolean;
  onClose: () => void;
}

const PendingDisput: React.FC<PendingDisputProps> = ({
  isVisible,
  onClose,
}) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Close drawer when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
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
        right: "40px",
        width: "100%",
        maxWidth: { xs: "280px", sm: "371px" },
        backgroundColor: "#F8FAFC",
        border: "1px solid #E0E0E0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-out",
        zIndex: "1",
        display: isVisible ? "block" : "none",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <Typography
          variant="h6"
          gutterBottom
          paddingX={"16px"}
          paddingY={"8px"}
          color="#243547"
          fontSize={"13px"}
          borderBottom={"1px solid #6C849D2E"}
          bgcolor={"#F1F5FA"}
          margin={0}
        >
          Pending Dispute (5)
        </Typography>

        <Box sx={{ padding: "16px", overflow: "auto", height: "100%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
            elevation={0}
            sx={{
              padding: "0px",
              borderBottom: "1px solid #6C849D2E",
              minHeight: "auto",
              "&.Mui-expanded": {
                minHeight: "auto",
                marginTop: 0,
                marginBottom: "12px",
              },
            }}
          >
            <AccordionSummary
              sx={{
                margin: "0 !important",
                padding: "12px",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #6C849D2E",
                minHeight: "auto",
                "&.Mui-expanded": { minHeight: "auto" },
                "& .MuiAccordionSummary-content": { margin: "0" },
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "#58728D", width: "16px", height: "16px" }}
                />
              }
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  ml: "8px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="#40566D"
                  fontSize="12px"
                  fontWeight="500"
                >
                  1. Company Detail with Proof
                </Typography>
              </Box>
              <CheckCircleOutlineIcon
                sx={{ color: "#58728D", width: "17px", height: "17px" }}
              />
            </AccordionSummary>

            <AccordionDetails sx={{ padding: "0" }}>
              <Box sx={{ padding: "16px" }}>
                <List
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                  }}
                >
                  {[
                    {
                      avatarSrc: "/assets/profile-img1.png",
                      primary: "Dentsu • 2m ago",
                      secondary:
                        "Missing required documentation or Incorrect Company Detail, Attach address proof",
                    },
                    {
                      avatarSrc: "/assets/profile-img2.png",
                      primary: "Dmacq.com • Just Now",
                      secondary:
                        "Hi, I attached both files that you mentioned. Please check.",
                      hasAttachment: true,
                      attachmentName: "Adharcard.pdf",
                    },
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      alignItems="flex-start"
                      sx={{ gap: "8px", padding: "0" }}
                    >
                      <ListItemAvatar
                        sx={{ width: "24px", height: "24px", minWidth: "24px" }}
                      >
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          src={item.avatarSrc}
                        />
                      </ListItemAvatar>
                      <Box display={"flex"} flexDirection={"column"}>
                        <ListItemText
                          primary={item.primary}
                          secondary={item.secondary}
                          primaryTypographyProps={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#768EA7",
                          }}
                          secondaryTypographyProps={{
                            fontSize: "12px",
                            color: "#192839",
                            fontWeight: "400",
                            paddingTop: "8px",
                          }}
                        />
                        {item.hasAttachment && (
                          <Paper
                            variant="outlined"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              padding: "4px 8px",
                              marginTop: "8px",
                              background: "#F1F5FA",
                              width: "fit-content",
                            }}
                          >
                            <img src="/assets/file-icon.svg" alt="attachment" />
                            <Typography
                              sx={{
                                ml: "8px",
                                color: "#243547",
                                fontSize: "12px",
                              }}
                            >
                              {item.attachmentName}
                            </Typography>
                            <IconButton size="small" sx={{ ml: "8px" }}>
                              <CloseIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                          </Paper>
                        )}
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box sx={{ padding: "12px" }}>
                <Box display="flex" alignItems="center" sx={{ padding: "0" }}>
                  <IconButton sx={{ color: "#4838B0", padding: "4px" }}>
                    <AttachFileIcon sx={{ fontSize: "21px" }} />
                  </IconButton>
                  <Box
                    display="flex"
                    alignItems="center"
                    border="1px solid #6C849D2E"
                    borderRadius="8px"
                    padding="4px 8px"
                    sx={{ backgroundColor: "#F9FBFC", width: "100%" }}
                  >
                    <TextField
                      placeholder="Type Your Reply..."
                      variant="standard"
                      fullWidth
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: "12px", color: "#90A5BB" },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton sx={{ color: "#40566D", padding: 0 }}>
                              <SendIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ marginLeft: "8px", backgroundColor: "#F8FAFC" }}
                    />
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "#90A5BB",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  Press Enter to send, Shift + Enter for new line
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 2}`}
              onChange={handleAccordionChange(`panel${index + 2}`)}
              elevation={0}
              sx={{
                padding: "0px",
                borderBottom: "1px solid #6C849D2E",
                minHeight: "auto",
                "&.Mui-expanded": {
                  minHeight: "auto",
                  marginTop: 0,
                  marginBottom: "12px",
                },
              }}
            >
              <AccordionSummary
                sx={{
                  margin: "0 !important",
                  padding: "12px",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #6C849D2E",
                  minHeight: "auto",
                  "&.Mui-expanded": { minHeight: "auto" },
                  "& .MuiAccordionSummary-content": { margin: "0" },
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "#58728D", width: "16px", height: "16px" }}
                  />
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    ml: "8px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="#40566D"
                    fontSize="12px"
                    fontWeight="500"
                  >
                    {item.title}
                  </Typography>
                </Box>
                <CheckCircleOutlineIcon
                  sx={{ color: "#58728D", width: "17px", height: "17px" }}
                />
              </AccordionSummary>

              <AccordionDetails sx={{ padding: "12px" }}>
                <Typography variant="body2" color="#6C849D" fontSize="12px">
                  {item.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PendingDisput;

const accordionItems = [
  {
    title: "2. Please Provide GST Number With Document",
    details:
      "Please attach a valid GST number along with supporting documentation to proceed with verification.",
  },
  {
    title: "3. Please Provide Address Proof",
    details:
      "Submit an address proof document, such as utility bill, lease agreement, or bank statement.",
  },
  {
    title: "4. Please Provide Proper Account Information",
    details:
      "Ensure all account information provided is correct and up-to-date for processing.",
  },
  {
    title: "5. Missing Document",
    details:
      "A required document is missing from your submission. Please attach the missing document to continue.",
  },
];
