import React from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

export default function ReportView() {
    return (
        <Box className="App">
                <h2>Incident Report Form</h2>
            <Stack>
                <h2>Date of Event / Time of Event</h2>
                <h2> Location of Event</h2>
                <h2>Event Type / Harm or Potential Harm</h2>
                <h2> Individuals involved </h2>
                <h2>Type of Event </h2>
                <h2> Effect of this incident on the individuals involved</h2>
                <h2>Witness Name</h2>
                <h2>Departments involved in this incident</h2>
                <h2>What afctions if any...</h2>
                <h2>Patient Name</h2>
                <h2> Patient SSN</h2>
                <h2>Patient Phone</h2>
                <h2> Patient Address</h2>
            </Stack>
        </Box>
    );
}

