import { Box, CssBaseline, Drawer } from "@mui/material";
import Sidebar from "../components/sidebar/index";
import DashboardHeader from "../components/dashboard-header/index";

interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <CssBaseline />

      {/* Header */}
      <DashboardHeader />

      {/* Body Section (Sidebar + Content) */}
      <Box sx={{ display: "flex", flex: 1, pt: 7, }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              mt: 5.5,
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
            backgroundColor: "white",
            width: "100%",
            padding:'16px'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
