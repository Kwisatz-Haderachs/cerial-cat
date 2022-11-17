import React, {useState} from 'react';
import Box from "@mui/material/Box";

export default function LandingPage(props: any) {
    const [baseURL, setBaseURL] = useState(props.baseURL)

    return(
        <Box justifyContent={'center'} display={'flex'}>
           <img  src={"/cat.gif"} />
        </Box>

    )
}