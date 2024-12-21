import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import AboutUs from '../../Components/page-components/AboutUs';
import ContactUs from '../../Components/page-components/ContactUs';
import Hero from '../../Components/page-components/Hero';
import Footer from '../../Components/page-components/Footer';



const MotionBox = motion(Box);

const Home = () => {
  const mode = useSelector(state => state.feedbacks.Theme);

  return (
    <>
      <Hero />
      <MotionBox
        initial={{ opacity: 0, scale: 0.5, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
        sx={{
          backgroundColor: mode === 'dark' ? '#121212' : '#f7f7f7',
          color: mode === 'dark' ? 'text.primary' : 'text.secondary',
          py: 6,
          px: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          What is Web Scraping?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            mb: 6,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          Web scraping is the process of automatically extracting data from websites. It allows you to collect valuable information from the internet in a structured and organized format, without the need for manual data entry. Whether you're gathering pricing details, product data, or even news articles, web scraping enables businesses and individuals to save time and effort.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          Why Choose Our Tool?
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: 3,
          flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.5, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeIn', delay: 0.75 }}
            viewport={{ once: true }}
            sx={{
              backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
              p: 4,
              borderRadius: '10px',
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>No Coding Required</Typography>
            <Typography variant="body1">
              Our tool is designed for everyone, regardless of coding experience. You can easily scrape data with just a few clicks, and it's completely free to use.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn', delay: 0.75 }}
            viewport={{ once: true }}
            sx={{
              backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
              p: 4,
              borderRadius: '10px',
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Seamless Data Downloads</Typography>
            <Typography variant="body1">
              Easily download the scraped data in various formats, such as CSV, Excel, or JSON, making it convenient for use in your projects or reports.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeIn', delay: 0.75 }}
            viewport={{ once: true }}
            sx={{
              backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
              p: 4,
              borderRadius: '10px',
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Fast and Reliable</Typography>
            <Typography variant="body1">
              Our web scraping tool is optimized for speed and reliability, ensuring that you can scrape the data you need quickly and efficiently without any delays.
            </Typography>
          </MotionBox>
        </Box>


        <Box sx={{ mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: '15px 40px',
              textTransform: 'none',
            }}
          >
            Get Started Now
          </Button>
        </Box>
      </MotionBox >

      <AboutUs />
      <ContactUs />
      <Footer />

    </>
  );
};

export default Home;
