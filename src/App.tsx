import React, {useState} from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import ReportView from "./Pages/ReportView";
import {Route, Routes} from "react-router-dom";
import {Box} from '@mui/material';
import SupervisorView from "./Pages/SupervisorView";
import LandingPage from "./Pages/LandingPage";
import CatBar from "./Components/CatBar";
import {useAuth0} from "@auth0/auth0-react";



const App: React.FC = () => {
    const {isAuthenticated} = useAuth0();
    const [catView, setCatView] = useState(false);
    const [baseURLBack, setBaseURLBack] = useState("https://demoshowing8829.herokuapp.com/Report")

    function switchView() {
        setCatView(!catView)

    }



    const catSwitch = () => {
        if (catView) {
            return (
                <Box>
                    <CatBar switchView={switchView}/>
                    {/*<LoginButton></LoginButton>*/}
                    <Routes>
                        <Route path={"/report"} element={<ReportView catView={catView}  baseURLBack={baseURLBack}/>}/>
                        <Route path={"/view"} element={<SupervisorView baseURLBack={baseURLBack} />}/>
                        <Route path={'/'} element={<LandingPage catView={catView}/>}/>
                    </Routes>
                </Box>


            );
        } else return (

            <Box>
                <ButtonAppBar switchView={switchView}/>
                {/*<LoginButton></LoginButton>*/}

                <Routes>
                    <Route path={"/report"} element={<ReportView baseURLBack={baseURLBack}/>}/>
                    <Route path={"/view"} element={<SupervisorView baseURLBack={baseURLBack}/>}></Route>
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
