import React from 'react';
import { AgGridReact } from 'ag-grid-react';  // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const StyleAgGrid = () => {

    const columnDefs = [
        { headerName: "Name", field: "name" },
        {
            headerName: "Age", field: "age",
            cellStyle: (params) => (params.value > 18 ? { borderLeft: "4px green solid" } : { borderLeft: "4px red solid" })
            // cellClass: (params) => (params.value > 18 ? "moreThan18" : "lessThan18")
        },
        { headerName: "Birth Year", field: "birthYear", },
        { headerName: "Phone Number", field: "phoneNumber" },

    ]
    const rowData = [
        { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear: 2001 },
        { name: "David", age: 17, phoneNumber: 9827654310, birthYear: 2003 },
        { name: "Dan", age: 25, phoneNumber: 9765438210, birthYear: 1995 }]

    return (
        <>
            <h1 align="center"><u>AG Grid</u></h1>
            <p>Conditionally Styling Cells Based on Data</p>
            <h3><u>Student Details</u></h3>
            <div className="ag-theme-alpine" style={{ height: '200px' }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={{ flex: 1, minWidth: 100 }}>
                </AgGridReact>
            </div>
        </>
    )
}

export default StyleAgGrid;