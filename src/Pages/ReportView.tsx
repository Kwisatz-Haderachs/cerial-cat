import React from 'react';
import {TextInput, Select, Checkbox, MultiSelect} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import {Grid, Stack, Box} from "@mui/material";


export default function ReportView() {

    const departments = [
        {value: 'Ambulatory Care'},
        {value: 'Behavioral/Mental Health'},
        {value: 'Dental'},
        {value: 'Emergency Care'},
        {value: 'Information Management'},
        {value: 'Laboratory'},
        {value: 'Logistics'},
        {value: 'Medicine'},
        {value: 'Nursing'},
        {value: 'OB/GYN'},
        {value: 'Pediatrics'},
        {value: 'Pharmacy'},
        {value: 'Radiology'},
        {value: 'Surgery'},
        {value: 'Other'}
    ];

    // const individualsInvolved = [
    //     {value: 'Patient'},
    //     {value: 'Family Member - Adult'},
    //     {value: 'Family Member - Child'},
    //     {value: 'Staff Member'},
    //     {value: 'Visitor'},
    //     {value: 'Volunteer'},
    //     {value: 'Other'}
    // ];

    const eventsType = [
        {value: 'Adverse Drug Reaction'},
        {value: 'AMA/ Left without being seen'},
        {value: 'Assault'},
        {value: 'Blood Products Related'},
        {value: 'Delay in Diagnosis / Treatment / Transfer'},
        {value: 'Equipment/Supply Problem'},
        {value: 'Exposure to Blood / Bodily Fluids'},
        {value: 'Facility /  Physical Plant Problem'},
        {value: 'Fall'},
        {value: 'Infant Abduction'},
        {value: 'Infant Discharged to Wrong Family'},
        {value: 'Laboratory Related'},
        {value: 'Medication Related'},
        {value: 'Needle Stick / Sharp Injury'},
        {value: 'Obstetrics Related'},
        {value: 'Operative / Invasive Procedure Related'},
        {value: 'Property Damaged / Destroyed'},
        {value: 'Property Lost / Stolen'},
        {value: 'Radiology Related'},
        {value: 'Rape'},
        {value: 'Restrained Patient Injury'},
        {value: 'Suicide in a 24 Hour Facility'},
        {value: 'Other'}
    ];



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

        validate: {
            dateOfEvent: (value) => (/^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/.test(value) ? null : "Invalid date"),
            timeOfEvent: (value) =>  (/^(00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/.test(value) ? null : "Invalid Time" ),
            locationOfEvent: (value) => (value.length < 8 ? 'Location input is too short' : null),
            witness: (value) => (value.length < 4 ? 'Please enter first and last name' : null),
            description:(value) => (value.length < 15 ? 'Enter a more detailed description' : null),
            actions:(value) => (value.length < 15 ? 'Enter more detailed action' : null),
            patientName:(value) => (value.length < 3 ? 'Enter full name' : null),
            patientPhone:(value) => (/^1?-?\(?[0-9]{3}[\-\)][0-9]{3}-[0-9]{4}$/.test(value) ? null : "Invalid Number" ),
            patientSSN:(value) => (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value) ? null : "Invalid SSN" ),
            patientAddress: (value) => (value.length < 10 ? 'Enter full Address' : null),
        }

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
                            withAsterisk
                            label="Harm"
                            data={[
                                {value: 'Harm', label: "Harm"},
                                {value: 'Potential Harm', label: "Potential Harm"}
                            ]}
                            onChange={(event: string ) => report.setFieldValue('harm', (event === 'Harm'))}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Checkbox label="Patient" onChange={() =>  report.insertListItem('individuals', "Patient")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Staff Member" onChange={() =>  report.insertListItem('individuals', "Staff Member")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Family Member - Adult" onChange={() =>  report.insertListItem('individuals', "Family Member - Adult")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Visitor" onChange={() =>  report.insertListItem('individuals', "Visitor")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Family Member - Child" onChange={() =>  report.insertListItem('individuals', "Family Member - Child")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Volunteer" onChange={() =>  report.insertListItem('individuals', "Volunteer")}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Other" onChange={() =>  report.insertListItem('individuals', "Other")}/>
                    </Grid>
                </Grid>
                <Box>
                    <MultiSelect
                        data={eventsType}
                        placeholder="Select Type of Event"
                        label="Type of Event"
                    />
                </Box>
                <Box>
                    <Select
                        withAsterisk
                        label="Effect of Incident"
                        data={[
                            {value: 'Harm sustained', label: "Harm"},
                            {value: 'Potential Harm', label: "Potential Harm"}
                        ]}
                        onChange={(event: string ) => report.setFieldValue('effectOfIncident', (event === 'Harm'))}
                    />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextInput
                            withAsterisk
                            label='Witness'
                            onChange={(event ) => report.insertListItem('witness', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            withAsterisk
                            label='Witness Number'
                            onChange={(event ) => report.insertListItem('witnessNumbers', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            label='Witness'
                            onChange={(event ) => report.insertListItem('witness', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            label='Witness Number'
                            onChange={(event ) => report.insertListItem('witnessNumbers', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            label='Witness'
                            onChange={(event ) => report.insertListItem('witness', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            label='Witness Number'
                            onChange={(event ) => report.insertListItem('witnessNumbers', event.target.value)}
                        >
                        </TextInput>
                    </Grid>
                </Grid>
                <Box>
                    <MultiSelect
                        data={departments}
                        placeholder="Select Departments"
                        label="Departments Involved"
                        />
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Description'
                        onChange={(event ) => report.setFieldValue('description', event.target.value)}
                    >
                    </TextInput>
                </Box>
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
                    <h2> Submit </h2>
                </Box>
            </Stack>
        </Box>
    );
}

