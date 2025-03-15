"use client";

import React, { useEffect, useState } from "react";
import { Box, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import GstinModal from "./GstinModal";

const CustomSelect = styled(Box)({
    height: "40px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #6C849D52",
    padding: "10px 12px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#192839",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    position: "relative",
});

const gstin = [
    { value: "29AABCU9603R1Z2", label: "29AABCU9603R1Z2" },
    { value: "67AABCU7873R178", label: "67AABCU7873R178" },
    { value: "56AUHCU960HVYV", label: "56AUHCU960HVYV" },
];

const GstinDropdown = () => {
    const [showGstinPopup, setShowGstinPopup] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("");

    useEffect(() => {
        if (gstin.length === 1) {
            setSelectedValue(gstin[0].value);
        }
    }, []);

    const handleClick = () => {
        if (gstin.length > 1) {
            setShowGstinPopup(true);
        }
    };

    return (
        <>
            <Box>
                <Typography variant="body2" sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, mb: "8px" }}>
                    GSTIN<span style={{ color: "#D44A4A" }}>*</span>
                </Typography>
            </Box>
            <FormControl fullWidth>
                <CustomSelect onClick={handleClick}>
                <Typography 
                        sx={{ 
                            color: selectedValue ? "#192839" : "#768EA7", 
                            fontSize: "14px", 
                            lineHeight: "20px", 
                            fontWeight: 500 
                        }}
                    >
                        {selectedValue || "Select"}
                    </Typography>
                    <Box sx={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>
                        <Image src="/assets/arrow-dropdown-value.svg" alt="dropdown arrow" width={16} height={16} />
                    </Box>
                </CustomSelect>
            </FormControl>
            {showGstinPopup && <GstinModal open={showGstinPopup} onClose={() => setShowGstinPopup(false)} />}
        </>
    );
};

export default GstinDropdown;
