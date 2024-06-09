import { Button, Table, TableContainer, TableRow, Paper, TableHead, TableCell, TableBody } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser}) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ marginRight: '0px 10px' }}
                                        onClick={() => selectedUser({id: row.id, name: row.name})}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{ marginRight: '0px 10px' }}
                                        onClick={() => deleteUser({id: row.id})}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row" colSpan={3}>No data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
