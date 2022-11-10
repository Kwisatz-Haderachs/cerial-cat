import React from 'react';
import { z } from 'zod';
import {TextInput, Select, Checkbox, MultiSelect, Button, createStyles} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { useForm, zodResolver } from '@mantine/form';
import {Grid, Stack, Box} from "@mui/material";




export default function ReportView() {

    const date = (new Date(), 'yyyy-MM-dd hh:mm:ss', 'en_US')

    const departments = [
        {value: 'Ambulatory Care', label: 'Ambulatory Care'},
        {value: 'Behavioral/Mental Health', label: 'Behavioral/Mental Health'},
        {value: 'Dental', label: 'Dental'},
        {value: 'Emergency Care', label: 'Emergency Care'},
        {value: 'Information Management', label: 'Information Management'},
        {value: 'Laboratory', label: 'Laboratory'},
        {value: 'Logistics', label: 'Logistics'},
        {value: 'Medicine', label: 'Medicine'},
        {value: 'Nursing', label: 'Nursing'},
        {value: 'OB/GYN', label: 'OB/GYN'},
        {value: 'Pediatrics', label: 'Pediatrics'},
        {value: 'Pharmacy', label: 'Pharmacy'},
        {value: 'Radiology', label: 'Radiology'},
        {value: 'Surgery', label: 'Surgery'},
        {value: 'Other', label: 'Other'}
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
        {value: 'Adverse Drug Reaction', label: 'Adverse Drug Reaction'},
        {value: 'AMA/ Left without being seen', label: 'AMA/ Left without being seen'},
        {value: 'Assault', label: 'Assault'},
        {value: 'Blood Products Related', label: 'Blood Products Related'},
        {value: 'Delay in Diagnosis / Treatment / Transfer', label: 'Delay in Diagnosis / Treatment / Transfer'},
        {value: 'Equipment/Supply Problem', label: 'Equipment/Supply Problem'},
        {value: 'Exposure to Blood / Bodily Fluids', label: 'Exposure to Blood / Bodily Fluids'},
        {value: 'Facility /  Physical Plant Problem', label: 'Facility /  Physical Plant Problem'},
        {value: 'Fall', label: 'Fall'},
        {value: 'Infant Abduction', label: 'Infant Abduction'},
        {value: 'Infant Discharged to Wrong Family', label: 'Infant Discharged to Wrong Family'},
        {value: 'Laboratory Related', label: 'Laboratory Related'},
        {value: 'Medication Related', label: 'Medication Related'},
        {value: 'Needle Stick / Sharp Injury', label: 'Needle Stick / Sharp Injury'},
        {value: 'Obstetrics Related', label: 'Obstetrics Related'},
        {value: 'Operative / Invasive Procedure Related', label: 'Operative / Invasive Procedure Related'},
        {value: 'Property Damaged / Destroyed', label: 'Property Damaged / Destroyed'},
        {value: 'Property Lost / Stolen', label: 'Property Lost / Stolen'},
        {value: 'Radiology Related', label: 'Radiology Related'},
        {value: 'Rape', label: 'Rape'},
        {value: 'Restrained Patient Injury', label: 'Restrained Patient Injury'},
        {value: 'Suicide in a 24 Hour Facility', label: 'Suicide in a 24 Hour Facility'},
        {value: 'Other', label: 'Other'}
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
        validateInputOnChange: true,

        validate: {
            //dateOfEvent: (value) => (/^(2\d{3}-(0[1-9]|1[0-9])-(0[1-9]|[12]\d|3[01]))/.test(value.toLocaleString()) ? null : "Invalid date"),
            //timeOfEvent: (value) =>  (/^(00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/.test(value) ? null : "Invalid Time" ),
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

    type FormValues = typeof report.values;

    function convertDate(inputFormat: string) {
        function pad(s: number) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [pad(d.getFullYear()), pad(d.getMonth()+1), d.getDate()].join('-')
    }

    function convertTime(inputFormat: string) {

        var t = new Date(inputFormat)
        return (`${t.getHours()}:${t.getMinutes()}`)
    }


    function handleSubmit(values: FormValues) {
        console.log(values);
        report.isValid();
        report.validate();
        //report.errors;
        console.log("Validated")
        let date = convertDate(values.dateOfEvent)
        let time = convertTime(values.timeOfEvent)
        console.log(time)
        console.log(date)
        console.log(report)
        //post request
    }


    return (

        <Box className="App">
            <form onSubmit={report.onSubmit(
                //report.validate,
                handleSubmit
            )}>
            <h2>Incident Report Form</h2>
            <Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DatePicker
                                label={"Date of Event"}
                                inputFormat={"YYYY-MM-DD"}
                                withAsterisk
                                required
                                defaultValue={date}
                                {...report.getInputProps(('dateOfEvent'))}

                                //onChange={(event :Date) => report.setFieldValue('dateOfEvent', event.toDateString())}
                             />
                        </Grid>
                        <Grid item xs={6}>
                        <TimeInput
                            withAsterisk
                            required
                            label={"Time of Event"}
                            defaultValue={date}
                            {...report.getInputProps(('timeOfEvent'))}
                            // onChange={(event :Date) => report.setFieldValue('timeOfEvent', event.toDateString())}
                        />
                        </Grid>
                    </Grid>
            <Box>
                <TextInput
                    withAsterisk
                    label='Location of event'
                    onChange={(event ) => report.setFieldValue('locationOfEvent', event.target.value)}
                    //classNames={{ input: classes.invalid }}
                >
                </TextInput>
            </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Select
                            withAsterisk
                            label="Incident Type"
                            data={[
                                {value: true, label: "Actual Event/Incident"},
                                {value: false, label: "Near Miss/CloseCall"}
                            ]}
                            {...report.getInputProps('eventType')}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            withAsterisk
                            label="Harm"
                            data={[
                                {value: true, label: "Harm"},
                                {value: false, label: "Potential Harm"}
                            ]}
                            {...report.getInputProps('harm')}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Checkbox label="Patient"   {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Staff Member"  {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Family Member - Adult"   {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Visitor"   {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Family Member - Child"   {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Volunteer" {...report.getInputProps('individuals')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox label="Other" {...report.getInputProps('individuals')}/>
                    </Grid>
                </Grid>
                <Box>
                    <MultiSelect
                        withAsterisk
                        data={eventsType}
                        placeholder="Select Type of Event"
                        label="Type of Event"
                        {...report.getInputProps('typeOfEvent')}
                    />
                </Box>
                <Box>
                    <Select
                        withAsterisk
                        label="Effect of Incident"
                        data={[
                            {value: true, label: "Harm sustained"},
                            {value: false, label: "Potential Harm"}
                        ]}
                        {...report.getInputProps('effectOfIncident')}

                        //onChange={(event: string ) => report.setFieldValue('effectOfIncident', (event === 'Harm'))}
                    />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextInput
                            withAsterisk
                            label='Witness'
                            {...report.getInputProps('witness')}
                        >
                        </TextInput>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput
                            withAsterisk
                            label='Witness Number'
                            {...report.getInputProps('witnessNumbers')}
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
                        withAsterisk
                        data={departments}
                        placeholder="Select Departments"
                        label="Departments Involved"
                        {...report.getInputProps('departmentsInvolved')}
                        />
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Description'
                        {...report.getInputProps('description')}
                        //classNames={{ input: classes.invalid }}
                    >
                    </TextInput>
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Actions'
                        {...report.getInputProps('actions')}
                        //classNames={{ input: classes.invalid }}
                    >
                    </TextInput>
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Patient Name'
                        {...report.getInputProps('patientName')}
                        //classNames={{ input: classes.invalid }}
                    >
                    </TextInput>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextInput
                                withAsterisk
                                label='Patient Phone'
                                {...report.getInputProps('patientPhone')}
                                //classNames={{ input: classes.invalid }}
                            >
                            </TextInput>
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                withAsterisk
                                label='Patient SSN'
                                {...report.getInputProps('patientSSN')}
                                //classNames={{ input: classes.invalid }}
                            >
                            </TextInput>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <TextInput
                        withAsterisk
                        label='Patient Address'
                        {...report.getInputProps('patientAddress')}
                    >
                    </TextInput>
                </Box>
                <Box>
                    <Button style={{backgroundColor: "Green"}} type={"submit"} >Submit</Button>
                </Box>
            </Stack>
            </form>
        </Box>
    );
}
// const useStyles = createStyles((theme) => ({
//     invalid: {
//         backgroundColor:
//             theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0],
//     },
//
//     icon: {
//         color: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 6],
//     },
// }));
//
// const { classes } = useStyles();

