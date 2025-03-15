import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Input from './Input'
import UploadDocument from './UploadDocument'
import Dropdown from './Dropdown'
import Image from 'next/image'
import GstinDropdown from './GstinDropdown'

const PanGstDetails: React.FC = () => {
    const pannumber = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ]

    const gstregistered = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ]

    const rcmapplicable = [
        { value: "RCM ", label: "RCM " },
        { value: "RCM - 1", label: "RCM - 1" },
    ]

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box>
                <Input label='Pan Number' required />
            </Box>
            <Box>
                <Input label='Pan Registration Name' required />
            </Box>
            <UploadDocument label='Pan Attachment' required />
            <Box>
                <Dropdown label='Is Pan Number Correct?' required options={pannumber} />
            </Box>
            <Box>
                <Dropdown label='GST Registered' required options={gstregistered} />
            </Box>
            <Box>
                <GstinDropdown />
                <Typography sx={{ marginTop: "8px", fontSize: "14px", fontWeight: 500, color: "#192839" }}>
                    Multiple GSTINs found. Please select your primary GSTIN to proceed.
                </Typography>
            </Box>
            <Box>
                <Input label='Taxpayer Type' required />
            </Box>
            <Box>
                <Input label='Status' required />
            </Box>
            <Box>
                <Input label='GST Registration Date' required />
            </Box>
            <Box>
                <Input label='Trade Name' required />
            </Box>
            <Box>
                <Input label='Constitution' required />
            </Box>
            <Box>
                <Input label='State' required />
            </Box>
            <Box>
                <Input label='Type' required />
            </Box>
            <Box>
                <Input label='Nature of Service' required />
            </Box>
            <Box>
                <Input label='einvoice Status' required />
            </Box>
            <Box>
                <Dropdown label='Is RCM Applicable?' required options={rcmapplicable} />
            </Box>

            {/* GST Attachment */}
            <Box>
                <Typography variant="body2" sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, mb: "8px" }}>GST Attachment<span style={{ color: '#D44A4A' }}>*</span></Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", bgcolor: "#F1F5FA", width: "200px", padding: "0px 12px", height: "44px", borderRadius: "8px" }}>
                    <Image src='/assets/pdf-icon.svg' alt="pdf" width={24} height={24} />
                    <Typography sx={{ color: "#4838B0", fontSize: "14px", fontWeight: 600, lineHeight: "20px", }}>GST Certificate</Typography>
                    <button><Image src='/assets/delete-icon.svg' alt='delete' width={24} height={24} /></button>
                </Box>
            </Box>

        </Box>
    )
}

export default PanGstDetails
