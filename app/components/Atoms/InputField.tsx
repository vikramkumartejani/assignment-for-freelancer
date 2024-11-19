import { TextField } from "@mui/material";

interface InputAtomProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputAtomProps> = ({ label, placeholder, type = "text" }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    fullWidth
    variant="outlined"
    sx={{
      marginTop: "12px",
      borderRadius: "8px",
      "& .MuiOutlinedInput-root": {
        borderColor: "#6C849D52",
      },
    }}
  />
);

export default InputField;
