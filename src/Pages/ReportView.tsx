import React from 'react';
import {TextInput, Select} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import {Grid, Stack, Box} from "@mui/material";


export default function ReportView() {

    // export interface ReportForm{
    //     dateOfEvent: string,
    //     timeOfEvent: string,
    //     locationOfEvent: string,
    //     eventType: boolean,
    //     harm: boolean,
    //     individuals:[],
    //     typeOfEvent:[],
    //     effectOfIncident:boolean,
    //     witness:[],
    //     witnessNumbers:[],
    //     departmentsInvolved:[],
    //     description:string,
    //     actions:string,
    //     patientName:string,
    //     patientPhone:string,
    //     patientSSN:string,
    //     patientAddress:string
    // }

    const report = useForm({
        initialValues: {
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
        },
    });

    return (
        <Box className="App">
                <h2>Incident Report Form</h2>
            <Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DatePicker
                                label={"Date of Event"}
                                withAsterisk
                                defaultValue={new Date()}
                                onChange={(event :Date) => report.setFieldValue('dateOfEvent', event.toDateString())}
                             />
                        </Grid>
                        <Grid item xs={6}>
                        <TimeInput
                            withAsterisk
                            label={"Time of Event"}
                            defaultValue={new Date()}
                            onChange={(event :Date) => report.setFieldValue('timeOfEvent', event.toDateString())}
                        />
                        </Grid>
                    </Grid>
            <Box>
                <TextInput
                    withAsterisk
                    label='Location of event'
                    onChange={(event ) => report.setFieldValue('locationOfEvent', event.target.value)}
                >
                </TextInput>
            </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Select
                            withAsterisk
                            label="Incident Type"
                            data={[
                                {value: 'Actual Event/Incident', label: "Actual Event/Incident"},
                                {value: 'Near Miss/CloseCall', label: "Near Miss/CloseCall"}
                            ]}
                            onChange={(event: string ) => report.setFieldValue('eventType', (event === 'Actual Event/Incident'))}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            id="demo-simple-select"
                            label="Harm"
                            data={[
                                {value: 'Harm', label: "Harm"},
                                {value: 'Potential Harm', label: "Potential Harm"}
                            ]}
                            onChange={(event: string ) => report.setFieldValue('harm', (event === 'Harm'))}
                        />
                    </Grid>
                </Grid>

                <Box>

                </Box>

                <h2>Type of Event </h2>
                <h2> Effect of this incident on the individuals involved</h2>
                <h2>Witness Name</h2>
                <h2>Departments involved in this incident</h2>
                <h2>What afctions if any...</h2>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Actions'
                        onChange={(event ) => report.setFieldValue('actions', event.target.value)}
                    >
                    </TextInput>
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Patient Name'
                        onChange={(event ) => report.setFieldValue('patientName', event.target.value)}
                    >
                    </TextInput>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextInput
                                withAsterisk
                                label='Patient Phone'
                                onChange={(event ) => report.setFieldValue('patientPhone', event.target.value)}
                            >
                            </TextInput>
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                withAsterisk
                                label='Patient SSN'
                                onChange={(event ) => report.setFieldValue('patientSSN', event.target.value)}
                            >
                            </TextInput>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Patient Address'
                        onChange={(event ) => report.setFieldValue('patientAddress', event.target.value)}
                    >
                    </TextInput>
                </Box>
                <Box>

                </Box>
            </Stack>
        </Box>
    );
}

