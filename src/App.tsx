import React, {useState} from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import ReportView from "./Pages/ReportView";
import {Route, Routes} from "react-router-dom";
import {Box} from '@mui/material';
import SupervisorView from "./Pages/SupervisorView";
import LandingPage from "./Pages/LandingPage";


function App() {
    const [baseURL, setBaseURL] = useState("http://localhost:8080/Report")

    return (

        <Box>

            <ButtonAppBar/>


            <Routes>
                <Route path={"/report"} element={ <ReportView baseURL={baseURL} /> }/>
                <Route path={"/view"} element={ <SupervisorView baseURL={baseURL}/> }/>
                <Route path={'/'} element={ <LandingPage baseURL={baseURL}/> }/>
            </Routes>

        </Box>


    );
}

export default App;
