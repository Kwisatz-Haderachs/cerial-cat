import {
  Card,
  Image,
  Text,
  Title,
  Badge,
  Button,
  Group,
  Grid,
} from '@mantine/core';
import tank from '../Images/tank.png';
import cat from '../Images/ShapeBlurCat.png';
import { url } from 'inspector';
import crashLanding from '../Images/ShapeBlurCrash.png';
import catCrashFinal from '../Images/CatCrashFinal.png';
import crashFinal from '../Images/CrashFinal.png';
import {useAuth0} from "@auth0/auth0-react";
import Profile from "../Components/Profile";

export default function LandingPage(props: any) {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  const {logout} = useAuth0();
  const {isLoading} = useAuth0()
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

  const pictureType = props.catView ? catCrashFinal : crashFinal;
  const textClass = props.catView ? 'catMode' : '';
  const textSize = props.catView ? 50 : 'h1';
  //                    <img  src={`https://http.cat/${randomStatus()}.jpg`} />
  return (
    <Grid sx={{ padding: '3vw' }}>
      <Grid.Col span={4} offset={1}>
        <Card p="lg" radius="md" sx={{ backgroundColor: 'transparent' }}>
          <Card.Section>
            <Text>Team Cerial Cat</Text>
            <br></br>
          </Card.Section>
          <Title size={textSize} className={textClass}>
            {' '}
            Serious Incident Reporter
          </Title>
          <br></br>
          <br></br>
          <Text>
            {' '}
            This website will replace the form and it will be able to be viewd
            by supervisors and be sent to proper command. Please login to
            continue.
          </Text>
          <br></br>
          { isLoading ? <div> Loading....</div> : <div></div>}
          {!isAuthenticated ?
              <Button
                  variant="outline"
                  size="lg"
                  sx={{width: '40%', color: 'black', borderColor: 'black'}}
                  radius="xl"
                  onClick={() => loginWithRedirect()}
              >

                {' '}
                Login
              </Button>
:
              <Button
                  variant="outline"
                  size="lg"
                  sx={{width: '40%', color: 'black', borderColor: 'black'}}
                  radius="xl"
                  onClick={() => logout()}
              >
                {' '}
                LogOut
              </Button>
          }
          </Card>
      </Grid.Col>
      <Grid.Col span={4} offset={2}>
        <Card p="lg" radius="md" sx={{ backgroundColor: 'transparent' }}>
          <Card.Section>
            <Image src={pictureType} />
          </Card.Section>
          <Title size={80} ta="center" className="catMode">
            {props.catView ? ' CAT MODE' : ''}
          </Title>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
