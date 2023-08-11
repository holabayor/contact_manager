import Table from '@/components/Table';
import { contacts } from '@/testdata';
import React from 'react'

const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 24 },
    // Add more data...
];

const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
];

const Dashboard = () => {
    return (
        <main>
            <h1 className="text-2xl font-semibold mb-4">All Contacts</h1>


            <div className="p-6">

                <Table data={data} columns={columns} />
            </div>
        </main>
    )
}

export default Dashboard