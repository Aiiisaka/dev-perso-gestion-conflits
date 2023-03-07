// Material UI Theme type (for theme)
import { createTheme } from '@mui/material/styles'

// Create a theme instance with the theme options.
const theme = createTheme({
    palette: {
        primary: {
            light: '#181716',
            main: '#181716',
            dark: '#FFFFFF',
        },
        secondary: {
            light: '#FFFFFF',
            main: '#FFFFFF',
            dark: '#181716',
        },
        background: {
            default: '#F7F7F7',
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#F6A952',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#F6A952',
            display: 'flex',
            alignItems: 'center',
        },
    },
})

export default theme