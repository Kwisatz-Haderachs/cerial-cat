import React, { useState } from 'react';
import './App.css';
import Box from "@mui/material/Box";
import {Grid, Stack, TextField} from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {ChangeEvent} from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ReportForm} from "../Components/ReportForm";
type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
type InputArgs = ReportForm & Omit<ReactInput, keyof ReportForm>


export default function ReportView{

    interface

    const[dateEvent, setDateEvent] = useState("")


    const Input =
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
                                value={dateEvent}
                                //(e: React.ChangeEvent<HTMLInputElement>): void
                                onChange={() => {handleInputChange}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <TimePicker
                            label="Time"
                            value={value}
                            name = "timeOfEvent"
                            onChange={() => handleInputChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            <Box>
                <TextField variant='filled' label='Location of event' onChange={(e)=>{setReport(({...report,["locationOfEvent"]:e.target.value}))}}></TextField>
            </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'false'}
                                label="Incident Type"
                                onChange={(e)=>{setReport({...report, ["eventType"]: e.target.value})}}
                            >
                                <MenuItem value={"true"}>Actual Event/Incident</MenuItem>
                                <MenuItem value={"false"}>Near Miss/CloseCall</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"false"}
                                label="harm"
                                onChange={(e)=>{setReport({...report, ["harm"]: e.target.value})}}
                            >
                                <MenuItem value={"true"}>Actual Event/Incident</MenuItem>
                                <MenuItem value={"false"}>Near Miss/CloseCall</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
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

