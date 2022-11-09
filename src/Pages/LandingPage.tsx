import React from 'react';
import './App.css';
import ButtonAppBar from "../Components/AppBar";
import Box from "@mui/material/Box";
import {List, Stack} from "@mui/material";

export default function LandingPage() {

    return(
        <Box justifyContent={'center'} display={'flex'}>
           <img  src={"/cat.gif"} />
        </Box>

    )
}