"use client";
import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import VendorPopup from "./VendorPopup";
import { SubmissionData } from "./TableData";

interface SubmissionTableProps {
  data: SubmissionData[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ data }) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof SubmissionData>("vendorName");

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedVendor, setSelectedVendor] = useState<SubmissionData | null>(
    null
  );

  const handleClickOpen = (vendorData: SubmissionData) => {
    setSelectedVendor(vendorData);
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
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table className="overflow-hidden">
          <TableHead sx={{ backgroundColor: "#F1F5FA" }} className="text-nowrap">
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
          <TableBody className="text-nowrap">
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
                  onClick={() => handleClickOpen(row)}
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
        vendorData={selectedVendor}
      />
    </Box>
  );
};

export default SubmissionTable;
