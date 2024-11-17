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
      return order !== 0 ? order : a[1] - b[1];
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

  const renderTableCell = (content: string | React.ReactNode, sx: any) => (
    <TableCell sx={sx}>{content}</TableCell>
  );

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#F1F5FA" }} className="text-nowrap">
            <TableRow sx={{ borderBottom: "1px solid #6C849D2E" }}>
              {[
                "vendorName",
                "email",
                "ownerName",
                "phoneNumber",
                "city",
                "panCard",
                "aadharCard",
              ].map((field) => (
                <TableCell
                  key={field}
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: 600,
                    lineHeight: "17.71px",
                    color: "#40566D",
                    textTransform: "capitalize",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === field}
                    direction={orderBy === field ? order : "asc"}
                    onClick={() =>
                      handleRequestSort(field as keyof SubmissionData)
                    }
                  >
                    {field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="text-nowrap">
            {stableSort(data, comparator).map((row, index) => (
              <TableRow
                key={index}
                sx={{ borderBottom: "1px solid #6C849D2E" }}
                onClick={() => handleClickOpen(row)}
              >
                {[
                  { content: row.vendorName, field: "vendorName" },
                  { content: row.email, field: "email" },
                  { content: row.ownerName, field: "ownerName" },
                  { content: row.phoneNumber, field: "phoneNumber" },
                  { content: row.city, field: "city" },
                  { content: row.panCard, field: "panCard" },
                  { content: row.aadharCard, field: "aadharCard" },
                ].map(({ content, field }) =>
                  renderTableCell(content, {
                    color: field === "vendorName" ? "#4838B0" : "#2F4256",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: field === "vendorName" ? "600" : "500",
                    lineHeight: "17.71px",
                    cursor: field === "vendorName" ? "pointer" : "default",
                  })
                )}
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
