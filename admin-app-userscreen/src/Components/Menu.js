import { BorderColor, Category, Dashboard, Group, PartyMode, Payments, Quiz, Rowing, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Menu = () => {
    return (
        <Box padding={2} flex={1} sx={{ display: { xs: 'none', sm: 'block' } }} >
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="DashBoard" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Store />
                            </ListItemIcon>
                            <ListItemText primary="Company & Co-Workers" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Category />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <BorderColor />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Quiz />
                            </ListItemIcon>
                            <ListItemText primary="Help Desk" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Payments />
                            </ListItemIcon>
                            <ListItemText primary="Payment" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Rowing />
                            </ListItemIcon>
                            <ListItemText primary="Performance" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PartyMode />
                            </ListItemIcon>
                            <ListItemText primary="Buyer Request" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}

export default Menu