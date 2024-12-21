import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux';


const MotionBox = motion(Box);
const MotionText = motion(Typography);

const ContactUs = () => {
    const mode = useSelector(state => state.feedbacks.Theme);
    return (
        <div id='contact'>
            <Box sx={{
                backgroundColor: mode === 'dark' ? '#121212' : '#f7f7f7',
                color: mode === 'dark' ? 'text.primary' : 'text.secondary',
                py: 6,
                px: 4,
                textAlign: 'center',
            }}>
                <MotionText
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5, ease: 'easeIn' }}
                    viewport={{ once: true }}
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                    }}
                >
                    Contact Us
                </MotionText>
                <MotionText
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5, ease: 'easeIn' }}
                    viewport={{ once: true }}
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        mb: 4,
                        maxWidth: '900px',
                        mx: 'auto',
                    }}
                >
                    Have any questions, suggestions, or feedback? Reach out to us by filling out the form below, and we’ll get back to you as soon as possible.
                </MotionText>

                <MotionBox
                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true }}
                    sx={{
                        maxWidth: '600px',
                        mx: 'auto',
                        mt: 4,
                        p: 4,
                        backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
                        borderRadius: '8px',
                        boxShadow: 3,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                sx={{ input: { color: mode === 'dark' ? '#fff' : '#000' } }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                sx={{ input: { color: mode === 'dark' ? '#fff' : '#000' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Your Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                sx={{ input: { color: mode === 'dark' ? '#fff' : '#000' } }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                padding: '12px 36px',
                                textTransform: 'none',
                            }}
                        >
                            Submit Inquiry
                        </Button>
                    </Box>
                </MotionBox>
            </Box>
        </div>
    )
}

export default ContactUs
