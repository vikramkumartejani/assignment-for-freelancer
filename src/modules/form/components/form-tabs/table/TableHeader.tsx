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
      }}
    >
      {columns.map((column) => (
        <TableCell
          key={column}
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
            active={orderBy === column}
            direction={orderBy === column ? order : "asc"}
            onClick={() => onRequestSort(column as keyof SubmissionData)}
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
