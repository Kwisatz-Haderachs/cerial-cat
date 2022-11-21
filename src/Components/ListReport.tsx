import {Table, Button} from "@mantine/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    DataGrid,
    GridColDef,
    GridValueGetterParams,
    GridToolbar
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
        {field: 'individualsInvolved', headerName: 'Individual(s) Involved',width: 250},
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
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: {debounceMs: 500},
                    },
                }}
            />
        </div>

)}
