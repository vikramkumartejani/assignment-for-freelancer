import { TextField, Typography } from '@mui/material';
import React from 'react';

interface InputProps {
    label: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder = '', required = false, value, onChange }) => {
    return (
        <>
            <Typography variant="body2" sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, mb: "6px" }}>
                {label}{required && <span style={{ color: '#D44A4A' }}>*</span>}
            </Typography>
            <TextField
                variant="outlined"
                fullWidth
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                sx={{
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        height: '40px',
                        color: '#192839',
                        fontSize: '14px',
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        '& fieldset': { border: "1px solid #6C849D52" },
                        '&:hover fieldset': { border: "1px solid #6C849D52" },
                        '&.Mui-focused fieldset': { border: "1px solid #6C849D52" },
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: '#768EA7',
                        opacity: 1,
                    }
                }}
            />
        </>
    );
};

export default Input;
