import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

// Arrays for data
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

const FormHeader = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "20px" },  
          color: "#2F4256",
          fontWeight: "800",
          lineHeight: "28px",
        }}
      >
        Submission of Vendor Onboarding
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "13px" },  
          color: "#2F4256",
          fontWeight: "500",
          lineHeight: "17.71px",
          marginTop: "3px",
        }}
      >
        You can see all submission by vendors here
      </Typography>

      <Box
        sx={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: { xs: "12px", sm: "20px" }
        }}
      >
        {submissionData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              border: "1px solid #6C849D2E",
              borderRadius: "8px",
              padding: { xs: "10px 20px", sm: "12px 20px" },
              display: "flex",
              justifyContent: { xs: "start", sm: "center" },
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Image
              src={item.image}
              alt={item.title.toLowerCase().replace(" ", "-")}
              width={36}
              height={36}
            />
            <Box>
              <Typography
              // className="text-nowrap"
                sx={{
                  color: "#58728D",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: "#243547",
                  fontSize: { xs: "18px", sm: "20px" },
                  lineHeight: "28px",
                  fontWeight: "700",
                }}
              >
                {item.count}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FormHeader;
