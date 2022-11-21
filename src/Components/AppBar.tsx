import * as React from 'react';
import {Link} from "react-router-dom";
import {Button, Flex, Grid, Switch} from '@mantine/core';
import {createTheme} from '@mui/material/styles';
import {IconHandStop, IconPaw, IconHome} from "@tabler/icons";




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


        <Grid sx={{backgroundColor: '#2C2E33'}} align={'center'}>
            <Grid.Col  span={'auto'}>
                <div style={{alignContent:'center',marginTop:'10px'}}>
                    <Link style={{padding:'10px',alignContent:'center'}}  to={""}>
                     <IconHome style={{color: 'white'}}/>
                    </Link>
                    SIR Reporting Home
                </div>
            </Grid.Col>
            <Grid.Col span={'content'} sx={{marginTop:'10px'}}>
                <Link style={{margin: '10px', textDecoration: "initial", color: "inherit"}} to={"/report"}>
                    <Button sx={{color: '#FAED26'}} color="gray"> Make New Report </Button>
                </Link>
                <Link style={{textDecoration: "initial", color: "inherit"}} to={"/view"}>
                    <Button sx={{color: '#FAED21'}} color="gray"> View All Reports </Button>
                </Link>

            </Grid.Col>
        <Grid.Col span={'auto'} >
            <Grid
                justify={'flex-end'}
                >
                <Switch sx={{padding:'10px'}} onLabel={<IconPaw/>} offLabel={<IconHandStop/>} onClick={props.switchView}/>
            </Grid>
        </Grid.Col>
        </Grid>


    );
}