import { Box, InputBase, useTheme, SxProps, Theme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TypographyAtom from "@/src/components/TypographyAtom";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#243547",
        padding: "12px",
        borderRadius: "8px 6px",
      }}
    >
      <SearchIcon sx={{ color: "#FFFFFF", fontSize: "24px" }} />

      <InputBase
        placeholder={placeholder}
        sx={
          {
            fontSize: "15px",
            [theme.breakpoints.up("md")]: {
              width: "400px",
            },
            ml: 1,
            color: "#ffffff",
            "&::placeholder": {
              color: "#FFFFFF80",
              fontSize: "14px",
              fontWeight: "500",
            },
          } as SxProps<Theme>
        }
      />

      <TypographyAtom
        text={"Ctrl + K"}
        sx={{
          color: "#FFFFFF80",
          fontSize: "14px",
          fontWeight: "400",
          ml: 2,
          whiteSpace: "nowrap",
        }}
      />
    </Box>
  );
};

export default SearchBar;
