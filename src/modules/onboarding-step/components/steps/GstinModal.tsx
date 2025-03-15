import React from 'react';
import {
    Box,
    Button,
    Typography,
    Modal,
    RadioGroup,
    FormControlLabel,
    Radio,
    List,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import Image from 'next/image';

interface GstinModalProps {
    open: boolean;
    onClose: () => void;
}

const GstinModal: React.FC<GstinModalProps> = ({ open, onClose }) => {
    const [selectedGstin, setSelectedGstin] = React.useState('29AABCU9603R1Z2');
    const [selectedAddress, setSelectedAddress] = React.useState('address1');

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="gstin-modal-title" aria-describedby="gstin-modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: 1200,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: "8px",
                }}
            >
                {/* Header */}
                <Box sx={{ borderBottom: "1px solid #6C849D2E", width: "100%", padding: '20px 5px 20px 24px', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ color: "#192839", fontSize: "18px", fontWeight: 700, lineHeight: "26px" }}>
                            GSTIN Number
                        </Typography>
                        <Typography sx={{ color: "#192839", fontSize: "14px", fontWeight: 500, lineHeight: "20px", marginTop: "2px" }}>
                            Multiple GSTINs found. Please select your primary GSTIN to proceed.
                        </Typography>
                    </Box>
                    <Button onClick={onClose}><Image src='/assets/close-popup.svg' alt='close' width={32} height={32} /></Button>
                </Box>


                <Box sx={{ display: "flex", alignItems: "start", height: "100%" }}>
                    {/* GSTIN Selection List */}
                    <Box sx={{ bgcolor: "#F8FAFC", borderRight: "1px solid #6C849D17", height: "562px" }}>
                        <List sx={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "0px", p: 0 }}>
                            {['29AABCU9603R1Z2', '67AABCU7873R178', '56AUHCU960HVYV'].map((gstin) => (
                                <ListItemButton
                                    key={gstin}
                                    selected={selectedGstin === gstin}
                                    onClick={() => setSelectedGstin(gstin)}
                                    sx={{ p: 0, m: 0, }}
                                >
                                    <ListItemText
                                        primary={gstin}
                                        primaryTypographyProps={{
                                            fontWeight: selectedGstin === gstin ? '600' : '600',
                                        }}
                                        sx={{
                                            padding: "12px 24px",
                                            bgcolor: selectedGstin === gstin ? '#EAE7FA' : 'transparent',
                                            color: selectedGstin === gstin ? '#4838B0' : '#40566D',
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            m: 0
                                        }}
                                    />

                                </ListItemButton>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: "column", width: "100%" }}>
                        <Box sx={{ display: "flex", minHeight: "490px" }}>
                            {/* GSTIN Details */}
                            <Box sx={{ minHeight: "100%", width: "100%", px: "24px", }}>
                                <Box sx={{ height: '48px', display: "flex", alignItems: "center" }}>
                                    <Typography sx={{ color: "#40566D", fontSize: "14px", fontWeight: 500, lineHeight: "20px" }}>
                                        GSTIN Details
                                    </Typography>
                                </Box>
                                {/* Table */}
                                <Box sx={{ flex: 1 }}>
                                    {[
                                        ['GSTIN', selectedGstin],
                                        ['Taxpayer Type', 'Regular'],
                                        ['Status', 'Active'],
                                        ['GST Registration Date', '5-06-2019'],
                                        ['Trade Name', 'Tech Innovation Pvt. Ltd.'],
                                        ['Constitution', 'Private Limited Company'],
                                        ['State', 'Karnataka'],
                                        ['Type', 'Service Provider'],
                                        ['Nature of Service', 'IT Consulting & Software Development'],
                                        ['E-Invoice Status', 'Applicable']
                                    ].map(([label, value]) => (
                                        <Box key={label} sx={{ display: 'flex' }}>
                                            <Typography sx={{ fontWeight: 500, minWidth: 195, minHeight: "40px", display: "flex", alignItems: "center", color:"#40566D", fontSize:"14px", lineHeight:"20px" }}>{label}:</Typography>
                                            <Typography sx={{pl:"20px", fontWeight: 600, minWidth: 292, minHeight: "40px", display: "flex", alignItems: "center", color:"#192839", fontSize:"14px", lineHeight:"20px" }}>{value}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Address Selection */}
                            <Box sx={{ borderLeft: "1px solid #6C849D2E", minHeight: "100%", px: 3, maxWidth: "410px" }}>
                                <Typography sx={{ color: "#40566D", fontSize: "14px", fontWeight: 500, lineHeight: "20px", py: "14px" }}>
                                    Select Primary GST Address
                                </Typography>
                                <RadioGroup value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)} sx={{ width: "100%" }} >
                                    <FormControlLabel
                                        sx={{
                                            width: "100%",
                                            height: "66px",
                                            color: selectedAddress === "address1" ? "#192839" : "#40566D",
                                            fontSize: "14px",
                                            lineHeight: "20px",
                                            fontWeight: 500,
                                        }}
                                        value="address1"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "#768EA7",
                                                    "&.Mui-checked": {
                                                        color: "#5D4AD4",
                                                    },
                                                }}
                                            />
                                        }
                                        label="101, 1st Floor, MG Road, Andheri East, Maharashtra, 400093, India"
                                    />
                                    <FormControlLabel
                                        sx={{
                                            width: "100%",
                                            height: "66px",
                                            color: selectedAddress === "address2" ? "#192839" : "#40566D",
                                            fontSize: "14px",
                                            lineHeight: "20px",
                                            fontWeight: 500,
                                        }}
                                        value="address2"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "#768EA7",
                                                    "&.Mui-checked": {
                                                        color: "#5D4AD4",
                                                    },
                                                }}
                                            />
                                        }
                                        label="502, 5th Floor, Brigade Road, Koramangala, Karnataka, 560034, India"
                                    />
                                    <FormControlLabel
                                        sx={{
                                            width: "100%",
                                            height: "66px",
                                            color: selectedAddress === "address3" ? "#192839" : "#40566D",
                                            fontSize: "14px",
                                            lineHeight: "20px",
                                            fontWeight: 500,
                                        }}
                                        value="address3"
                                        control={
                                            <Radio
                                                sx={{
                                                    color: "#768EA7",
                                                    "&.Mui-checked": {
                                                        color: "#5D4AD4",
                                                    },
                                                }}
                                            />
                                        }
                                        label="208, 2nd Floor, Park Street, Salt Lake City, West Bengal, 700091, India"
                                    />
                                </RadioGroup>
                            </Box>
                        </Box>

                        {/* Set as Primary Button */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", borderTop: "1px solid #6C849D2E", height: "72px", p: 3 }}>
                            <Button
                                sx={{
                                    float: 'right',
                                    bgcolor: "#5D4AD4",
                                    width: "131px",
                                    height: "40px",
                                    borderRadius: "6px",
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "16px",
                                    textTransform: 'unset'
                                }}
                                onClick={onClose}>
                                Set as Primary
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default GstinModal;
