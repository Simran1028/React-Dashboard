import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar';
import AccordionDash from '../components/AccordionDash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Barchart from '../charts/Barchart';
import Countup from 'react-countup';

export default function Home() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={65} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + '%', height: 150 }} >

                                        <CardContent className='gradient1'>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                
                                                $<Countup delay={0.6} end={500} duration={0.4}/>K
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                    <Card sx={{ minWidth: 49 + '%', height: 150 }} >

                                        <CardContent className='gradientlight1'>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                
                                                $<Countup delay={0.4} end={900} duration={0.6}/>K
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} >
                                    <Card sx={{ maxWidth: 450 }} >

                                        <div className='gradientlight1'>
                                            <Stack spacing={2} direction='row'>
                                                <div className='iconstyle'>
                                                    <StorefrontIcon />
                                                </div>
                                                <div className='paddingall'>
                                                    <span className='price1'>$203K</span>
                                                    <br />
                                                    <span className='income1'>Total Income</span>
                                                </div>
                                            </Stack>
                                        </div>

                                    </Card>
                                    <Card sx={{ maxWidth: 450 }}>


                                        <Stack spacing={2} direction='row'>
                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='price'>$203K</span>
                                                <br />
                                                <span className='income'>Total Income</span>
                                            </div>
                                        </Stack>


                                    </Card>
                                </Stack>
                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + 'vh' }}>

                                    <CardContent>
                                        <Barchart />
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + 'vh' }}>

                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='price'>All Products</span>

                                        </div>
                                        <AccordionDash />
                                    </CardContent>

                                </Card>
                            </Grid>

                        </Grid>


                    </Box>
                </Box>
            </div>
        </>

    )
}
