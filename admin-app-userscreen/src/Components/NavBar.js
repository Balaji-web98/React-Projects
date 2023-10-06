import { AppBar, Avatar, Badge, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { NotificationsActive } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const NavBar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h5'>CONSTRUCSHARE </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: "20px" }}>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="primary">
                        <NotificationsActive color="action" />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg" />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default NavBar