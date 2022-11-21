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

    function switchView () {
        setCatView(!catView)

    }


    const catSwitch = () => {
        if (catView) {
            return (
                <Box>
                    <CatBar />
                    <Routes>
                        <Route path={"/report"} element={ <ReportView baseURLBack={baseURLBack}   /> }/>
                        <Route path={"/view"} element={ <SupervisorView baseURLBack={baseURLBack} /> }/>
                        <Route path={'/'} element={ <LandingPage /> }/>
                    </Routes>
                    <img height={'1%'} width={'1%'} alt={'Cat'} onClick={switchView} src={'/switchCat.jpg'}/>
                </Box>


            );
        }
            else return (

                    <Box>
                        <ButtonAppBar />
                        <Routes>
                            <Route path={"/report"} element={ <ReportView baseURLBack={baseURLBack}   /> }/>
                            <Route path={"/view"} element={ <SupervisorView baseURLBack={baseURLBack} /> }/>
                            <Route path={'/'} element={ <LandingPage /> }/>
                        </Routes>
                        <img height={'1%'} width={'1%'} alt={'Cat'} onClick={switchView} src={'/switchCat.jpg'}/>
                    </Box>


                );

            }



    return (
        catSwitch()
    );
}

export default App;
