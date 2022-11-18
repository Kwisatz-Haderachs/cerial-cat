import React, {useState} from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import ReportView from "./Pages/ReportView";
import {Route, Routes} from "react-router-dom";
import {Box} from '@mui/material';
import SupervisorView from "./Pages/SupervisorView";
import LandingPage from "./Pages/LandingPage";


function App() {
    const [baseURLBack, setBaseURLBack] = useState("http://localhost:8080/Report")
    const [baseURLFront, setBaseURLFront] = useState("http://localhost:3000")

    return (

        <Box>

            <ButtonAppBar/>

            <Routes>
                <Route path={"/report"} element={ <ReportView baseURLFront={baseURLFront} baseURLBack={baseURLBack}   /> }/>
                <Route path={"/view"} element={ <SupervisorView baseURLFront={baseURLFront} baseURLBack={baseURLBack} /> }/>
                <Route path={'/'} element={ <LandingPage baseURLFront={baseURLFront} baseURLBack ={baseURLBack}  /> }/>
            </Routes>

        </Box>


    );
}

export default App;
