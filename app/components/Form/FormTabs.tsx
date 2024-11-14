"use client";
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TableSortLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { TransitionProps } from "@mui/material/transitions";
import VendorPopup from "./VendorPopup";

interface SubmissionData {
  vendorName: string;
  email: string;
  ownerName: string;
  phoneNumber: string;
  city: string;
  panCard: string;
  aadharCard: string;
}

const submissionData: SubmissionData[] = [
  {
    vendorName: "dMACQ Software",
    email: "info@dmacq.com",
    ownerName: "SRIKANT KRISHNAN",
    phoneNumber: "+91 9999102950",
    city: "Mumbai",
    panCard: "GHFPP098GF",
    aadharCard: "9853 2565 4569",
  },
  {
    vendorName: "XYZ Corporation",
    email: "xyzcorporation@corp.in",
    ownerName: "Nilesh Bhosale",
    phoneNumber: "+91 9999102950",
    city: "Bangalore",
    panCard: "Passport",
    aadharCard: "9853 2565 4569",
  },
  {
    vendorName: "123 Industries",
    email: "Industries@itr.in",
    ownerName: "Nayan Parab",
    phoneNumber: "+91 9999102950",
    city: "Delhi",
    panCard: "ABCD1234",
    aadharCard: "C4567-09876-12345",
  },
  {
    vendorName: "123 Industries",
    email: "support@product.io",
    ownerName: "Kavita Patel",
    phoneNumber: "+91 9999102950",
    city: "Kolkata",
    panCard: "ZXCV5678",
    aadharCard: "C4567-09876-12345",
  },
  {
    vendorName: "Tech Solutions Ltd.",
    email: "sales@enterprise.biz",
    ownerName: "Rahul Singh",
    phoneNumber: "+91 9999102950",
    city: "Hyderabad",
    panCard: "Library Card",
    aadharCard: "9853 2565 4569",
  },
  {
    vendorName: "Global Innovations",
    email: "contact@startup.co",
    ownerName: "Pooja Shah",
    phoneNumber: "+91 9999102950",
    city: "Pune",
    panCard: "QWERTY123",
    aadharCard: "123-45-6789",
  },
  {
    vendorName: "Sunset Enterprises",
    email: "partnerships@tech.org",
    ownerName: "Meera Joshi",
    phoneNumber: "+91 9999102950",
    city: "Jaipur",
    panCard: "ASDFG678",
    aadharCard: "78901234",
  },
  {
    vendorName: "Bright Ideas Inc.",
    email: "clients@consulting.info",
    ownerName: "Arjun Gupta",
    phoneNumber: "+91 9999102950",
    city: "Surat",
    panCard: "Employee ID",
    aadharCard: "78901234",
  },
];

interface SubmissionTableProps {
  data: SubmissionData[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ data }) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof SubmissionData>("vendorName");

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedVendorName, setSelectedVendorName] = useState<string>("");

  const handleClickOpen = (vendorName: string) => {
    setSelectedVendorName(vendorName);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleRequestSort = (property: keyof SubmissionData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (
    array: SubmissionData[],
    comparator: (a: SubmissionData, b: SubmissionData) => number
  ) => {
    const stabilizedArray = array.map(
      (el, index) => [el, index] as [SubmissionData, number]
    );
    stabilizedArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
  };

  const comparator = (a: SubmissionData, b: SubmissionData) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  return (
    <Box sx={{ overflowX: "auto", display: "none" }}>
      <TableContainer component={Paper}>
        <Table className="overflow-hidden">
          <TableHead sx={{ backgroundColor: "#F1F5FA" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" }, // Responsive font size
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                <TableSortLabel
                  active={orderBy === "vendorName"}
                  direction={orderBy === "vendorName" ? order : "asc"}
                  onClick={() => handleRequestSort("vendorName")}
                >
                  Vendor Name
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                <TableSortLabel
                  active={orderBy === "email"}
                  direction={orderBy === "email" ? order : "asc"}
                  onClick={() => handleRequestSort("email")}
                >
                  Email ID
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                <TableSortLabel
                  active={orderBy === "ownerName"}
                  direction={orderBy === "ownerName" ? order : "asc"}
                  onClick={() => handleRequestSort("ownerName")}
                >
                  Name of Owner
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                Phone Number
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                City
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                Pan Card
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 600,
                  lineHeight: "17.71px",
                  color: "#40566D",
                }}
              >
                Aadhar Card
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(data, comparator).map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    color: "#4838B0",
                    fontSize: { xs: "12px", sm: "14px" },
                    fontWeight: "600",
                    lineHeight: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClickOpen(row.vendorName)}
                >
                  {row.vendorName}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.ownerName}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.phoneNumber}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.city}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.panCard}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "500",
                    lineHeight: "17.71px",
                  }}
                >
                  {row.aadharCard}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <VendorPopup
        open={openDialog}
        onClose={handleClose}
        vendorName={selectedVendorName}
      />
    </Box>
  );
};

