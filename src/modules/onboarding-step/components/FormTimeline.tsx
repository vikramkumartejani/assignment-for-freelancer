"use client"
import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import OnboardingSteps from './OnboardingSteps'
import AccordionList from './AccordionList'

const FormTimeline: React.FC = () => {


    return (
        <Box sx={{ maxWidth: 902, mx: 'auto', width: '100%', borderRadius: 2, display: 'flex', alignItems: 'start', bgcolor: "white", minHeight: '664px', height: "664px" }}>
            {/* Onboarding Steps */}
            <Box sx={{ p: 3, bgcolor: '#F8FAFC', borderRight: '1px solid #6C849D2E', minWidth: 248, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, minHeight: '664px', height: "664px" }}>
                <Typography variant="h6" sx={{ color: '#243547', fontWeight: 700, lineHeight: '24px', fontSize: '16px', marginBottom: "28px" }}>
                    Onboarding Steps
                </Typography>
                <OnboardingSteps />
            </Box>

            {/* Vendor Onboarding  */}
            <Box sx={{
                width: '100%', bgcolor: 'white', borderTopRightRadius: 8, borderBottomRightRadius: 8, display: 'flex', flexDirection: 'column', minHeight: '664px', maxHeight: "664px", overflowY: "scroll",
                scrollbarWidth: "none",  
                "&::-webkit-scrollbar": {
                    display: "none", 
                },
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3 }}>
                    <Box>
                        <Typography variant="h5" sx={{ color: '#2F4256', fontWeight: 800, lineHeight: '28px', fontSize: "20px" }}>
                            Vendor Onboarding
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#40566D', fontWeight: 400, lineHeight: '20px', fontSize: "14px" }}>
                            Fill the form details below to make a submission
                        </Typography>
                    </Box>
                    <Image src='/assets/dentsu.svg' alt='dentsu' width={114} height={24} />
                </Box>
                {/* Form Accordion */}
                <AccordionList/>

                <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', p: 3 }}>
                    <Button sx={{ bgcolor: "#5D4AD4", fontSize: "14px", lineHeight: "16px", color: "white", fontWeight: 600, width: '86px', height: "40px", textTransform: "capitalize", borderRadius: "8px" }}>Preview</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FormTimeline