import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#192839", zIndex: 1300 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src="/assets/logo.svg" alt="Logo" width={110} height={28} />

        {/* Search Bar */}
        <Box
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#243547",
            padding: "12px",
            width: "400px",
            borderRadius: "8px 6px",
          }}
        >
          <Image
            src="/assets/search.svg"
            alt="search"
            width={23}
            height={19}
            className="mt-0.5"
          />
          <InputBase
            placeholder="Quick Search"
            sx={{
              fontSize: "15px",
              width: "100%",
              ml: 1,
              color: "#ffffff",
              "&::placeholder": {
                color: "#FFFFFF80",
                fontSize: "14px",
                fontWeight: "500",
              },
            }}
          />
          <Typography
            variant="caption"
            className="text-nowrap"
            sx={{
              color: "#FFFFFF80",
              fontSize: "14px",
              fontWeight: "400",
              ml: 2,
            }}
          >
            Ctrl + K
          </Typography>
        </Box>

        {/* Profile Icon */}
        <Image src="/assets/profile.svg" alt="Logo" width={45} height={40} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
