import React, {useState} from "react";
import {Button, MultiSelect, Select, Textarea, Text, Box, Grid, Stack} from "@mantine/core";

export default function SupViewReport(props: any) {
    const [report, setReport] = useState(props.itemView)

    const Commands=[
        {label: 'SWF',value:'SWF'},
        {label: 'AFC',value:'AFC'},
        {label:'HQDA',value:'HQDA'}
    ]

    return (
        <Box  sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                textAlign: 'center',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer'
            })}>
            <Grid grow >
                <Stack>
                    <Grid>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                label={"Date of Event"}
                                withAsterisk
                                required
                                defaultValue={report.dateTime.split(" ")[0]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                required
                                withAsterisk
                                label={"Time of Event"}
                                defaultValue={report.dateTime.split(" ")[1]}
                            />
                        </Grid.Col>
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
                    <Grid>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label="Incident Type"
                                value = {report.incidentEffect ? "Actual Event/Incident" : "Near Miss/CloseCall"}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label="Harm"
                                value = {report.harm ? "Harm" : "Potential Harm"}
                            />
                        </Grid.Col>
                    </Grid>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            value={report.individualsInvolved.map((element: string) => {return " " + element})}
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
                            value={report.eventCategory.map((element: string) => {return " " + element})}
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
                    <Grid>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label='Witness'
                                value ={report.witnessName[0]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                withAsterisk
                                required
                                label='Witness Number'
                                value ={report.witnessTelephone[0]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness'
                                value ={report.witnessName[1]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness Number'
                                value ={report.witnessTelephone[1]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness'
                                value ={report.witnessName[2]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Textarea
                                readOnly={true}
                                label='Witness Number'
                                value ={report.witnessTelephone[2]}
                            />
                        </Grid.Col>
                    </Grid>
                    <Box>
                        <Textarea
                            readOnly={true}
                            withAsterisk
                            required
                            placeholder="Select Departments"
                            label="Departments Involved"
                            value = {report.departmentsInvolved.map((element: string) => {return " " + element})}
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
                        <Grid>
                            <Grid.Col span={6}>
                                <Textarea
                                    readOnly={true}
                                    withAsterisk
                                    required
                                    label='Patient Phone'
                                    value = {report.patientPhone}
                                    //classNames={{ input: classes.invalid }}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Textarea
                                    readOnly={true}
                                    withAsterisk
                                    required
                                    label='Patient SSN'
                                    value = {report.patientSSN}
                                    //classNames={{ input: classes.invalid }}
                                />
                            </Grid.Col>
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
                    <Text size="sm">Please select a command.</Text>
            <MultiSelect
                data={Commands}
                limit={20}
                searchable
                placeholder="Pick Command"
                {...props} />
                        <Button style={{backgroundColor: "#2C2E33", color:"yellow",  margin: 10}} onClick = {()=> {props.handleClose()}} >Cancel</Button>
                        <Button style={{backgroundColor: "#2C2E33", color:"yellow", margin: 10}} onClick = {()=> {
                            props.handleClose();
                            alert("Successfully submitted")}}>
                            Send to Command
                        </Button>
                    </Box>
                </Stack>
            </Grid>
        </Box>
        )
}
