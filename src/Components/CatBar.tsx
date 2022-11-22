import * as React from 'react';
import {Link} from "react-router-dom";
import { Grid, Switch, Text} from '@mantine/core';
import {IconPaw, IconHandStop, IconHome} from "@tabler/icons";
import {createTheme} from "@mui/material/styles";
import {_BackgroundImage} from "@mantine/core/lib/BackgroundImage/BackgroundImage";



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
            <Link style={{marginLeft:'1vw',marginTop:'3vh', display:'flex', alignItems:'center', paddingBottom:'3vh'}}  to={""}>
                     <IconHome style={{color: 'white'}}/>
                     <Text 
                     align='center'
                      c="white" 
                      size='xl' 
                      weight='500' 
                      sx={{ paddingLeft: '2vw', marginBottom: '1vh', marginTop:"1vh"}}>
                        SIR Reporting Home
                        </Text>
                    </Link>
                   
              
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
                <Switch size='md' sx={{ marginBottom:'1vh',marginRight:'3vw'}} checked={true} onLabel={<IconPaw/>} offLabel={<IconHandStop/>} onClick={props.switchView}/>
                </Grid>
            </Grid.Col>
        </Grid>
    );
}