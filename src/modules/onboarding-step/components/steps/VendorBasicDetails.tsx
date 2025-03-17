"use client"

import type React from "react"
import { useState } from "react"
import { Box, Button } from "@mui/material"
import Dropdown from "./Dropdown"
import DatePicker from "./DatePicker"
import Input from "./Input"
import Image from "next/image"

interface VendorBasicDetailsProps {
    businessType: string | null;
    setBusinessType: (value: string | null) => void;
}

const VendorBasicDetails: React.FC<VendorBasicDetailsProps> = ({ businessType, setBusinessType }) => {
    const [vendorPan, setVendorPan] = useState({ id: "vendorPan", value: "ABCD12345GH", isValidated: false })

    const handleInputChange = (field: string, value: string) => {
        if (field === "vendorPan") {
            setVendorPan(prevState => ({ ...prevState, value }))
        }
    }

    const handleValidate = (id: string) => {
        if (id === "vendorPan") {
            setVendorPan(prevState => ({ ...prevState, isValidated: true }))
        }
    }

    const options = [
        { value: "Business in India", label: "Business in India" },
        { value: "Business in Foreign", label: "Business in Foreign" },
    ]

    const approverName = [
        { value: "Shravan Kumar", label: "Shravan Kumar" },
        { value: "Shravan", label: "Shravan" },
    ]

    const partyrelationship = [
        { value: "No", label: "No" },
        { value: "Yes", label: "Yes" },
    ]

    const TDSrate = [
        { value: "10%", label: "10%" },
        { value: "50%", label: "50%" },
    ]

    const paymentmode = [
        { value: "Bank Transfer - 1", label: "Bank Transfer - 1" },
        { value: "Bank Transfer - 2", label: "Bank Transfer - 2" },
    ]

    const paymentterms = [
        { value: "Net 20 Days", label: "Net 20 Days" },
        { value: "Net 30 Days", label: "Net 30 Days" },
    ]

    const estimatedannual = [
        { value: "₹1,00,00,000", label: "₹1,00,00,000" },
        { value: "₹2,00,00,000", label: "₹2,00,00,000" },
    ]

    const medium = [
        { value: "Digital Marketing", label: "Digital Marketing" },
        { value: "Digital Marketing - 1", label: "Digital Marketing - 1" },
    ]

    const mediumtwo = [
        { value: "TV", label: "TV" },
        { value: "TV - 1", label: "TV - 1" },
    ]

    const brandname = [
        { value: "NovaTech Solutions", label: "NovaTech Solutions" },
        { value: "NovaTech Solutions - 1", label: "NovaTech Solutions - 1" },
    ]

    const vendortype = [
        { value: "Media", label: "Media" },
        { value: "Media - 1", label: "Media - 1" },
    ]

    const dentsuentityname = [
        { value: "Dentsu Webchutney Pvt. Ltd.", label: "Dentsu Webchutney Pvt. Ltd." },
        { value: "Dentsu Webchutney Pvt. Ltd. - 1", label: "Dentsu Webchutney Pvt. Ltd. - 1" },
    ]

    const businessTypes = [
        { value: "Individual", label: "Individual" },
        { value: "Proprietorship", label: "Proprietorship" },
        { value: "Partnership", label: "Partnership" },
        { value: "Private Limited", label: "Private Limited" },
        { value: "Public Limited", label: "Public Limited" },
        { value: "Foreign", label: "Foreign" },
        { value: "Vendor", label: "Vendor" },
    ];

    const handleDropdownChange = (selectedValue: string) => {
        setBusinessType(selectedValue);
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box>
                <Dropdown
                    label="Vendor Location"
                    options={options}
                    required={true}
                    defaultValue="Business in India"
                />
            </Box>

            <Box sx={{ display: "flex", gap: "20px", alignItems: "end" }}>
                <Box sx={{ width: "100%" }}>
                    <Input
                        label='Vendor Pan'
                        required
                        value={vendorPan.value}
                        onChange={(e) => handleInputChange("vendorPan", e.target.value)}
                    />
                </Box>
                <Box>
                    <Button
                        onClick={() => handleValidate(vendorPan.id)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            bgcolor: vendorPan.isValidated ? "#167B59" : "#5D4AD4",
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
                        {vendorPan.isValidated && <Image src="/assets/validated.svg" alt='validated' width={16} height={16} />}
                        {vendorPan.isValidated ? "Validated" : "Validate"}

                    </Button>
                </Box>
            </Box>

            <Box>
            <Dropdown
                label="Business Type"
                options={businessTypes}
                required={true}
                defaultValue={businessType || ""}
                onChange={handleDropdownChange}  
            />
            </Box>

            <Box>
                <Input label="Pan Registration Name" required value="Tech Innovation" />
            </Box>

            <Box>
                <Input label="Pan Status" required value="Active" />
            </Box>

            <Box>
                <Input label="Vendor Name" required value="Tech Innovation" />
            </Box>

            <Box>
                <Input label="Email Id" required value="tech.innovation@tech.com" />
            </Box>

            <Box>
                <Input label="Designation" placeholder="Enter Designation" />
            </Box>

            <Box>
                <Input label="Mobile No" placeholder="Enter Mobile Number" />
            </Box>

            <Box>
                <Dropdown
                    label="Dentsu Entity Name"
                    options={dentsuentityname}
                    defaultValue="Dentsu Webchutney Pvt. Ltd."
                    required={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Vendor Type"
                    options={vendortype}
                    defaultValue="Media"
                    required={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Brand Name"
                    options={brandname}
                    defaultValue="NovaTech Solutions"
                    required={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Medium"
                    options={mediumtwo}
                    defaultValue="TV"
                    required={true}
                />
            </Box>

            <Box>
                <Input label="Explain the nature of the vendor’s business" required value="Media" />
            </Box>

            <Box>
                <Dropdown
                    label="Medium"
                    options={medium}
                    defaultValue="Digital Marketing"
                    required={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Estimated Annual Turnover with Dentsu"
                    options={estimatedannual}
                    defaultValue="₹1,00,00,000"
                    required={true}
                />
            </Box>

            <Box>
                <Input
                    label="Have you evaluated any existing vendors who are empaneled in our system, and what was your conclusion? Please provide a business rationale for onboarding this vendor"
                    value="They have a strong industry reputation and align well with our project requirements"
                    required
                />
            </Box>

            <Box>
                <Dropdown
                    label="Payment Terms"
                    options={paymentterms}
                    required={true}
                    defaultToFirstOption={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Payment Mode"
                    options={paymentmode}
                    required={true}
                    defaultToFirstOption={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Please mention TDS rate"
                    options={TDSrate}
                    required={true}
                    defaultToFirstOption={true}
                />
            </Box>

            <Box>
                <Dropdown
                    label="Do you have a related party relationship with this vendor (To the best of your knowledge & belief are any owners or employees of the vendor, immediate family members or close friends of"
                    options={partyrelationship}
                    required={true}
                    defaultToFirstOption={true}
                />
            </Box>

            <Box>
                <Input
                    label="What kind of relation"
                    value="N/A"
                    required
                />
            </Box>

            <Box>
                <DatePicker dateLabel="Please mention the Campaign start Date" />
            </Box>

            <Box>
                <Input
                    label="Requestor Email Id"
                    value="ramesh.pawar@tech.com"
                    required
                />
            </Box>

            <Box>
                <Dropdown
                    label="Approver Name"
                    options={approverName}
                    required={true}
                    defaultToFirstOption={true}
                />
            </Box>
        </Box>
    )
}

export default VendorBasicDetails

