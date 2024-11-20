import { TableCell, TableRow } from "@mui/material";
import { SubmissionData } from "../../data/TableData";

interface TableRowDataProps {
  row: SubmissionData;
  onClick: () => void;
}

const TableRowData: React.FC<TableRowDataProps> = ({ row, onClick }) => {
  const fields = [
    { content: row.vendorName, field: "vendorName" },
    { content: row.email, field: "email" },
    { content: row.ownerName, field: "ownerName" },
    { content: row.phoneNumber, field: "phoneNumber" },
    { content: row.city, field: "city" },
    { content: row.panCard, field: "panCard" },
    { content: row.aadharCard, field: "aadharCard" },
  ];

  return (
    <TableRow
      sx={{ borderBottom: "1px solid #6C849D2E", whiteSpace: "nowrap" }}
      onClick={onClick}
    >
      {fields.map(({ content, field }) => (
        <TableCell
          key={field}
          sx={{
            color: field === "vendorName" ? "#4838B0" : "#2F4256",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: field === "vendorName" ? "600" : "500",
            lineHeight: "17.71px",
            cursor: field === "vendorName" ? "pointer" : "default",
          }}
        >
          {content}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowData;
