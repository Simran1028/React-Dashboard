import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';


export default function Settings() {
    return (
        <>
        <Navbar />
        <Box height={60} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div>Settings</div>
                   
                </Box>
            </Box>
        </>

    )
}
