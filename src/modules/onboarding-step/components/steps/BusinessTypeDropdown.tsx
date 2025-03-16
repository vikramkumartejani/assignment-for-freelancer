import React from 'react';
import { Box } from '@mui/material';
import Dropdown from './Dropdown';

interface BusinessTypeDropdownProps {
    onBusinessTypeChange: (value: string) => void;
}

const BusinessTypeDropdown: React.FC<BusinessTypeDropdownProps> = ({ onBusinessTypeChange }) => {
    const businessTypes = [
        { value: "Individual", label: "Individual" },
        { value: "Proprietorship", label: "Proprietorship" },
        { value: "Partnership", label: "Partnership" },
        { value: "Private Limited", label: "Private Limited" },
        { value: "Public Limited", label: "Public Limited" },
        { value: "Foreign", label: "Foreign" },
        { value: "Vendor", label: "Vendor" },
    ];

    return (
        <Box>
            <Dropdown
                label="Business Type"
                options={businessTypes}
                required={true}
                onChange={onBusinessTypeChange}
            />
        </Box>
    );
};

export default BusinessTypeDropdown;
