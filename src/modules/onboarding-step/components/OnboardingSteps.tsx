import { Box, Typography } from '@mui/material'
import React from 'react'

interface StepProps {
    number: number;
    label: string;
}

const Step: React.FC<StepProps> = ({ number, label }) => {
    const handleClick = () => {
        document.getElementById(label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box onClick={handleClick} sx={{ display: 'flex', alignItems: 'center', gap: "12px", position: 'relative', zIndex: 2, cursor: 'pointer' }}>
            <Box sx={{ border: '1px solid #6C849D2E', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: "center", minHeight: "20px", minWidth: "20px", maxHeight: "20px", maxWidth: "20px", bgcolor: "#FFFFFF" }}>
                <Typography variant='h6' sx={{ color: "#6C849D", fontWeight: 700, lineHeight: "16px", fontSize: '12px' }}>{number}</Typography>
            </Box>
            <Typography variant='h6' sx={{ color: "#243547", fontWeight: 500, lineHeight: "20px", fontSize: '14px' }}>{label}</Typography>
        </Box>
    );
};

const OnboardingSteps: React.FC = () => {
    const steps = [
        "Vendor Basic Details",
        "Pan & GST Details",
        "Address Details",
        "MSME Details",
        "Bank & Payment Details",
        "Bank Details",
        "Tax Details",
        "Attachment"
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "28px", position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: '20px', bottom: '20px', left: '10px', width: '1px', bgcolor: '#E3EAF3', zIndex: 1 }} />
            {steps.map((label, index) => (
                <Step key={index} number={index + 1} label={label} />
            ))}
        </Box>
    )
}

export default OnboardingSteps