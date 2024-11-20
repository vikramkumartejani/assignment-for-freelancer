import { Box, TextField } from "@mui/material";
import TypographyAtom from "@/src/components/TypographyAtom";

const QueryInput: React.FC = () => (
  <Box sx={{ mt: 2, maxWidth: "100%" }}>
    <TypographyAtom
      text="Query Subject"
      sx={{
        color: "#40566D",
        fontWeight: "500",
        fontSize: "13px",
        mb: 1,
      }}
    />
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Add Subject (ex. Missing Adhar card, Address Proof)"
      sx={{
        height: "43px",
        "& .MuiOutlinedInput-root": {
          height: "100%",
        },
        "& .MuiInputBase-input": {
          fontSize: "14px",
          color: "#505F77",
          lineHeight: "43px",
        },
        mb: 2,
      }}
    />

    <TypographyAtom
      text="Query Description"
      sx={{
        color: "#40566D",
        fontWeight: "500",
        fontSize: "13px",
        mb: 1,
      }}
    />
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Add Query"
      multiline
      rows={4}
      sx={{
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          padding: "8px 12px",
        },
        "& .MuiInputBase-input": {
          fontSize: "14px",
          color: "#505F77",
        },
      }}
    />
  </Box>
);

export default QueryInput;
