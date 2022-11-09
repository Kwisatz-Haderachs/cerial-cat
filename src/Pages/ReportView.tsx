import React, { useState } from 'react';
import './App.css';
import {TextInput} from '@mantine/core'
import { DatePicker, TimeInput } from '@mantine/dates';
import Box from "@mui/material/Box";
import {Grid, Stack, TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {ChangeEvent} from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ReportForm, useReportForm} from "../Components/ReportForm";


export default function ReportView {

    const blankReport: ReportForm = {
        dateOfEvent: "",
        timeOfEvent: "",
        locationOfEvent: "",
        eventType: false,
        harm: false,
        individuals: [],
        typeOfEvent: [],
        effectOfIncident: false,
        witness: [],
        witnessNumbers: [],
        departmentsInvolved: [],
        description: "",
        actions: "",
        patientName: "",
        patientPhone: "",
        patientSSN: "",
        patientAddress: "",
    }

    const { onDateChange, onSelectChange, onTextChange, onSubmit, values } = useReportForm(
        submitReportCallback,
        blankReport,
    );

    async function submitReportCallback(){
        // post values to database
    }


    return (
        <Box className="App">
                <h2>Incident Report Form</h2>
            <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DatePicker
                                label={blankReport.dateOfEvent} withAsterisk
                                defaultValue={new Date()}

                            //     value={Date.now()}
                            //     //(e: React.ChangeEvent<HTMLInputElement>): void
                               onChange={onDateChange}
                            //     renderInput={(params) => <TextField {...params} />}
                             />
                        </Grid>
                        <Grid item xs={6}>
                        <TimeInput
                            label={blankReport.timeOfEvent}
                            inputFormat="HH:MM:SS"
                            value={Date.now()}
                            onChange={onDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </Grid>
                    </Grid>
                </LocalizationProvider>
            <Box>
                <TextField
                    variant='filled'
                    label='Location of event'
                    name={blankReport.locationOfEvent}
                    onChange={onTextChange}></TextField>
            </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Actual/Near</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={blankReport.eventType}
                                label="Incident Type"
                                onChange={onSelectChange}
                            >
                                <MenuItem value={true}>Actual Event/Incident</MenuItem>
                                <MenuItem value={"false"}>Near Miss/CloseCall</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Harm</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={"false"}
                                label="harm"
                                name = {blankReport.harm}
                                onChange={onSelectChange}
                            >
                                <MenuItem value={"true"}>Harm</MenuItem>
                                <MenuItem value={"false"}>Potential Harm</MenuItem>
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

