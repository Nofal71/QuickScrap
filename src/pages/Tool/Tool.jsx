import { Box, Button, CircularProgress, InputLabel, Paper, Stack, TextField, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const Tool = () => {
    const [progress, setProgress] = useState(null);
    const [message, setMessage] = useState("");
    const handleStartScraping = () => {
        setProgress(true);
        setTimeout(() => {
            setProgress(false);
            setMessage("Data fetched successfully!");
        }, 2000);
    };

    const downloadOptions = [
        { label: 'XML', action: () => setMessage("Downloading XML file...") },
        { label: 'JSON', action: () => setMessage("Downloading JSON file...") },
        { label: 'CSV', action: () => setMessage("Downloading CSV file...") }
    ];

    return (
        <MotionBox
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <MotionPaper
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                elevation={3} 
                sx={{
                    p: 5,
                    display: 'flex',
                    width: { xs: 1, md: 1 / 2 },
                    flexDirection: 'column',
                    gap: 3,
                    mt: { xs: 0, md: 7 }
                }}
            >
                <Stack direction={'column'} spacing={2}>
                    <InputLabel>Enter Website URL</InputLabel>
                    <TextField placeholder='URL like https://example.com' />
                </Stack>
                <Stack direction={'column'} spacing={2}>
                    <InputLabel>Enter Data You Want to Scrape</InputLabel>
                    <TextField placeholder='Emails, phone numbers, names, etc.' />
                </Stack>
                <MotionButton
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    variant='contained'
                    onClick={handleStartScraping}
                    endIcon={progress && <CircularProgress size={'20px'} color='primary.dark' />}
                    sx={{ width: 1 / 2, mx: 'auto' }}
                >Start Scraping</MotionButton>
            </MotionPaper>

            {message && (
                <MotionTypography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    variant="h6"
                    sx={{ mt: 3, color: 'green', fontWeight: 'bold' }}
                >
                    {message}
                </MotionTypography>
            )}

            <MotionPaper
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                elevation={3} 
                sx={{
                    p: 5,
                    display: 'flex',
                    width: { xs: 1, md: 1 / 2 },
                    flexDirection: 'column',
                    gap: 3,
                    mt: { xs: 0, md: 7 }
                }}
            >
                <MotionTypography 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    variant="h6" 
                    sx={{ textAlign: 'center', mb: 2 }}
                >
                    Download Your Data
                </MotionTypography>
                <MotionGrid container spacing={2}>
                    {downloadOptions.map((option, index) => (
                        <MotionGrid 
                            key={index} 
                            item 
                            xs={12} 
                            sm={4}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    ':hover': {
                                        backgroundColor: 'primary.light',
                                    }
                                }}
                                onClick={option.action}
                            >
                                <Typography variant="body1" fontWeight="bold">
                                    {option.label}
                                </Typography>
                            </Paper>
                        </MotionGrid>
                    ))}
                </MotionGrid>
            </MotionPaper>
        </MotionBox>
    );
};

export default Tool;
