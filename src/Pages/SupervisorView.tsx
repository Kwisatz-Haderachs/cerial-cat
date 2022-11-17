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
            .then((response) => {
                console.log(response)
                setReportList(response.data)}).catch((error) => {console.log(error)})

        // setReportList(response.data)
    }

    const deleteItem = async (props: number) => {
        await axios.delete(`http://localhost:8080/Report/${props}`)
            .then((response)=> {console.log(response)})
            .catch((error) => {console.log(error)});
        getData();


    }


    return(
        <Grid display={"flex"}  justifyContent={"center"}>
        <Box sx={{ width: '80%' }} >
                {itemView === null ?
                    <ListReport deleteItem={deleteItem} reportList={reportList} setItemView = {setItemView}/> :
                    <SupViewReport itemView = {itemView} setItemView = {setItemView} />
                }

        </Box>
        </Grid>
    )
}