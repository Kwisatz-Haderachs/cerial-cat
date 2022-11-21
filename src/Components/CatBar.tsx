import * as React from 'react';
import {Link} from "react-router-dom";
import {Button, Grid, Switch, BackgroundImage} from '@mantine/core';
import {IconPaw, IconHandStop, IconHome} from "@tabler/icons";
import {createTheme} from "@mui/material/styles";
import {_BackgroundImage} from "@mantine/core/lib/BackgroundImage/BackgroundImage";
import {Box} from "@mui/material";


export default function CatBar(props: any) {
    const audio = new Audio("/catSound.wav");
    audio.oncanplaythrough = function () {
        audio.play();
    }


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
        <Grid sx={{backgroundColor: '#2C2E33'}} align={'center'}>
            <Grid.Col span={'auto'}>
                <div style={{alignContent:'center',marginTop:'10px'}}>
                    <Link style={{padding:'10px'}} to={""}>
                        <IconHome style={{color: 'white'}}  />
                    </Link>
                SIR Reporting Home
                </div>
            </Grid.Col>
            <Grid.Col span={'content'}>
                <Link style={{textDecoration: "initial", color: "inherit"}} to={"/report"}>
                    <img className = "catReport"
                        alt="cat button"
                        src={'/catReport1.png'}
                        />
                </Link>
                <Link style={{textDecoration: "initial", color: "inherit"}} to={"/view"}>
                    <img
                        className="catList"
                        alt={"A list of cats"}
                        src='/catList.png'/>
                </Link>
            </Grid.Col>
            <Grid.Col span={'auto'}>
                <Grid justify={"flex-end"} >
                <Switch sx={{padding:'10px'}} checked={true} onLabel={<IconPaw/>} offLabel={<IconHandStop/>} onClick={props.switchView}/>
                </Grid>
            </Grid.Col>
        </Grid>
    );
}