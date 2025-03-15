"use client"

import React, { useEffect } from "react"
import { Box, FormControl, Select, MenuItem, type SelectChangeEvent, Typography, type MenuProps } from "@mui/material"
import { styled } from "@mui/system"
import Image from "next/image"

const CustomSelect = styled(Select)({
    height: "40px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #6C849D52",
    padding: "10px 12px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#192839",
    lineHeight: "20px",
    "& .MuiSelect-select": {
        padding: "0px",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    "& .MuiSelect-icon": {
        display: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    position: "relative",
})

const menuProps: Partial<MenuProps> = {
    PaperProps: {
        style: {
            marginTop: "4px",
            borderRadius: "8px",
            border: "1px solid #6C849D52",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        },
    },
    MenuListProps: {
        sx: {
            "& .MuiMenuItem-root": {
                "&:hover": {
                    backgroundColor: "transparent",
                },
                "&.Mui-selected": {
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    },
}

interface DropdownProps {
    label: string
    options: { value: string; label: string }[]
    required?: boolean
    onChange?: (value: string) => void
    defaultToFirstOption?: boolean
    defaultValue?: string
    placeholder?: string
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    required = false,
    onChange,
    defaultToFirstOption = false,
    defaultValue = "",
    placeholder = "Select",
}) => {
    const [selectedValue, setSelectedValue] = React.useState(defaultValue)

    useEffect(() => {
        if (defaultToFirstOption && options.length > 0 && !selectedValue) {
            const firstValue = options[0].value
            setSelectedValue(firstValue)
            if (onChange) {
                onChange(firstValue)
            }
        }
    }, [defaultToFirstOption, options, onChange, selectedValue])

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const value = event.target.value as string
        setSelectedValue(value)
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <>
            <Box>
                <Typography variant="body2" sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, mb: "8px" }}>
                    {label}
                    {required && <span style={{ color: "#D44A4A" }}>*</span>}
                </Typography>
            </Box>
            <FormControl fullWidth sx={{ width: "100%" }}>
                <Box sx={{ position: "relative", width: "100%" }}>
                    <CustomSelect
                        value={selectedValue}
                        onChange={handleChange}
                        displayEmpty
                        MenuProps={menuProps}
                        renderValue={(selected: unknown) => {
                            if (selected === "") {
                                return (
                                    <Typography
                                        sx={{ width: "100%", color: "#768EA7", fontSize: "14px", fontWeight: 500, lineHeight: "20px" }}
                                    >
                                        {placeholder}
                                    </Typography>
                                )
                            }
                            const selectedOption = options.find((option) => option.value === selected)
                            return (
                                <Typography sx={{ width: "100%", fontSize: "14px", fontWeight: 500, lineHeight: "20px" }}>
                                    {selectedOption ? selectedOption.label : (selected as string)}
                                </Typography>
                            )
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{
                                    width: "100%",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#192839",
                                    lineHeight: "20px",
                                    marginBottom: "3px",
                                }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </CustomSelect>

                    {/* Add the arrow */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                        }}
                    >
                        <Image src="/assets/arrow-dropdown-value.svg" alt="dropdown arrow" width={16} height={16} />
                    </Box>
                </Box>
            </FormControl>
        </>
    )
}

export default Dropdown
