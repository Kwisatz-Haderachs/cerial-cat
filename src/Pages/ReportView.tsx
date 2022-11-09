import React, { useState } from 'react';
import './App.css';
import ButtonAppBar from "../Components/AppBar";
import Box from "@mui/material/Box";
// @ts-ignore
import dayjs from 'dayjs';
import {Grid, Stack, TextField} from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ReportView() {
    const[report,setReport]=useState({
        "dateOfEvent":"",
        "timeOfEvent":"",
        "locationOfEvent":"",
        "eventType":false,
        "harm":false,
        "individuals":[],
        "typeOfEvent":[],
        "effectOfIncident":false,
        "witness":[],
        "witnessNumbers":[],
        "departmentsInvolved":[],
        "description":"",
        "actions":"",
        "patientName":"",
        "patientPhone":"",
        "patientSSN":"",
        "patientAdress":""
    })
     const [value, setValue] = React.useState(dayjs('2020-11-08T21:11:54'));

    const handleChange = (newValue: any) => {
        setValue(newValue);
    };

    return (
        <Box className="App">
                <h2>Incident Report Form</h2>
            <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={(e)=>{setReport(({...report,["dateOfEvent"]:e.target.value}))}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TimePicker
                            label="Time"
                            value={value}
                            onChange={(e)=>{setReport(({...report,["timeOfEvent"]:e.target.value}))}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            <Box>
                <TextField variant='filled' label='Location of event' onChange={(e)=>{setReport(({...report,["locationOfEvent"]:e.target.value}))}}></TextField>
            </Box>
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

