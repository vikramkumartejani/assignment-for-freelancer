import React, { useState } from "react";
import { Box, TextField, Typography, InputAdornment, IconButton, Menu, FormHelperText } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import PreviewerCustomCalendar from "./PreviewerCustomCalendar";
import Image from "next/image";

interface DatePickerProps {
    dateLabel: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ dateLabel }) => {
    const [calendarAnchorEl, setCalendarAnchorEl] = useState<null | HTMLElement>(null);
    const [activeFieldId, setActiveFieldId] = useState<string | null>(null);
    const [dateValues, setDateValues] = useState<{ [key: string]: Dayjs | null }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const openCalendar = (event: React.MouseEvent<HTMLElement>, fieldId: string) => {
        setCalendarAnchorEl(event.currentTarget);
        setActiveFieldId(fieldId);
    };

    const closeCalendar = () => {
        setCalendarAnchorEl(null);
        setActiveFieldId(null);
    };

    const handleDateChange = (date: Dayjs | null) => {
        if (activeFieldId) {
            setDateValues((prev) => ({ ...prev, [activeFieldId]: date }));
        }
        closeCalendar();
    };

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    paddingBottom: "8px",
                    color: "#2F4256",
                }}
            >
                {dateLabel}<span style={{ color: "#D44A4A" }}>*</span>
            </Typography>

            <TextField
                fullWidth
                id="date-field"
                placeholder="DD/MM/YYYY"
                required
                variant="outlined"
                value={dateValues["date-field"] ? dayjs(dateValues["date-field"]).format("DD-MM-YYYY") : ""}
                onClick={(e) => openCalendar(e, "date-field")}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={(e) => openCalendar(e, "date-field")} edge="end">
                                <Image src="/assets/date-picker.svg" alt="Date Picker Icon" width={18} height={18} style={{ marginRight: "4px" }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": { height: "40px", borderRadius: "8px", },
                    "& .MuiInputBase-input": { height: "40px", cursor: "pointer" },
                    "& input::placeholder": { color: "#768EA7", opacity: 1, fontSize: "14px", fontWeight: 500, lineHeight: "20px" },
                }}
            />


            {calendarAnchorEl && activeFieldId && (
                <Menu
                    anchorEl={calendarAnchorEl}
                    open={Boolean(calendarAnchorEl)}
                    onClose={closeCalendar}
                    sx={{ marginLeft: 20, "& .MuiPaper-root": { boxShadow: 1, border: "1px solid #ccc" } }}
                >
                    <PreviewerCustomCalendar
                        startDate={dateValues[activeFieldId] || null}
                        endDate={null}
                        onStartDateChange={handleDateChange}
                        onEndDateChange={() => { }}
                        onClose={closeCalendar}
                        isSingleDate={true}
                    />
                </Menu>
            )}

            {errors["date-field"] && <FormHelperText error>{errors["date-field"]}</FormHelperText>}
        </Box>
    );
};

export default DatePicker;

