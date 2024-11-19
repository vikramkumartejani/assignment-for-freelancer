import { Box } from "@mui/material";
import TypographyAtom from "../Atoms/TypographyAtom";
import InputField from "../Atoms/InputField";

const QueryInput: React.FC = () => (
  <Box>
    <TypographyAtom text="Query Subject" color="#40566D" />
    <InputField label="Add Subject" placeholder="Add Subject (ex. Missing Adhar card, Address Proof)" />
    <TypographyAtom text="Query Description" color="#40566D" />
    <InputField label="Add Query" placeholder="Add Query" type="textarea" />
  </Box>
);

export default QueryInput;
