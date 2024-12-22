import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux';


const MotionBox = motion(Box);

const AboutUs = () => {
    const mode = useSelector(state => state.feedbacks.Theme);

    return (
        <div id='about'>
            <MotionBox
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                viewport={{ once: true }}
                sx={{
                    backgroundColor: mode === 'dark' ? '#121212' : '#f7f7f7',
                    color: mode === 'dark' ? 'text.primary' : 'text.secondary',
                    py: 6,
                    px: 4,
                    textAlign: 'center',
                }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                    }}
                >
                    About Us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        maxWidth: '900px',
                        mx: 'auto',
                        mb: 4,
                    }}
                >
                    We are a passionate team of innovators committed to making web scraping simple and accessible for everyone. Our tool is designed for users of all skill levels, empowering you to extract valuable data from any website quickly and easily. Whether you’re a business owner, researcher, or student, we provide you with the fastest way to collect and organize data for your needs. Our platform is completely free to use, with no coding required, so you can get started right away!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        maxWidth: '900px',
                        mx: 'auto',
                    }}
                >
                    Join thousands of satisfied users who trust our tool to scrape data without the hassle. Start exploring today!
                </Typography>
            </MotionBox>
        </div>
    )
}

export default AboutUs
