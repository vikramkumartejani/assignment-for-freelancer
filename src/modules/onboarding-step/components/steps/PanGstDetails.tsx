import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

const PanGstDetails: React.FC = () => {
    return (
        <Box>
            <Box>
                <Typography variant="body2" color="#2F4256" fontWeight="medium" sx={{ mb: "6px" }}>
                    Pan Number<span style={{ color: '#D44A4A' }}>*</span>
                </Typography>
                <TextField
                    variant="outlined"
                    fullWidth
                    sx={{
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px', 
                            height: '40px',
                            color: '#192839',
                            fontSize: '14px',
                            fontWeight: 'medium',
                            lineHeight: '20px',
                            '& fieldset': {
                                border: "1px solid #6C849D52"  
                            },
                            '&:hover fieldset': {
                                border: "1px solid #6C849D52"
                            },
                            '&.Mui-focused fieldset': {
                                border: "1px solid #6C849D52"
                            },
                        }
                    }}
                />
            </Box>
        </Box>
    )
}

export default PanGstDetails
