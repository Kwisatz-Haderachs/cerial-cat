import * as React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Button, Switch} from '@mantine/core';
import IconButton from '@mui/material/IconButton';
import {IconPaw, IconHandStop} from "@tabler/icons";



export default function CatBar() {
    const audio = new Audio("/catSound.wav");
    audio.oncanplaythrough = function () {
        audio.play();
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: '#2C2E33', justifyContent: 'center'}}>
                    <Switch onLabel={<IconPaw/> } offLabel={<IconHandStop />}/>

                    <Link style={{margin: '10px', textDecoration: "initial", color: "inherit"}} to={"/report"}>
                        <img alt={'Cat'} height='100px' width={'100px'} src={'/catreport.jpg'}/>
                    </Link>


                    <Link onClick={() => {
                        audio.play()
                    }} style={{textDecoration: "initial", color: "inherit"}} to={"/view"}>
                        <img alt={'Cat'} height={'50%'} width={'50%'} src='/catlist.jpg'/>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}