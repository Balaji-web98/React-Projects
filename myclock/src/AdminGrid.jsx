import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const AdminGrid = () => {

    const [rowData, setRowData] = useState([]);

    const columnDefs = [
        { headerName: "Name", field: "" },
        { headerName: "Designation", field: "" },
        { headerName: "Role", field: "" },
        { headerName: "Email", field: "" },
        { headerName: "Mobile", field: "" },
        { headerName: "MemberID", field: "" },
        { headerName: "Company", field: "" },
        { headerName: "Status", field: "" },
        { headerName: "Action", field: "" }
    ]

    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
        floatingFilter: true
    }

    return (
        <div>
            <h1 align="center"><u>Admin Panel</u></h1>
            <h3>User Listing</h3>
            <div className='btn-src'>
                <input placeholder="Type here...." />
                <button>search</button>
                <span className='ex-btn'>
                    <button>Export Current Page</button>
                </span>
                <span className='ex1-btn'>
                    <button>Export All</button>
                </span>
                <span className='add-btn'>
                    <button>+ Add</button>
                </span>
            </div>
            <div className='Action-btn'>
                Blacklisted    ........
                Status    .......
                User role    ........
            </div>
            <div className="ag-theme-alpine" style={{ width: "100%", height: 400 }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                />
            </div>
        </div>
    )
}

export default AdminGrid