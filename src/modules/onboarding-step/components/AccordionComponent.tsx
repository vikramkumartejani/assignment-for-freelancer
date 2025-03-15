import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const accordionHeaderStyle = {
    maxHeight: "72px",
    p: 3,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: "1px solid #E3EAF3",
};

const accordionTypographyStyle = {
    color: '#2F4256',
    fontWeight: 700,
    lineHeight: '24px',
    fontSize: "16px"
};

interface AccordionComponentProps {
    id: string;
    title: string;
    children: React.ReactNode;
    isLast?: boolean;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ id, title, children, isLast = false }) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion id={id} expanded={expanded === title} onChange={handleChange(title)} sx={{ boxShadow: 'none', '&:before': { display: 'none' }, '&.Mui-expanded': { margin: 0 }, ...(isLast && { borderBottom: "1px solid #E3EAF3" }) }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#768EA7" }} />} aria-controls={`${title}-content`} id={`${title}-header`} sx={accordionHeaderStyle}>
                <Typography variant="h6" sx={accordionTypographyStyle}>
                    {title}
                </Typography>   
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0px 20px 20px 20px' }}>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent
