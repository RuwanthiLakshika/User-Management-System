import { Button, Table, TableContainer, TableRow,Paper,TableHead,TableCell,TableBody} from "@mui/material";

const UsersTable = ({rows}) => {
    return(
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
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{marginRight: ' 0px 10px'}}
                                    onClick={()=>{}}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{marginRight: ' 0px 10px'}}
                                    onClick={()=>{}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                     )) : (
                        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope="row">No data</TableCell>
                            </TableRow>
                     )
               }
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default UsersTable;