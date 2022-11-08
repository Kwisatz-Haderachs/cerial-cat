import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import ReportView from "./ReportView";
import ReactDOM from "react-dom/client";
import {Route, Routes} from "react-router-dom";
import {Box} from '@mui/material';
import SupervisorView from "./SupervisorView";
import LandingPage from "./LandingPage";


function App() {
    return (

        <Box>
            <ButtonAppBar/>
            <Routes>
                <Route path={"/report"} element={<ReportView/>}/>
                <Route path={"/view"} element={<SupervisorView/>}/>
                <Route path={'/'} element={<LandingPage/>}/>
            </Routes>

        </Box>


    );
}

export default App;
