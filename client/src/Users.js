import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";
import { useState, useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
               setUsers(response.data || []);
        })
        .catch(error => {
            console.error("Error getting users:", error);
        });
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <UserForm/>
            <UsersTable rows={users}/>
        </Box>
        
    );
}

export default Users;