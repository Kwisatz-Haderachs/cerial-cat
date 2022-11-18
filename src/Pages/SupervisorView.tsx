import React, {useEffect, useState} from 'react';
import {Alert, AlertTitle, Box, Grid, Modal} from "@mui/material";
import axios from "axios";
import ListReport from "../Components/ListReport";
import SupViewReport from "../Components/SupViewReport";

export default function SupervisorView(props: any) {
    const [baseURLBack, setBaseURLBack] = useState(props.baseURLBack)
    const [baseURLFront, setBaseURLFront] = useState(props.baseURLFront)
    const [baseURL, setBaseURL] = useState(props.baseURL)
    const [reportList, setReportList] = useState([]);
    const [itemView, setItemView] = useState(null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        getData().then(r => {console.log(r)});
    },[])

    const getData = async () => {
        await axios.get(`${baseURLBack}`)
            .then((response) => {
                console.log(response)
                setStatus(response.status)
                setReportList(response.data)
            })
            .catch((error) => {
                setStatus(error.status)
                console.log(error)
            })
        // setReportList(response.data)
    }

    const deleteItem = async (props: number) => {
        await axios.delete(`${baseURLBack}/${props}`)
            .then((response)=> {
                console.log(response)
                setStatus(response.status)
                getData();
            })
            .catch((error) => {
                console.log(error)
                setStatus(error.status)
            });
    }

    function notify(){
        let cat : string = `https://http.cat/${status}.jpg`;

        // if(status === 200){
        //     return(
        //         <Alert variant="filled" severity="success" >
        //             <AlertTitle>Success</AlertTitle>
        //             <img src={cat} alt={""}  />
        //         </Alert>
        //     )
       if(!(status ===200)){
            return (
                <Alert variant="filled" severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <img src={cat} alt={""}  />
                </Alert>
            )
        }

    }

    return(
        <Grid container spacing ={2}>
        <Grid display={"flex"}  justifyContent={"center"}  xs = {12}>
            <Box className={"report"} sx={{ width: '80%', marginTop: 10, backgroundColor:"#A6A7AB", border: 1 }} >
                <div>
                    <ListReport deleteItem={deleteItem} reportList={reportList} setItemView = {setItemView} handleOpen={handleOpen}/>

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
            <Grid xs = {12}>
                {notify()}
            </Grid>
        </Grid>
    )
}