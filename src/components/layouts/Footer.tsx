import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
    return (
        <Box sx={{ p: '1rem', backgroundColor: '#181716', color: '#FFFFFF' }}>
            <Typography component="p" variant="body1" sx={{ textAlign: 'center' }}>
                {`© 2023 - Gestion des conflits - Comment résoudre des conflits ? - Maud LEFORT`}
            </Typography>
        </Box>
    )
}