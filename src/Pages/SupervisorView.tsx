import React, {useEffect, useState} from 'react';
import {Box, Grid, Modal} from "@mui/material";
import axios from "axios";
import ListReport from "../Components/ListReport";
import SupViewReport from "../Components/SupViewReport";
import CatListReport from "../Components/CatListReport"
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

export default function SupervisorView(props: any) {
    const [baseURL, setBaseURL] = useState(props.baseURL)
    const [reportList, setReportList] = useState([]);
    const [itemView, setItemView] = useState(null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getData().then(r => {console.log(r)});
    },[])

    const getData = async () => {
        const response = await axios.get(`${baseURL}`)
            .then((response) => {
                console.log(response)
                setReportList(response.data)}).catch((error) => {console.log(error)})

        // setReportList(response.data)
    }

    const deleteItem = async (props: number) => {
        await axios.delete(`${baseURL}/${props}`)
            .then((response)=> {console.log(response)})
            .catch((error) => {console.log(error)});
        getData();



    }


    return(
        <Grid display={"flex"}  justifyContent={"center"}>
        <Box className={"report"} sx={{ width: '80%', marginTop: 10, backgroundColor:"#A6A7AB", border: 1 }} >
            <div>
                    <CatListReport deleteItem={deleteItem} reportList={reportList} setItemView = {setItemView} handleOpen={handleOpen}/>

                    <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{height: '90%',overflow:'scroll',margin:'auto'}}
                    >
                    <div style={{
                        border: '1px white solid',
                        height: 'auto',
                        margin: 'auto',
                        width: '50%'
                    }}>
                        <SupViewReport handleClose={handleClose} itemView = {itemView} setItemView = {setItemView} />
                    </div>
                    </Modal>
                    </div>

        </Box>
        </Grid>
    )
}