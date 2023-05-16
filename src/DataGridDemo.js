import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'Date', headerName: 'Date', width: 110 },
    { field: 'GroupName', headerName: 'Group Name', width: 150 },
    { field: 'AccountNumber', headerName: 'Account Number', width: 150 },
    { field: 'AccountName', headerName: 'Account Name', width: 150 },
    { field: 'SymbolOrCusip', headerName: 'Symbol/Cusip', width: 150 },
    { field: 'SecurityDescription', headerName: 'Security Description', width: 200 },
    { field: 'ActivityType', headerName: 'Activity Type', width: 150 },
    { field: 'Quantity', headerName: 'Quantity', type: 'number', width: 110 },
    { field: 'Price', headerName: 'Price', type: 'number', width: 110 },
    { field: 'Amount', headerName: 'Amount', type: 'number', width: 110 },
    { field: 'DebitOrCredit', headerName: 'Debit/Credit', width: 150 },
    { field: 'AccountType', headerName: 'Account Type', width: 150 },
    { field: 'SettleDate', headerName: 'Settle Date', width: 110 },
    { field: 'AssetClass', headerName: 'Asset Class', width: 150 },
    { field: 'HouseholdName', headerName: 'Household Name', width: 150 },
];
const rows = [
    ...Array(50).fill().map((_, i) => ({
        id: i + 1,
        Date: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        GroupName: `Group ${Math.floor(Math.random() * 5) + 1}`,
        AccountNumber: `${Math.floor(Math.random() * 999999) + 100000}`,
        AccountName: `Account ${i + 1}`,
        SymbolOrCusip: `SYM${Math.floor(Math.random() * 100) + 1}`,
        SecurityDescription: `Security ${Math.floor(Math.random() * 100) + 1}`,
        ActivityType: ['Buy', 'Sell'][Math.floor(Math.random() * 2)],
        Quantity: Math.floor(Math.random() * 1000) + 1,
        Price: (Math.random() * 1000).toFixed(2),
        Amount: (Math.random() * 10000).toFixed(2),
        DebitOrCredit: ['Debit', 'Credit'][Math.floor(Math.random() * 2)],
        AccountType: `Type ${Math.floor(Math.random() * 5) + 1}`,
        SettleDate: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        AssetClass: `Class ${Math.floor(Math.random() * 5) + 1}`,
        HouseholdName: `Household ${Math.floor(Math.random() * 10) + 1}`
    }))
];


export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}
