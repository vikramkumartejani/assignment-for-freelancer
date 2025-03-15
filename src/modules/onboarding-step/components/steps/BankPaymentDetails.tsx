import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Input from './Input';
import Dropdown from './Dropdown';
import UploadDocument from './UploadDocument';
import Image from 'next/image';

const BankPaymentDetails: React.FC = () => {
    const [bankAccounts, setBankAccounts] = useState([{ id: 1, ifsc: "", accountNo: "", isValidated: false }]);

    const handleAddAccount = () => {
        setBankAccounts([...bankAccounts, { id: bankAccounts.length + 1, ifsc: "", accountNo: "", isValidated: false }]);
    };

    const handleInputChange = (id: number, field: string, value: string) => {
        setBankAccounts(prevAccounts => prevAccounts.map(account =>
            account.id === id ? { ...account, [field]: value } : account
        ));
    };

    const handleValidate = (id: number) => {
        setBankAccounts(prevAccounts => prevAccounts.map(account =>
            account.id === id ? { ...account, isValidated: account.ifsc && account.accountNo ? true : false } : account
        ));
    };

    const accounttype = [
        { value: "Saving", label: "Saving" },
        { value: "Saving - 2", label: "Saving - 2" },
    ];

    const currency = [
        { value: "INR", label: "INR" },
        { value: "PKR", label: "PKR" },
        { value: "USD", label: "USD" },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {bankAccounts.map((account, index) => (
                <Box key={account.id} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                    {bankAccounts.length > 1 && (
                        <Typography sx={{ fontSize: "13px", lineHeight: "18px", fontWeight: 700, color: "#768EA7" }}>
                            Bank Account {index + 1}
                        </Typography>
                    )}

                    <Box sx={{ display: "flex", gap: "20px", alignItems: "end" }}>
                        <Box sx={{ width: "100%" }}>
                            <Input
                                label='IFSC Code'
                                required
                                value={account.ifsc}
                                onChange={(e) => handleInputChange(account.id, "ifsc", e.target.value)}
                            />
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Input
                                label='Account No'
                                required
                                value={account.accountNo}
                                onChange={(e) => handleInputChange(account.id, "accountNo", e.target.value)}
                            />
                        </Box>
                        <Box>
                            <Button
                                onClick={() => handleValidate(account.id)}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    bgcolor: account.isValidated ? "#167B59" : "#5D4AD4",
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
                                {account.isValidated && <Image src="/assets/validated.svg" alt='validated' width={16} height={16} />}
                                Validate
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Input label='Verification Status' required />
                    </Box>
                    <Box>
                        <Input label='Beneficiary Name' required />
                    </Box>
                    <Box>
                        <Input label='Bank Name' required />
                    </Box>
                    <Box>
                        <Input label='Bank Branch Name' required />
                    </Box>
                    <Box>
                        <Input label='Bank Country/Region' required />
                    </Box>
                    <Box>
                        <Dropdown label='Account Type' options={accounttype} required defaultToFirstOption={false} />
                    </Box>
                    <Box>
                        <Dropdown label='Currency' options={currency} required defaultToFirstOption={true} />
                    </Box>
                    <Box>
                        <UploadDocument label='Cancelled Check' required />
                    </Box>
                </Box>
            ))}

            <Box sx={{ display: "flex", alignItems: 'end', justifyContent: "end" }}>
                <Button
                    onClick={handleAddAccount}
                    sx={{ border: "1px solid #5D4AD4", padding: "0px 16px", borderRadius: "8px", height: '40px', color: "#5D4AD4", fontSize: "14px", fontWeight: 600, lineHeight: "16px", textTransform: "capitalize" }}
                >
                    Add Another Bank Account
                </Button>
            </Box>
        </Box>
    );
};

export default BankPaymentDetails;
