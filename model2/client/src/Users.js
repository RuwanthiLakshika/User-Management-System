import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";
import { useState, useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:8080/api/v1/getusers')
            .then(response => {
               setUsers(response.data || []);
        })
        .catch(error => {
            console.error("Error getting users:", error);
        });
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        };
        Axios.post('http://localhost:8080/api/v1/adduser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
        })
        .catch(error => {
            console.log("Error adding user:", error);
        });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        };
        Axios.put('http://localhost:8080/api/v1/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
        })
        .catch(error => {
            console.error("Error adding user:", error);
        });
    }

    const deleteUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        };
        Axios.delete('http://localhost:8080/api/v1/deleteuser', {data: payload})
            .then(() => {
                getUsers();
                setSubmitted(false);
        })
        .catch(error => {
            console.log("Error deleting user:", error);
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
            <UserForm
                addUser={addUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
                updateUser={updateUser}
            />
            <UsersTable 
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm("Are you sure you want to delete this user?") && deleteUser(data)}
                />
        </Box>
        
    );
}

export default Users;