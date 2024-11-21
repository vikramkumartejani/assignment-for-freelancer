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
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#243547",
        paddingX: "12px",
        borderRadius: "8px",
      }}
    >
      <SearchIcon sx={{ color: "#FFFFFF", width:'20px', height:'20px' }} />

      <InputBase
        placeholder={placeholder}
        sx={
          {
            fontSize: "14px",
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
