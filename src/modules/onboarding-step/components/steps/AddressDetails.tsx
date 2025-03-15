import React from 'react'
import { Box } from '@mui/material'
import Input from './Input'

const AddressDetails: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box>
                <Input label="Building Number" required />
            </Box>
            <Box>
                <Input label="Floor No" required />
            </Box>
            <Box>
                <Input label="Street" required />
            </Box>
            <Box>
                <Input label="Location" required />
            </Box>
            <Box>
                <Input label="State" required />
            </Box>
            <Box>
                <Input label="Pin Code" required />
            </Box>
            <Box>
                <Input label="Country" required />
            </Box>
        </Box>
    )
}

export default AddressDetails
