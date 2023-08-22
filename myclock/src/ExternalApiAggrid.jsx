import React from 'react';
import { AgGridReact } from 'ag-grid-react';  // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const ExternalApiAggrid = () => {

    const columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name", },
        { headerName: "Email", field: "email", },
        { headerName: "Body", field: "body" },
    ]
    const rowData = [
        { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
        { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
        { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 }]

    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true
    }

    const onGridReady = (params) => {
        console.log("grid is ready")
        fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                params.api.applyTransaction({ add: resp })
            })
    }

    return (
        <div>
            <h1 align="center">React-App AG-Grid</h1>
            <p>Populating Table with External API Data</p>
            <h3>Student Details</h3>
            <div className="ag-theme-alpine" style={{ width: "100%", height: 600 }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    // rowData={rowData}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}>
                </AgGridReact>
            </div>
        </div>

    )
}

export default ExternalApiAggrid;