interface TabContentProps {
  data: SubmissionData[];
}

const TabContent: React.FC<TabContentProps> = ({ data }) => (
  <Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      mb={3}
      mt={3}
      sx={{ gap: "12px", flexWrap: "wrap" }}
    >
      <TextField
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{
          width: { xs: '100%', sm: '100%', md: '309px' },
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: "36px",
            padding: "8px 12px",
            fontFamily: "Noto Sans",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "#3D4B5C",
          },
        }}
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1, color: "gray" }} />,
        }}
      />
      <Box sx={{display:'flex', alignItems:'center', gap:'12px', flexWrap:"wrap"}}>
        <Button
          variant="outlined"
          startIcon={<FilterAltOutlinedIcon />}
          className="sm:w-fit w-full"
          sx={{
            borderColor: "#6C849D2E",
            width:'100%',
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Filter
        </Button>

        <Button
          variant="outlined"
          startIcon={<DateRangeOutlinedIcon />}
          className="sm:w-fit w-full"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Select Date Range
        </Button>

        <Button
          variant="outlined"
          startIcon={<IosShareOutlinedIcon />}
          className="sm:w-fit w-full"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Export
        </Button>

        <Button
          variant="outlined"
          startIcon={<SettingsOutlinedIcon />}
          className="sm:w-fit w-full"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Customize
        </Button>
      </Box>
    </Box>
    <SubmissionTable data={data} />
  </Box>
);

const FormTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px", overflowX: "auto" }}>
     <Tabs
  value={activeTab}
  onChange={handleChange}
  aria-label="submission tabs"
  sx={{
    color: "#58728D",
    overflowX: "auto",
    borderBottom: "1px solid #167B592E",
    "& .MuiTabs-flexContainer": {
      flexWrap: { xs: "wrap", sm: "nowrap" }, // wrap tabs on small screens
      justifyContent: { xs: "space-between", sm: "flex-start" }, // ensure space on mobile
    },
    "& .MuiTab-root": {
      textTransform: "none",
      fontWeight: "500",
      fontSize: { xs: "12px", sm: "14px" }, // reduce font size for small screens
      padding: { xs: "6px 8px", sm: "8px 16px" }, // adjust padding for mobile
      minWidth: { xs: "auto", sm: "120px" },
      whiteSpace: "nowrap",
      borderBottom: "2px solid transparent",
      "&.Mui-selected": {
        borderBottomColor: "#5D4AD4",
        fontWeight: "700",
      },
    },
    "& .MuiTabs-indicator": {
      display: "none", // hide the indicator for a cleaner design
    },
  }}
>
  <Tab label="Pending Submission" />
  <Tab label="Dispute Submission" />
  <Tab label="Rejected Submission" />
  <Tab label="Approved Submission" />
</Tabs>


      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <TabContent data={submissionData} />}
        {activeTab === 1 && <TabContent data={submissionData} />}
        {activeTab === 2 && <TabContent data={submissionData} />}
        {activeTab === 3 && <TabContent data={submissionData} />}
      </Box>
    </Box>
  );
};

export default FormTabs;
