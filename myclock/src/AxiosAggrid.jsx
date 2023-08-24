import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';  // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import axios from 'axios';

const AxiosAggrid = ({ apiUrl }) => {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            console.log(response)
            setRowData(response.data);
        } catch (error) {
            console.error('Error fetching Data:', error);
        }
    };

    const columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Email', field: 'email' },
        { headerName: 'About', field: 'body' }
    ];

    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true
    }

    return (
        <div>
            <h1 align="center"><u>React AG Grid Table</u></h1>
            <p><h3>Populating data to the Ag grid table with the help of Axios</h3></p>
            <div className="ag-theme-alpine" style={{ width: "100%", height: 600 }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    )
}

export default AxiosAggrid