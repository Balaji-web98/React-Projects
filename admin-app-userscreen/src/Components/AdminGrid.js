import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import axios from 'axios';
import './AdminGrid.css';

const AdminGrid = () => {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(" https://api.dev.construcshare.com/api/v1/user?page=1&limit=10&userRole=user,admin");
            console.log(response)
            setRowData(response.data);
        } catch (error) {
            console.error('Error fetching Data:', error);
        }
    };

    const columnDefs = [
        { headerName: "Name", field: "", headerClass: "red-header" },
        { headerName: "Designation", field: "", headerClass: "red-header" },
        { headerName: "Role", field: "", headerClass: "red-header" },
        { headerName: "Email", field: "", headerClass: "red-header" },
        { headerName: "Mobile", field: "", headerClass: "red-header" },
        { headerName: "MemberID", field: "", headerClass: "red-header" },
        { headerName: "Company", field: "", headerClass: "red-header" },
        { headerName: "Status", field: "", headerClass: "red-header" },
        { headerName: "Action", field: "", headerClass: "red-header" }
    ]

    const defaultColDef = {
        sortable: true,
        editable: true,
        filter: true,
        floatingFilter: true
    }

    return (
        <div>
            <h3 style={{ color: '#e90000' }} >User Listing</h3>
            <div className='btn-src'>
                <div>
                    <input _ngcontent-paw-c12="" class="search-txt" placeholder="Type here...." />
                    <button>search</button>
                </div>
                <div className="buttons-container">
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


            </div>
            <div className='Action-btn'>
                <span style={{ paddingRight: '50px' }}>Blacklisted</span>
                <span style={{ textDecoration: 'underline', paddingRight: '30px' }}>Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span style={{ textDecoration: 'underline', paddingRight: '30px' }}>User & Admin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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