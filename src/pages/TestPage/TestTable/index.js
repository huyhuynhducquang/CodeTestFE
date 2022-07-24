import * as React from 'react';
import { Button, Card, IconButton, Input } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Pagination from '@mui/material/Pagination';

import './TestTable.scss';
import TestForm from './TestForm';

function createData(orderId, title, createDate, carbs) {
    return { orderId, title, createDate, carbs };
}

const rows = [
    createData(1, 'MS Excel', '10-10-2021', true),
    createData(2, 'SQL', '03-03-2022', true),
    createData(3, 'Attention to detail', '05-03-2023', false),
    createData(4, 'C# and .NET', '01-12-2021', false),
    createData(5, 'HTML/CSS and JavaScript', '14-08-2021', false),
];

function TestTable() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className="test-table">
            <div className="tool-container">
                <Input placeholder="Search..." />
                <Button variant="contained" color="success" onClick={handleClickOpen}>
                    Add new test
                </Button>
            </div>
            <TableContainer className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>OrderID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="center">Pubished</TableCell>
                            <TableCell align="center">Create date</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.orderId}>
                                <TableCell>{row.orderId}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell align="center">
                                    {row.carbs === true ? <DoneIcon color="success" /> : <ClearIcon color="warning" />}
                                </TableCell>
                                <TableCell align="center">{row.createDate}</TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <InfoIcon />
                                    </IconButton>
                                    <IconButton>
                                        <EditIcon color="primary" />
                                    </IconButton>
                                    <IconButton>
                                        <ClearIcon color="warning" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination count={5} color="primary" className="pagination" />
            </TableContainer>
            <TestForm open={open} onClose={handleClose}/>
        </Card>
    );
}

export default TestTable;
