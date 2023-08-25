import React from 'react';
import { AgGridReact } from 'ag-grid-react';  // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const ChkbxSeleAgg = () => {

    const columnDefs = [
        { headerName: "ID", field: "id", checkboxSelection: true, headerCheckboxSelection: true },
        { headerName: "Name", field: "name", },
        { headerName: "Email", field: "email", },
        { headerName: "Body", field: "body" },
    ]

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
                params.api.applyTransaction({ add: resp }) //adding API data to grid
            })
    }
    //define selection type single or multiple
    const rowSelectionType = 'multiple'

    //function will trigger once selection changed
    const onSelectionChanged = (event) => {
        console.log(event.api.getSelectedRows())
    }

    return (
        <div>
            <h1 align="center">React-App Ag Grid</h1>
            <p> AG Grid Checkbox Selection with conditions</p>
            <h3>Student Details</h3>
            <div className="ag-theme-alpine" style={{ width: "100%", height: 600 }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    rowSelection={rowSelectionType}
                    onSelectionChanged={onSelectionChanged}
                    rowMultiSelectWithClick={true}
                >
                </AgGridReact>
            </div>
        </div>
    )
}

export default ChkbxSeleAgg