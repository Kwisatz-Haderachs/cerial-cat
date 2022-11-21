import {Table, Button} from "@mantine/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridValueFormatterParams,
    GridValueGetterParams,
    GridApi,
    GridCellValue
} from '@mui/x-data-grid';

export default function ListReport (props: any) {
    // Convert to MUI datagrid - https://mui.com/x/react-data-grid/
    // Notification for successful delete
    // Send to Command


    const columns: GridColDef[] =[
        {field: 'dateTime', headerName: 'Event Date', width:150},
        {field: 'location', headerName: 'Location', width: 200},
        {
            field: 'incidentEffect',
            headerName: 'Incident Type',
            width: 200,
            valueGetter: (params: GridValueGetterParams) =>
                 params.value ? "Actual Event/Incident" : "Near Miss/CloseCall",
        },
        {
            field: 'harm',
            headerName: 'Harm',
            width: 150,
            valueGetter: (params: GridValueGetterParams) =>
                 params.value ? "Harm" : "Potential Harm",
        },
        {field: 'individualsInvolved', headerName: 'Individual(s) Involved',width: 200},
        {field: 'eventCategory', headerName: 'Event Type', width: 200},
        {field: "action", headerName: 'Details', width: 100,
            renderCell: (params)=>{
                const onClick=(e:any)=>{
                    e.stopPropagation();
                    props.setItemView(params.row)
                    props.handleOpen()
                };
                return <Button onClick={onClick}>View</Button>;
            }
        }
    ]

    return (


        <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid
                rows={props.reportList}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[25]}
                checkboxSelection
            />
        </div>


        //
        // <Table>
        //         <thead>
        //         <tr>
        //             <th>Event Date</th>
        //             <th>Location</th>
        //             <th>Incident Type</th>
        //             <th>Harm</th>
        //             <th>Individuals(s)</th>
        //             <th>Event Type</th>
        //             <th>Delete</th>
        //             <th>Deeeets</th>
        //         </tr>
        //         </thead>
        //             <tbody>{rows}</tbody>
        // </Table>

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
// const rows = props.reportList.map((element:any) => (
//     <tr key={element.id}>
//         <td>{element.dateTime}</td>
//         <td>{element.location}</td>
//         <td>{element.incidentEffect ? "Actual Event/Incident" : "Near Miss/CloseCall"}</td>
//         <td>{element.harm ?  "Harm" : "Potential Harm"}</td>
//         <td>{element.individualsInvolved.map((data: string) => (data+", "))}</td>
//         <td>{element.eventCategory.map((data: string) => (data+", "))}</td>
//         <td><DeleteForeverIcon onClick={() => {props.deleteItem(element.id)}} /></td>
//         <td><Button variant={"subtle"} sx={{color:"#1A1B1E"}} onClick={() => {props.setItemView(element);props.handleOpen()}}> View </Button></td>
//     </tr>
// ));