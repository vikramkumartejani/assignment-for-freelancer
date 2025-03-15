import React, { useState } from 'react';
import { Box } from '@mui/material';
import Dropdown from './Dropdown';
import Input from './Input';
import UploadDocument from './UploadDocument';
import DatePicker from './DatePicker';


const TaxDetails: React.FC = () => {
    const [ldcApplicability, setLdcApplicability] = useState<string | null>(null);
    const options = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
    ];

    const handleDropdownChange = (value: string) => {
        setLdcApplicability(value);
    };

    return (
        <Box>
            <Dropdown
                label="LDC Applicability"
                options={options}
                required={false}
                onChange={handleDropdownChange}
            />
            {ldcApplicability === 'Yes' && (
                <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Box>
                        <Input label="LDC Percentage" placeholder='Enter Percentage' required />
                    </Box>
                    <Box>
                        <Input label="Enter Limit" placeholder='Enter Limit' required />
                    </Box>
                    <DatePicker label="LDC Period Start Date" required/>
                    <DatePicker label="LDC Period End Date" required/>
                    <Box>
                        <Input label="LDC Certificate Number" placeholder='Enter Percentage' required />
                    </Box>
                    <UploadDocument label="LDC Certificate" required />
                </Box>
            )}
        </Box>
    );
};

export default TaxDetails;
