import React from "react";
import { Box } from "@mui/material";
import SubmissionTable from "./SubmissionTable";  
import { SubmissionData } from "@/src/modules/form/components/data/TableData";
import ActionButtons from "./ActionButtons";

interface TabContentProps {
  data: SubmissionData[];
}

const TabContent: React.FC<TabContentProps> = ({ data }) => {
  return (
    <Box>
      <ActionButtons />  
      <SubmissionTable data={data} />  
    </Box>
  );
};

export default TabContent;
