import React, {useState} from 'react';
import {Card, CardMedia,Typography, Grid} from "@mui/material";

export default function LandingPage(props: any) {
    const [baseURL, setBaseURL] = useState(props.baseURL)

    let statusCodes = [100, 101, 102, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305,
        307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
        416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499,
        500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599]

    function randomIntFromInterval(min:number, max:number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomStatus():number {
        let x = randomIntFromInterval(0, statusCodes.length-1);
        console.log(x)
        return(statusCodes[x])
    }

    //  <Box justifyContent={'center'} alignItems ={'center'} >
    //                    <img  src={`https://http.cat/${randomStatus()}.jpg`} />
    //                 </Box>
    return(
        <Grid container spacing ={2} sx={{height:"100vh"}}>
            <Grid xs={6} >
                <Card sx={{maxwidth: '50vh'}} >
                    <CardMedia
                        component= "img"
                        height= "100%"
                        image= "https://api.army.mil/e2/c/images/2013/02/13/282084/max1200.jpg"
                        alt=""
                    />
                </Card>
            </Grid>
            <Grid xs={6} >
                <Card sx={{maxwidth: '50vh'}}>
                    <CardMedia
                        component= "img"
                        height= "100%"
                        image = "https://media.defense.gov/2018/Aug/30/2001960763/-1/-1/0/180824-F-SK378-0057.JPG"
                        alt = ""
                    />
                </Card>
            </Grid>
            <Grid xs={12} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                <Typography
                    fontFamily={"Roboto"}
                    //fontWeight={"Bold"}
                    fontStyle={"Underline"}
                    variant="h1" > Serious Incident Report</Typography>
            </Grid>
            <Grid xs={6} >
                <Card sx={{maxwidth: '50vh'}}>
                    <CardMedia
                        component="img"
                        height="100%"
                        src = "/img/bradley.png"
                        alt=""
                    />
                </Card>
            </Grid>
            <Grid xs={6} >
                <Card sx={{maxwidth: '50vh'}}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image = "https://warontherocks.com/wp-content/uploads/2018/10/rasmussen2-1024x662.jpg"
                        alt=""
                    />
                </Card>
            </Grid>
        </Grid>
    )
}
