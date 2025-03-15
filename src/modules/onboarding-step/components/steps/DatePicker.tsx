import React, { useRef, useState } from 'react';
import { TextField, InputAdornment, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

interface DatePickerProps {
    label: string;
    required?: boolean;
}

const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: '8px',
        border: '1px solid #6C849D52',
        padding: '10px 16px 10px 0px',
        fontSize: '14px',
        fontWeight: 500,
        color: '#192839',
        lineHeight: '20px',
        height: '40px',
        backgroundColor: 'transparent',
    },
    '& .MuiInputLabel-root': {
        color: '#2F4256',
        fontWeight: 'medium',
    },
    '& .MuiInputLabel-asterisk': {
        color: '#D44A4A',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '& input[type="date"]::-webkit-calendar-picker-indicator': {
        opacity: 0,
        width: 0,
        position: 'absolute',
    },
    '& input::placeholder': {
        textTransform: 'uppercase',
        color: "#768EA7",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        opacity: 1,
    },
    '& input': {
        textTransform: 'uppercase',
        color: "#768EA7",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px"
    },
});

const DatePicker: React.FC<DatePickerProps> = ({ label, required = false }) => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker(); 
        }
    };

    return (
        <Box>
            <Typography variant="body2" sx={{ color: '#2F4256', fontSize: '13px', fontWeight: 500, mb: '6px' }}>
                {label}
                {required && <span style={{ color: '#D44A4A' }}>*</span>}
            </Typography>
            <CustomTextField
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
                required={required}
                inputRef={inputRef}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
                            <Image src="/assets/date-picker.svg" alt="Date Picker Icon" width={16} height={16} />
                        </InputAdornment>
                    ),
                }}
                placeholder={!selectedDate ? 'MM/DD/YYYY' : ''}  
            />
        </Box>
    );
};

export default DatePicker;
