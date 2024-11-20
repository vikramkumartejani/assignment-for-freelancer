import React from "react";
import { Box, useTheme } from "@mui/material";
import TypographyAtom from "@/src/components/TypographyAtom";
import SubmissionCard from "./SubmissionCard";

const submissionData = [
  {
    title: "Pending Submissions",
    image: "/assets/pending-submissions.svg",
    count: 25,
  },
  {
    title: "Disputed Submissions",
    image: "/assets/disputed-submissions.svg",
    count: 4,
  },
  {
    title: "Rejected Submissions",
    image: "/assets/rejected-submissions.svg",
    count: 10,
  },
  {
    title: "Approved Submissions",
    image: "/assets/approved-submissions.svg",
    count: 20,
  },
];

const FormHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <TypographyAtom
        text="Submission of Vendor Onboarding"
        sx={{
          fontSize: { xs: "18px", sm: "20px" },
          color: theme.palette.primary.main,
          fontWeight: 800,
          lineHeight: "28px",
        }}
      />
      <TypographyAtom
        text="You can see all submission by vendors here"
        sx={{
          fontSize: { xs: "12px", sm: "13px" },
          color: theme.palette.primary.main,
          fontWeight: 500,
          lineHeight: "17.71px",
          marginTop: "3px",
        }}
      />
      <Box
        sx={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          gap: { xs: "12px", sm: "20px" },
        }}
      >
        {submissionData.map((item, index) => (
          <SubmissionCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default FormHeader;
