import React, { useState } from 'react';
import { Button, Typography, Box, IconButton, Modal } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

interface RequiredIndicatorProps {
    required?: boolean;
}

const RequiredIndicator: React.FC<RequiredIndicatorProps> = ({ required }) => {
    return required ? <span style={{ color: '#D44A4A' }}>*</span> : null;
};

interface UploadDocumentProps {
    label: string;
    required?: boolean;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ label, required = false }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type === 'application/pdf') {
                setFileName(file.name);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFilePreview(reader.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Only .pdf files are allowed.');
                setFileName(null);
                setFilePreview(null);
            }
        }
    };

    const handleRemoveFile = () => {
        setFileName(null);
        setFilePreview(null);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Typography sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, lineHeight: "18px", marginBottom: "8px" }}>
                {label}<RequiredIndicator required={required} />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Button
                    component="label"
                    startIcon={<Image src="/assets/upload-document.svg" alt='upload-document' width={24} height={24} />}
                    sx={{ display: 'flex', alignItems: 'center', border: "1px solid #5D4AD43D", borderRadius: '8px', width: "190px", height: "44px", color: "#4838B0", fontSize: "14px", fontWeight: 600, lineHeight: "20px", textTransform: "capitalize" }}
                >
                    Upload Document
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>

                <Typography variant="body2" sx={{ color: "#58728D", fontSize: "13px", fontWeight: 500, lineHeight: "18px" }}>
                    Only .pdf files allowed. Max size 2 MB.
                </Typography>
            </Box>
            {fileName && (
                <Box onClick={handleOpen} sx={{ minWidth: "200px", width: "fit-content", display: 'flex', alignItems: 'center', marginTop: '10px', height: "44px", padding: '0px 4px 0px 12px', borderRadius: '8px', backgroundColor: '#F1F5FA', cursor: 'pointer' }}>
                    <Image src="/assets/pdf-icon.svg" alt='pdf-icon' width={26} height={26} />
                    <Typography variant="body2" sx={{ color: "#4838B0", fontSize: "14px", fontWeight: 600, lineHeight: "20px", marginLeft: '8px' }}>
                        {fileName}
                    </Typography>
                    <IconButton onClick={(e) => { e.stopPropagation(); handleRemoveFile(); }} sx={{ marginLeft: 'auto' }}>
                        <CloseIcon sx={{ color: '#5D4AD4' }} />
                    </IconButton>
                </Box>
            )}
            <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '90%', height: '90%', backgroundColor: 'white', padding: '8px', borderRadius: '8px', boxShadow: 24 }}>
                    {filePreview && <embed src={filePreview} type="application/pdf" width="100%" height="100%" />}
                </Box>
            </Modal>
        </Box>
    );
};

export default UploadDocument;
