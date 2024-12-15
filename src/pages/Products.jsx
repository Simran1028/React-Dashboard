import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Productlist from '../products/Productlist';


export default function Products() {
    return (
        <>
        <div className='bgcolor'>
        <Navbar />
        <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Productlist/>
                   
                </Box>
            </Box>
            </div>
        </>

    )
}
