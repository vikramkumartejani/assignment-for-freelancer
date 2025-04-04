import { TableCell, TableRow, TableSortLabel } from "@mui/material";
import { SubmissionData } from "../../data/TableData";

interface TableHeaderProps {
  order: "asc" | "desc";
  orderBy: keyof SubmissionData;
  onRequestSort: (property: keyof SubmissionData) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const columns = [
    "vendorName",
    "email",
    "ownerName",
    "phoneNumber",
    "city",
    "panCard",
    "aadharCard",
  ];

  return (
    <TableRow
      sx={{
        borderBottom: "1px solid #6C849D2E",
        backgroundColor: "#F1F5FA",
        whiteSpace: "nowrap",
        padding: "0px !important",
        height:"40px !important"
      }}
    >
      {columns.map((column) => (
        <TableCell
          key={column}
          sx={{
            borderBottom: "1px solid #6C849D2E",
            fontFamily: "Noto Sans",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 600,
             padding: "0px 16px !important",
        height:"40px !important",
            lineHeight: "17.71px",
            color: "#40566D", // Default color for inactive columns
            textTransform: "capitalize",
          }}
        >
          <TableSortLabel
            active={orderBy === column}
            direction={orderBy === column ? order : "asc"}
            onClick={() => onRequestSort(column as keyof SubmissionData)}
            sx={{
              color: orderBy === column ? "#40566D !important" : "#40566D !important", // Ensure text color is white
              "& .MuiTableSortLabel-icon": {
                color: "#40566D !important", // Ensure the sort icon is white
              },
            }}
          >
            {column
              .replace(/([A-Z])/g, " $1")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableHeader;
