interface TableColumn {
    header: string;
    accessor: string;
}

interface TableProps {
    data: any[];
    columns: TableColumn[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.accessor}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td
                                key={column.accessor}
                                className="px-6 py-4 whitespace-nowrap"
                            >
                                {row[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
