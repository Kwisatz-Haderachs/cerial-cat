import {Table, Button, Alert} from "@mantine/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";




export default function ListReport (props: any) {




    const rows = props.reportList.map((element:any) => (
        <tr key={element.id}>
            <td>{element.dateTime}</td>
            <td>{element.location}</td>
            <td>{element.incidentEffect ? "Actual Event/Incident" : "Near Miss/CloseCall"}</td>
            <td>{element.harm ?  "Harm" : "Potential Harm"}</td>
            <td>{element.individualsInvolved.map((data: string) => (data+", "))}</td>
            <td>{element.eventCategory.map((data: string) => (data+", "))}</td>
            <td><DeleteForeverIcon onClick={() => {props.deleteItem(element.id)}} /></td>
            <td><Button variant={"subtle"} onClick={() => {props.setItemView(element);props.handleOpen()}}> View </Button></td>
        </tr>
    ));

    return (
        <Table>
                <thead>
                <tr>
                    <th>Event Date</th>
                    <th>Location</th>
                    <th>Incident Type</th>
                    <th>Harm</th>
                    <th>Individuals(s)</th>
                    <th>Event Type</th>
                    <th>Delete</th>
                    <th>Deeeets</th>
                </tr>
                </thead>
                    <tbody>{rows}</tbody>
        </Table>

)}
