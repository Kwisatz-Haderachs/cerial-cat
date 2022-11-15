import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import axios from "axios";

export default function SupervisorView() {
    const [reportList, setReportList] = useState([])

    useEffect(() => {
        getData().then(r => {console.log(r)});
    },[])

    const getData = async () => {
        const response = await axios.get("http://localhost:8080/Report")
        setReportList(response.data)
    }


    // const fetchAllData: React.FC = props => {
    //     useEffect(() => {
    //         async function getData() {
    //             let data = await axios.get("http://localhost:8080/Report")
    //                 .then(response => {
    //                     console.log(response)
    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                 })
    //         }
    //         getData();
    //     }, []);
    // };

    return(
        <Box>
            <ul>

            </ul>

        </Box>

    )
}