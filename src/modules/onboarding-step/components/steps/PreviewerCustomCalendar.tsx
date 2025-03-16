import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Box, Typography } from "@mui/material";
import { Dayjs } from "dayjs";

interface PreviewerCustomCalendarProps {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    onStartDateChange: (date: Dayjs | null) => void;
    onEndDateChange: (date: Dayjs | null) => void;
    onClose: () => void;
    isSingleDate: boolean;
}

const PreviewerCustomCalendar: React.FC<PreviewerCustomCalendarProps> = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    onClose,
    isSingleDate
}) => {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    const formatDateRange = () => {
        if (startDate && endDate) {
            return `${startDate.format("MMM D")} - ${endDate.format("MMM D")}`;
        }
        return "";
    };

    const formatSingleDate = () => {
        if (selectedDate) {
            return selectedDate.format("DD-MM-YYYY");
        }
        return "";
    };

    const handleDateChange = (newDate: Dayjs | null) => {
        if (isSingleDate) {
            setSelectedDate(newDate);
            onStartDateChange(newDate);
            onEndDateChange(null);
        } else {
            if (!startDate || (startDate && endDate)) {
                onStartDateChange(newDate);
                onEndDateChange(null);
                setSelectedDate(newDate);
            } else {
                onEndDateChange(newDate);
                setSelectedDate(null);
            }
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ p: 2, minWidth: 320 }}>
                <Box>
                    <Typography sx={{ color: "#5D4AD4", fontSize: 14 }}>
                        {isSingleDate ? "Select Date" : "Select Date Range"}
                    </Typography>
                    <Typography sx={{ color: "#5D4AD4", fontSize: 24, fontWeight: 800, mt: 1 }}>
                        {isSingleDate ? formatSingleDate() : formatDateRange()}
                    </Typography>
                </Box>

                <DateCalendar
                    value={selectedDate || startDate || endDate || null}
                    onChange={handleDateChange}
                    sx={{
                        "& .MuiPickersDay-root.Mui-selected": { backgroundColor: "#5D4AD4" },
                        "& .MuiPickersDay-root:not(.Mui-selected):hover": { backgroundColor: "#5D4AD4" }
                    }}
                />

                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                    <Button variant="text" onClick={onClose} sx={{ color: "#5D4AD4" }}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={onClose} disabled={isSingleDate ? !selectedDate : !startDate || !endDate}
                        sx={{ bgcolor: "#5D4AD4", "&.Mui-disabled": { bgcolor: "#5d4ad466" } }}>
                        Ok
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default PreviewerCustomCalendar;
