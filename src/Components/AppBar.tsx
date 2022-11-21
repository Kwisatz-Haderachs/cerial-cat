import * as React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Box, Toolbar} from '@mui/material';
import {Button, Switch} from '@mantine/core';

import { createTheme } from '@mui/material/styles';
import {IconHandStop, IconPaw} from "@tabler/icons";


export default function ButtonAppBar(props: any) {


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
                <Switch onLabel={<IconPaw/> } offLabel={<IconHandStop />} onClick={props.switchView}/>

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