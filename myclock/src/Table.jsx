import React from 'react';
import { AgGridReact } from 'ag-grid-react';  // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { CheckboxSelectionComponent } from 'ag-grid-community';

const Table = () => {

    const data = [
        { name: "Balaji", age: 25, gender: "Male" },
        { name: "Jeevitha", age: 24, gender: "Female" },
        { name: "shaji", age: 27, gender: "Female" },
        { name: "Arun", age: 21, gender: "Male" },
        { name: "Vijay", age: 35, gender: "Male" },
        { name: "Ankitha", age: 19, gender: "Female" },
        { name: "Guru", age: 17, gender: "Male" },
        { name: "Amar", age: 31, gender: "Male" }
    ]

    const columns = [
        { headerName: "Name", field: "name", checkboxSelection: true },
        { headerName: "Age", field: "age" },
        { headerName: "Gender", field: "gender" }
    ]

    const defaultColDef = { sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1 }

    let gridApi;
    const onGridReady = params => {
        gridApi = params.api
    }

    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    }

    return (
        <>
            <button onClick={() => onExportClick()}>Export Data</button>
            <div className="ag-theme-alpine" style={{ width: "100%", height: 600 }} >
                <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef}
                    rowSelection='multiple' animateRows={true} onGridReady={onGridReady} />
            </div>
        </>
    )
}

export default Table;