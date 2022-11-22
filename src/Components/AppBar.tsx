import * as React from 'react';
import {Link} from "react-router-dom";
import {Button, Text, Grid, Switch} from '@mantine/core';
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
            <Grid.Col span={'content'} sx={{}}>
                <Link style={{margin: '10px', textDecoration: "initial", color: "inherit"}} to={"/report"}>
                    <Button radius='lg' sx={{color: '#FAED26'}} color="gray"> Make New Report </Button>
                </Link>
                <Link style={{textDecoration: "initial", color: "inherit"}} to={"/view"}>
                    <Button radius='lg' sx={{color: '#FAED21'}} color="gray"> View All Reports </Button>
                </Link>

            </Grid.Col>
        <Grid.Col span={'auto'} >
            <Grid
                justify={'flex-end'}
                >
          <Switch size='md' sx={{ marginBottom:'1vh',marginRight:'3vw'}} onLabel={<IconPaw/>} offLabel={<IconHandStop/>} onClick={props.switchView}/>
            </Grid>
        </Grid.Col>
        </Grid>


    );
}