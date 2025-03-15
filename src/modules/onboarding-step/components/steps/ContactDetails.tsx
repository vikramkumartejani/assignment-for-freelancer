import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Input from './Input';
import Dropdown from './Dropdown';

const ContactDetails = () => {
    const [contacts, setContacts] = useState([{}]);

    const typeOptions = [
        { value: "Type 1", label: "Type 1" },
        { value: "Type 2", label: "Type 2" },
    ];

    const addContact = () => {
        setContacts([...contacts, {}]);
    };

    return (
        <Box>
            {contacts.map((_, index) => (
                <Box key={index} sx={{ ...(index !== 0 && { marginTop: "20px" }) }}>
                    {contacts.length > 1 && (
                        <Typography sx={{ marginBottom: "20px", fontSize: "13px", lineHeight: "18px", fontWeight: 700, color: "#768EA7" }}>
                            Contact Details {index + 1}
                        </Typography>
                    )}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                        <Box sx={{ maxWidth: "100px", minWidth: "100px" }}>
                            <Input label='Title' />
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Input label='First Name' />
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <Input label='Last Name' />
                        </Box>
                    </Box>
                    <Dropdown label='Type' options={typeOptions} />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                        <Box>
                            <Input label='E-mail' />
                        </Box>
                        <Box>
                            <Input label='Phone No' />
                        </Box>
                        <Box>
                            <Input label='Mobile No' />
                        </Box>
                        <Box>
                            <Input label='Department' />
                        </Box>
                    </Box>
                </Box>
            ))}
            <Box sx={{ marginTop: "20px", display: "flex", alignItems: 'end', justifyContent: "end" }}>
                <Button
                    onClick={addContact}
                    sx={{ border: "1px solid #5D4AD4", padding: "0px 16px", borderRadius: "8px", height: '40px', color: "#5D4AD4", fontSize: "14px", fontWeight: 600, lineHeight: "16px", textTransform: "capitalize" }}
                >
                    Add Another Contact
                </Button>
            </Box>
        </Box>
    );
};

export default ContactDetails;