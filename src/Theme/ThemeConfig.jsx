import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import useFeedBacks from '../redux/Providers/FeedBacksProviders';

const ThemeConfig = ({ children }) => {
    const { theme_mode } = useFeedBacks();

    const lightThemePalette = {
        mode: 'light',
        background: {
            default: '#E3F2FD',
            paper: '#FFFFFF',
        },
        primary: {
            light: '#81D4FA',
            main: '#0288D1',
            dark: '#01579B',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#80DEEA',
            main: '#00ACC1',
            dark: '#00796B',
            contrastText: '#000000',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
        error: {
            main: '#D32F2F',
        },
        success: {
            main: '#388E3C',
        },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#0288D1',
        },
    };

    const darkThemePalette = {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1D1D1D',
        },
        primary: {
            light: '#4FC3F7',
            main: '#0288D1',
            dark: '#01579B',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#80DEEA',
            main: '#00ACC1',
            dark: '#00796B',
            contrastText: '#000000',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#B0BEC5',
        },
        error: {
            main: '#D32F2F',
        },
        success: {
            main: '#388E3C',
        },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#0288D1',
        },
    };

    const theme = createTheme({
        palette: theme_mode === 'dark' ? darkThemePalette : lightThemePalette,
        typography: {
            fontFamily: "'Roboto', 'Arial', sans-serif",
            fontSize: 14,
            h1: { fontSize: '3rem', fontWeight: 700 },
            h2: { fontSize: '2.5rem', fontWeight: 600 },
            h3: { fontSize: '2rem', fontWeight: 500 },
            body1: { fontSize: '1rem', color: 'text.primary' },
            body2: { fontSize: '0.875rem', color: 'text.secondary' },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme_mode === 'light' ? '#0288D1' : '#01579B',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    contained: {
                        backgroundColor: '#0288D1',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#01579B',
                        },
                    },
                    outlined: {
                        borderColor: '#0288D1',
                        color: '#0288D1',
                        '&:hover': {
                            borderColor: '#01579B',
                            backgroundColor: 'rgba(2, 136, 209, 0.08)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme_mode === 'dark' ? '#1D1D1D' : '#FFFFFF',
                        boxShadow: theme_mode === 'dark'
                            ? '0px 4px 15px rgba(0, 0, 0, 0.6)'
                            : '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#0288D1',
                            },
                            '&:hover fieldset': {
                                borderColor: '#01579B',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#0288D1',
                            },
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeConfig;
