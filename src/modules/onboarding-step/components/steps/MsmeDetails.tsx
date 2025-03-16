import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Dropdown from './Dropdown';
import Input from './Input';
import UploadDocument from './UploadDocument';
import DatePicker from './DatePicker';
import Image from 'next/image';


const MsmeDetails: React.FC = () => {
    const [msmeFlag, setMsmeFlag] = useState<string | null>(null);
    const options = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
    ];

    const handleDropdownChange = (value: string) => {
        setMsmeFlag(value);
    };

    const [msmeNumber, setMsmeNumber] = useState('');
    const [isValidated, setIsValidated] = useState(false);

    const handleValidate = () => {
        // Add validation logic here
        setIsValidated(true);
    };

    return (
        <Box>
            <Dropdown
                label="MSME Flag"
                options={options}
                required={true}
                onChange={handleDropdownChange}
            />
            {msmeFlag === 'Yes' && (
                <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Box sx={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
                        <Box sx={{width:"100%"}}>
                            <Input label="MSME Number" required value={msmeNumber} onChange={(e) => setMsmeNumber(e.target.value)} />
                        </Box>
                        <Box>
                            <Button
                                onClick={handleValidate}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    bgcolor: isValidated ? "#167B59" : "#5D4AD4",
                                    padding: "0px 16px",
                                    width: "117px",
                                    borderRadius: "8px",
                                    height: '40px',
                                    color: "#FFFFFF",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "16px",
                                    textTransform: "capitalize"
                                }}
                            >
                                {isValidated && <Image src="/assets/validated.svg" alt="validated" width={16} height={16} />}
                                {isValidated ? "Validated" : "Validate"}
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Input label="Social Category" required />
                    </Box>
                    <Box>
                        <Input label="Date of Udyam Registration" required />
                    </Box>
                    <Box>
                        <Input label="Major Services" required />
                    </Box>
                    <Box>
                        <Input label="Enterprise Type" required />
                    </Box>

                    <UploadDocument label="MSME Attachment" required />
                </Box>
            )}
        </Box>
    );
};

export default MsmeDetails
