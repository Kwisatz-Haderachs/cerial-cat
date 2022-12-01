import React, { useState } from 'react';
import {
  Button,
  MultiSelect,
  Select,
  Textarea,
  Text,
  Box,
  Grid,
  Stack,
} from '@mantine/core';
import { Navigate } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

import { stringify } from 'querystring';
import axios from 'axios';

export default function SupViewReport(props: any) {
  // for text feature
  const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
  const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
  const twilioNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;
  const targetNumber = process.env.REACT_APP_MY_NUMBER;
  const messageSid = process.env.REACT_APP_TWILIO_MESSAGE_SID;

  //phone number List
  const PHONE_NUMBERS = [
    2242532169, 8563047432, 3604514924, 9415048001, 2092016529, 8809190457,
    9192591022, 9547442690, 8139577213, 2407785858, 6305596783, 2628531059,
  ];

  const PHONE_TEST = [7063613207, 7027674101];
  //form data
  const [report, setReport] = useState(props.itemView);

  //Custom Method for Oauth2
  function handleRedirect() {
    console.log('Auth: ' + props.isAuthenticated);
    if (!props.isAuthenticated) {
      return <Navigate to="/" />;
    }
  }

  const Commands = [
    { label: 'SWF', value: 'SWF' },
    { label: 'AFC', value: 'AFC' },
    { label: 'HQDA', value: 'HQDA' },
  ];

  function emailFunction() {
    props.handleClose();

    PHONE_TEST.forEach((pn) => {
      console.log(`+1${pn}`);
   
      axios
      .post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        new URLSearchParams({
          MessagingServiceSid: `${messageSid}`,
          Body: 'MEOW MEOW MEOW TEAM SERIOUS CAT MEOWS!!!!',
          To: `+1${pn}`,
        }),
        {
          auth: {
            username: `${accountSid}`,
            password: `${authToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log('error: ' + e);
      });
    })
   

    //TEXT FEATURE
    // axios
    //   .post(
    //     `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    //     new URLSearchParams({
    //       MessagingServiceSid: `${messageSid}`,
    //       Body: 'MEOW MEOW MEOW TEAM SERIOUS CAT MEOWS!!!!',
    //       To: `${targetNumber}`,
    //     }),
    //     {
    //       auth: {
    //         username: `${accountSid}`,
    //         password: `${authToken}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log('error: ' + e);
    //   });

    // Email.send({
    //   Host: 'smtp.elasticemail.com',
    //   Username: 'cerialcat6@gmail.com',
    //   Password: 'F25E40A2F3DA1335A48B0911D076A75801B6',
    //   To: 'christopher.a.reif.mil@swf.army.mil',
    //   From: 'cerialcat6@gmail.com',
    //   Subject: 'Meow',
    //   Body: 'Kitty Vengeance!',
    // })
    //   .then((message) => {
    //     if (message === 'OK') {
    //       return alert("Successfully sent to CHRIS REIF's'Email  !!");
    //     } else {
    //       return alert(message);
    //     }
    //   })
    //   .catch((e) => {
    //     alert('GOT DANGINT');
    //   });
  }

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
      })}
    >
      <Grid grow>
        <Stack>
          <Grid>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                label={'Date of Event (Zulu)'}
                withAsterisk
                required
                defaultValue={report.dateTime.split(' ')[0]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                required
                withAsterisk
                label={'Time of Event (Zulu)'}
                defaultValue={report.dateTime.split(' ')[1]}
              />
            </Grid.Col>
          </Grid>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              label="Location of event"
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
                value={
                  report.incidentEffect
                    ? 'Actual Event/Incident'
                    : 'Near Miss/CloseCall'
                }
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                withAsterisk
                required
                label="Harm"
                value={report.harm ? 'Harm' : 'Potential Harm'}
              />
            </Grid.Col>
          </Grid>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              value={report.individualsInvolved.map((element: string) => {
                return ' ' + element;
              })}
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
              value={report.eventCategory.map((element: string) => {
                return ' ' + element;
              })}
            />
          </Box>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              label="Effect of Incident"
              value={
                report.incidentEffect ? 'Harm sustained' : 'Potential Harm'
              }
            />
          </Box>
          <Grid>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                withAsterisk
                required
                label="Witness"
                value={report.witnessName[0]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                withAsterisk
                required
                label="Witness Number"
                value={report.witnessTelephone[0]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                label="Witness"
                value={report.witnessName[1]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                label="Witness Number"
                value={report.witnessTelephone[1]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                label="Witness"
                value={report.witnessName[2]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                readOnly={true}
                label="Witness Number"
                value={report.witnessTelephone[2]}
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
              value={report.departmentsInvolved.map((element: string) => {
                return ' ' + element;
              })}
            />
          </Box>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              label="Description"
              value={report.description}
              //classNames={{ input: classes.invalid }}
            />
          </Box>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              label="Actions"
              value={report.actions}
              //classNames={{ input: classes.invalid }}
            />
          </Box>
          <Box>
            <Textarea
              readOnly={true}
              withAsterisk
              required
              label="Patient Name"
              value={report.patientName}
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
                  label="Patient Phone"
                  value={report.patientPhone}
                  //classNames={{ input: classes.invalid }}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Textarea
                  readOnly={true}
                  withAsterisk
                  required
                  label="Patient SSN"
                  value={report.patientSSN}
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
              label="Patient Address"
              value={report.patientAddress}
            />
          </Box>

          <Box>
            <Text size="sm">Please select a command.</Text>
            <MultiSelect
              data={Commands}
              limit={20}
              searchable
              placeholder="Pick Command"
              {...props}
            />
            <Button
              style={{
                backgroundColor: '#2C2E33',
                color: 'yellow',
                margin: 10,
              }}
              onClick={() => {
                props.handleClose();
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: '#2C2E33',
                color: 'yellow',
                margin: 10,
              }}
              onClick={() => {
                emailFunction();
              }}
            >
              Send to Command
            </Button>
          </Box>
        </Stack>
      </Grid>
      {/* {handleRedirect()} */}
    </Box>
  );
}
