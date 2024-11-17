import { Box, CssBaseline, Drawer } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* Body Section (Sidebar + Content) */}
      <Box sx={{ display: "flex", flex: 1, pt: 8 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              mt: 8,
            },
            display: { lg: "block", xs: "none" },
          }}
        >
          <Sidebar />
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            width: "100%",
          }}
          style={{ padding: "20px" }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
