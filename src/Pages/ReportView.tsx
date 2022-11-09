import React, { useState } from 'react';
import './App.css';
import ButtonAppBar from "../Components/AppBar";
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
type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
type InputArgs = InputProps & Omit<ReactInput, keyof InputProps>

export interface InputProps {
    dateOfEvent: Date,
    timeOfEvent: Date,
    locationOfEvent: string,
    eventType: boolean,
    harm: boolean,
    individuals:[],
    typeOfEvent:[],
    effectOfIncident:boolean,
    witness:[],
    witnessNumbers:[],
    departmentsInvolved:[],
    description:string,
    actions:string,
    patientName:string,
    patientPhone:string,
    patientSSN:string,
    patientAddress:string
}

export const Input = ({
                          dateOfEvent,
                          timeOfEvent,
                          locationOfEvent = "",
                          eventType =false,
                          harm =false,
                          individuals,
                          typeOfEvent,
                          effectOfIncident = false,
                          witness,
                          witnessNumbers,
                          departmentsInvolved,
                          description = "",
                          actions = "",
                          patientName = "",
                          patientPhone = "",
                          patientSSN ="",
                          patientAddress ="",
                          ...rest
                      }: InputArgs & React.InputHTMLAttributes<HTMLInputElement>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, e.target.name);
    };
    return

};


export default function ReportView() {
    const[dateEvent, setDateEvent] = useState("")
    const[report,setReport]=useState({

    })
     const [value, setValue] = React.useState('2020-11-08T21:11:54');

    const handleChange = (newValue: any) => {
        setValue(newValue);
    };

    async function handleInputChange(event : ChangeEvent<HTMLInputElement>){
        const inputName = event.target.name;
        const inputValue = event.target.value
        setReport({...report, [inputName]: inputValue})
    }

    type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
    type InputArgs = InputProps & Omit<ReactInput, keyof InputProps>

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
                                name= "dateOfEvent"
                                //(e: React.ChangeEvent<HTMLInputElement>): void
                                onChange={() => handleInputChange}
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

