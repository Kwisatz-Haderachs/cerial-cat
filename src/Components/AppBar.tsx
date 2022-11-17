import * as React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mantine/core';
import IconButton from '@mui/material/IconButton';

import { createTheme } from '@mui/material/styles';


export default function ButtonAppBar() {


    const theme = createTheme({
        palette: {
            primary: {
                main: '#5A5560',
            },
            secondary: {
                main: '#7b777f',
            },
        },
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">

                <Toolbar sx={{backgroundColor: '#2C2E33' , justifyContent: 'center'}}>

                        <Link style={{margin:'10px', textDecoration:"initial", color:"inherit"}} to={"/report"}>
                            <Button sx={{color: '#FAED26'}} color="gray"> Make New Report </Button>
                        </Link>


                        <Link style={{textDecoration:"initial", color:"inherit"}} to={"/view"}>
                            <Button sx={{color: '#FAED26'}} color="gray"> View All Reports </Button>
                        </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}