import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import tank from '../Images/tank.png';
import cat from '../Images/LandingCat.png';
import { url } from 'inspector';

export default function LandingPage(props: any) {
  let statusCodes = [
    100, 101, 102, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305,
    307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
    413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431,
    444, 450, 451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509,
    510, 511, 521, 522, 523, 525, 599,
  ];

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomStatus(): number {
    let x = randomIntFromInterval(0, statusCodes.length - 1);
    console.log(x);
    return statusCodes[x];
  }

  const tankStyle = {
    paperContainer: {
      height: '100vh',
      width: '100%',
    },
  };

  const catStyle = {
    paperContainer: {
      height: '100vh',
      width: '100%',
    },
  };

  const styles = props.catView ? catStyle : tankStyle;
  //                    <img  src={`https://http.cat/${randomStatus()}.jpg`} />
  return (
    <Grid>
      <Grid.Col span={4}>
        <Card  p="lg" radius="md" sx={{backgroundColor:'transparent'}}>
          <Card.Section>
            <Text>Team Cerial Cat</Text>
            <Text> Serious Incident Reporter</Text>
          </Card.Section>
          <Text>
            {' '}
            This website will replace the form and it will be able to be viewd
            by supervisors and be sent to proper command. Please login to
            continue.
          </Text>

          <Button> Login</Button>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card  p="lg" radius="md"  sx={{backgroundColor:'transparent'}}>
          <Card.Section>
            <Image src={tank}  />
          </Card.Section>
          <Text> Cat mode thingy</Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
