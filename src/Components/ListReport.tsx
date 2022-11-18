import {Table, Button} from "@mantine/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function ListReport (props: any) {
    // Convert to MUI datagrid - https://mui.com/x/react-data-grid/
    // Notification for successful delete
    // Send to Command

    const rows = props.reportList.map((element:any) => (
        <tr key={element.id}>
            <td>{element.dateTime}</td>
            <td>{element.location}</td>
            <td>{element.incidentEffect ? "Actual Event/Incident" : "Near Miss/CloseCall"}</td>
            <td>{element.harm ?  "Harm" : "Potential Harm"}</td>
            <td>{element.individualsInvolved.map((data: string) => (data+", "))}</td>
            <td>{element.eventCategory.map((data: string) => (data+", "))}</td>
            <td><DeleteForeverIcon onClick={() => {props.deleteItem(element.id)}} /></td>
            <td><Button variant={"subtle"} sx={{color:"#1A1B1E"}} onClick={() => {props.setItemView(element);props.handleOpen()}}> View </Button></td>
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
/*
return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
 */