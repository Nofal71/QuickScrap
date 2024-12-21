import React from 'react';
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import { GitHub, LinkedIn, Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        py: 4,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body2">
            We are passionate about creating the best scraping tools for businesses and individuals alike.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <Link href="#about" sx={{ display: 'block', color: 'inherit', mb: 1 }}>
            About Us
          </Link>
          <Link href="#contact" sx={{ display: 'block', color: 'inherit', mb: 1 }}>
            Contact Us
          </Link>
          <Link href="#" sx={{ display: 'block', color: 'inherit', mb: 1 }}>
            Privacy Policy
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body2">Email: support@yourwebsite.com</Typography>
          <Typography variant="body2">Phone: +123-456-7890</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                width: 40,
                height: 40,
                marginRight: 1,
              }}
            >
              <GitHub />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                width: 40,
                height: 40,
                marginRight: 1,
              }}
            >
              <LinkedIn />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                width: 40,
                height: 40,
                marginRight: 1,
              }}
            >
              <Facebook />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                width: 40,
                height: 40,
              }}
            >
              <Twitter />
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
