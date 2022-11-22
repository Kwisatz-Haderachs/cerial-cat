import {Typography, Paper} from "@mui/material";
import tank from "../Images/tank.png"

export default function LandingPage() {

    let statusCodes = [100, 101, 102, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305,
        307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
        416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499,
        500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599]

    function randomIntFromInterval(min:number, max:number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomStatus():number {
        let x = randomIntFromInterval(0, statusCodes.length-1);
        console.log(x)
        return(statusCodes[x])
    }

    const styles = {
        paperContainer: {
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${tank})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }
    };

    //                    <img  src={`https://http.cat/${randomStatus()}.jpg`} />
    return(
        <Paper style={styles.paperContainer}>
                <Typography
                    fontFamily={"Roboto"}
                    fontStyle={"Underline"}
                    padding={5}
                    color={"yellow"}
                    variant="h1" > Serious Incident Report
                </Typography>
    </Paper>
    )
}
