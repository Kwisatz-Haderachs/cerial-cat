import React, {useEffect, useState} from 'react';
import {Box, Grid } from "@mui/material";
import axios from "axios";
import ListReport from "../Components/ListReport";
import SupViewReport from "../Components/SupViewReport";

export default function SupervisorView() {
    const [reportList, setReportList] = useState([]);
    const [itemView, setItemView] = useState(null)

    useEffect(() => {
        getData().then(r => {console.log(r)});
    },[])

    const getData = async () => {
        const response = await axios.get("http://localhost:8080/Report")
        setReportList(response.data)
    }


    return(
        <Grid display={"flex"}  justifyContent={"center"}>
        <Box sx={{ width: '80%' }} >
                {itemView === null ?
                    <ListReport reportList={reportList} setItemView = {setItemView}/> :
                    <SupViewReport itemView = {itemView} setItemView = {setItemView} />
                }

        </Box>
        </Grid>
    )
}