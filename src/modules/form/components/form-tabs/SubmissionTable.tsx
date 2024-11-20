import React, { useState, useEffect } from "react";
import { Box, Table, TableBody, TableContainer, Paper } from "@mui/material";
import { SubmissionData } from "@/src/modules/form/components/data/TableData";
import TableHeader from "./table/TableHeader";
import TableRowData from "./table/TableRowData";
import VendorPopup from "../vendor-popup";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
    return null;
  }

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <thead>
            <TableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
          </thead>
          <TableBody>
            {stableSort(data, comparator).map((row, index) => (
              <TableRowData
                key={index}
                row={row}
                onClick={() => handleClickOpen(row)}
              />
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
