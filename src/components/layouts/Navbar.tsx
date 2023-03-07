// Next imports
import Image from 'next/image'

// Material UI imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'

// Material UI icons imports
import MenuIcon from '@mui/icons-material/Menu'

// React imports
import { useState } from 'react'

// Get pages (for navbar / navigation in the website)
const pages = [
    { name: 'Les étapes', href: '#steps' },
    { name: 'Les outils', href: '#tools' },
    { name: 'Les erreurs', href: '#errors' },
]

// Navbar component
export default function Navbar() {    
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar component="nav" color="secondary">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Link href="/" rel="preload">
                        <Image src="/img/conflits_logo.png" title="Logo comment gérer un conflit" alt="Logo comment gérer un conflit" width={200} height={60} priority className={'image'} />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-around' }} >
                        {pages.map((page, index) => (
                            <Link href={page.href} key={index} underline="none" variant="body1" color="primary" rel="preload">
                                {page.name}
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }} >
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            edge="end"
                            color="inherit"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon color="primary" />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <Link href={page.href} key={index} underline="none" variant="body1" color="primary" rel="preload">
                                    <MenuItem onClick={handleCloseNavMenu} key={index} >{page.name}</MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    )
}
