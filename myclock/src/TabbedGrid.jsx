import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TabbedGrid = () => {

    const [tabs] = useState([
        { title: 'Tab 1', apiUrl: 'https://jsonplaceholder.typicode.com/users' },
        { title: 'Tab 2', apiUrl: 'https://jsonplaceholder.typicode.com/comments' },
        { title: 'Tab 3', apiUrl: 'https://jsonplaceholder.typicode.com/users' },
    ]);

    const [rowData, setRowData] = useState([]);

    const columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Email', field: 'email' }
    ];

    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true
    };

    const fetchData = async (apiUrl) => {
        try {
            const response = await axios.get(apiUrl);
            console.log(response);
            setRowData(response.data);
        } catch (error) {
            console.error("Error fetching Data:", error)
        }
    };

    useEffect(() => {
        fetchData(tabs[0].apiUrl);
    }, []);

    return (
        <div>
            <h1>React Tab components with Different Ag Grid table</h1>
            <Tabs>
                <TabList>
                    {tabs.map((tab, index) => (
                        <Tab key={index}>{tab.title}</Tab>
                    ))}
                </TabList>

                {tabs.map((tab, index) => (
                    <TabPanel key={index}>
                        <div className="ag-theme-alpine"
                            style={{ height: 400, width: '100%' }}
                        >

                            <AgGridReact
                                rowData={rowData}
                                columnDefs={columnDefs}
                                defaultColDef={defaultColDef}
                            />

                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    )
}

export default TabbedGrid