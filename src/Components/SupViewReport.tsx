import React, {useEffect, useState} from "react";
import {Box, Grid, Stack} from "@mui/material";
import {Button, MultiSelect, Select, Textarea} from "@mantine/core";
import axios from "axios";



export default function SupViewReport(props: any) {
    const [report, setReport] = useState(props.itemView)


    async function handleClick () {
        console.log('This has been sent to Nik')

        let witnessNames = [report.witness1, report.witness2, report.witness3 ]
        let witnessNumbers = [report.witnessNumbers1, report.witnessNumbers2, report.witnessNumbers3]

        await axios.post("http://localhost:8080/Report", {
            "dateTime": report.dateTime,
            "location": report.locationOfEvent,
            "eventType": report.eventType,
            "harm": report.harm,
            "individualsInvolved": report.individuals,
            "eventCategory": report.typeOfEvent,
            "incidentEffect": report.effectOfIncident,
            "witnessName": witnessNames,
            "witnessTelephone": witnessNumbers,
            "departmentsInvolved": report.departmentsInvolved,
            "description": report.description,
            "action": report.actions,
            "patientName": report.patientName,
            "patientPhone": report.patientPhone,
            "patientSSN": report.patientSSN,
            "patientAddress": report.patientAddress
        }).then((response) => {
            console.log(response)

        } ).catch((error) => {
            console.log(error)
        })
        props.setItemView(null);
    }


    return (
        <Grid display={"flex"}  justifyContent={"center"}>
        <Box className="App" sx={{ width: '80%' }}>
                <h2>Incident Report Form</h2>
                <Stack>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                label={"Date of Event"}
                                withAsterisk
                                required
                                defaultValue={report.dateTime}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                required
                                withAsterisk
                                label={"Time of Event"}
                                defaultValue={report.dateTime}
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label='Location of event'
                            value={report.location}
                            //classNames={{ input: classes.invalid }}
                        />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label="Incident Type"
                                value = {report.incidentEffect ? "Actual Event/Incident" : "Near Miss/CloseCall"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label="Harm"
                                value = {report.harm ? "Harm" : "Potential Harm"}
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            value={report.individualsInvolved}
                            placeholder="Individuals"
                            label="Individuals Involved"
                        />
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            placeholder="Select Type of Event"
                            label="Type of Event"
                            value={report.eventCategory}
                        />
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label="Effect of Incident"
                            value = {report.incidentEffect ? "Harm sustained" : "Potential Harm"}
                        />
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label='Witness'
                                value ={report.witnessName[0]}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label='Witness Number'
                                value ={report.witnessTelephone[0]}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness'
                                value ={report.witnessName[1]}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness Number'
                                value ={report.witnessTelephone[1]}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness'
                                value ={report.witnessName[2]}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness Number'
                                value ={report.witnessTelephone[2]}
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            placeholder="Select Departments"
                            label="Departments Involved"
                            value = {report.departmentsInvolved}
                        />
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label='Description'
                            value = {report.description}
                            //classNames={{ input: classes.invalid }}
                        />
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label='Actions'
                            value = {report.actions}
                            //classNames={{ input: classes.invalid }}
                        />
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label='Patient Name'
                            value = {report.patientName}
                            //classNames={{ input: classes.invalid }}
                        />
                    </Box>

                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Textarea
                                    readOnly={true}
                                    withAsterisk
                                    required
                                    label='Patient Phone'
                                    value = {report.patientPhone}
                                    //classNames={{ input: classes.invalid }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Textarea
                                    readOnly={true}
                                    withAsterisk
                                    required
                                    label='Patient SSN'
                                    value = {report.patientSSN}
                                    //classNames={{ input: classes.invalid }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            label='Patient Address'
                            value = {report.patientAddress}
                        />
                    </Box>
                    <Box>
                        <Button style={{backgroundColor: "Green"}} onClick = {()=> {props.setItemView(null)}} >Cancel</Button>
                        <Button onClick = {()=> {handleClick()}}> Send to Command</Button>
                    </Box>
                </Stack>
            </Box>
        </Grid>
        )
}
