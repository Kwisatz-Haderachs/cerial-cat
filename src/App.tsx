import React, {useState} from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import ReportView from "./Pages/ReportView";
import {Route, Routes} from "react-router-dom";
import {Box} from '@mui/material';
import SupervisorView from "./Pages/SupervisorView";
import LandingPage from "./Pages/LandingPage";
import CatBar from "./Components/CatBar";


function App() {

    const [catView, setCatView] = useState(false);
    const [baseURLBack, setBaseURLBack] = useState("http://localhost:8080/Report")

    function switchView() {
        setCatView(!catView)

    }


    const catSwitch = () => {
        if (catView) {
            return (
                <Box>
                    <CatBar switchView={switchView}/>
                    <Routes>
                        <Route path={"/report"} element={<ReportView baseURLBack={baseURLBack}/>}/>
                        <Route path={"/view"} element={<SupervisorView baseURLBack={baseURLBack}/>}/>
                        <Route path={'/'} element={<LandingPage/>}/>
                    </Routes>
                </Box>


            );
        } else return (

            <Box>
                <ButtonAppBar switchView={switchView}/>
                <Routes>
                    <Route path={"/report"} element={<ReportView baseURLBack={baseURLBack}/>}/>
                    <Route path={"/view"} element={<SupervisorView baseURLBack={baseURLBack}/>}/>
                    <Route path={'/'} element={<LandingPage/>}/>
                </Routes>
            </Box>


        );

    }


    return (
        catSwitch()
    );
}

export default App;
