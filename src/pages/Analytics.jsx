import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Geochart from '../charts/Geochart';
import Piechart from '../charts/Piechart';
import Hchart from '../charts/Hchart'; 
import Countup from 'react-countup';

export default function Analytics() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={65} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container xs={12} spacing={12}>

                            <Grid item xs={4} spacing={2}>
                                <Stack spacing={2}>
                                    <Stack spacing={2} direction="row">
                                        <Card sx={{ minWidth: 60 + '%', height: 115 }} >

                                            <div className='gradient'>
                                                
                                                <Typography gutterBottom variant="body" component="div" sx={{ color: '#fff' }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                    <Countup delay={0.4} end={32000} duration={0.6}/>
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>

                                            </div>

                                        </Card>
                                        <Card sx={{ minWidth: 60 + '%', height: 115 }} >

                                            <div className='gradientlight'>
                                               
                                                <Typography gutterBottom variant="body" component="div" sx={{ color: '#fff' }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <Countup delay={0.6} end={72000} duration={0.8}/>
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </div>

                                        </Card>
                                    </Stack>
                                    <Stack spacing={2} direction="row">
                                        <Card sx={{ minWidth: 60 + '%', height: 115 }} >

                                            <div className='gradient'>
                                                
                                                <Typography gutterBottom variant="body" component="div" sx={{ color: '#fff' }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <Countup delay={0.6} end={12000} duration={0.5}/>
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>

                                            </div>

                                        </Card>
                                        <Card sx={{ minWidth: 60 + '%', height: 115 }} >

                                            <div className='gradientlight'>
                                              
                                                <Typography gutterBottom variant="body" component="div" sx={{ color: '#fff' }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                                                <Countup delay={0.2} end={9000} duration={0.3}/>
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </div>

                                        </Card>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={8} spacing={2}>

                                <Card sx={{ minWidth: 830, height: 247 }}>
                                    <Hchart />

                                </Card>


                            </Grid>

                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 45 + 'vh' }}>

                                   
                                        <Geochart />
                                  

                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 45 + 'vh' }}>

                                 

                                        <Piechart />


                                </Card>
                            </Grid>

                        </Grid>


                    </Box>
                </Box>
            </div>
        </>
    );
}

