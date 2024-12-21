import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import HeroImage from '../../Images/Hero.webp';
import React from 'react'
import { useSelector } from 'react-redux';

const MotionText = motion(Typography);

const Hero = () => {
  const mode = useSelector(state => state.feedbacks.Theme);
  return (
        <div>
            <Box
                sx={{
                    backgroundImage: `url(${HeroImage})`,
                    height: '100vh',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: 'blur(2px)',
                        backgroundColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                        zIndex: 1,
                    }}
                />
                <Box sx={{ zIndex: 2, p: 4 }}>
                    <MotionText
                        initial={{ opacity: 0, y: -500, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        variant="h2"
                        component="h2"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            fontSize: { xs: '2rem', sm: '3rem', md: '3rem' },
                            mb: 5,
                        }}
                    >
                        Scrape Website Data Very Quickly With Us
                    </MotionText>
                    <MotionText
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        viewport={{ once: true }}
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.2rem' },
                            mb: 4,
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Discover the fastest way to scrape website data and integrate it seamlessly into your projects. Start using our tool now!
                    </MotionText>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            padding: '15px 40px',
                            textTransform: 'none',
                        }}
                    >
                        Start Using the Tool
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Hero
