import { Table,TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material';
import React, { useEffect,useState } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
   width : 90%;
   margin : 2% auto
`
const StyledHead = styled(TableRow)`
  background : black;
  & > th {
    color : #fff;
    font-size : 15px
  }
` 

 function AllUsers() {
  const[user,setUser] = useState([])
  useEffect(() => {
        getUserDetails();
  },[]);

  const getUserDetails = async() => {
      let response = await getUsers();
      setUser(response.data);
      // console.log(response.data);
  }

 const deleteUserData = async (id) => {
     await deleteUser(id);
     getUserDetails();
 }

  return (
    <StyledTable>
      <TableHead>
           <StyledHead>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>UserName</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Phone</TableCell>
               <TableCell></TableCell>
           </StyledHead>
      </TableHead>
      <TableBody>
          {user.map((user) => (
            <TableRow>
               <TableCell>{user.id}</TableCell>
               <TableCell>{user.name}</TableCell>
               <TableCell>{user.userName}</TableCell>
               <TableCell>{user.email}</TableCell>
               <TableCell>{user.phone}</TableCell>
               <TableCell>
                <Button variant="contained" style={{marginRight : 10}} onClick={() => deleteUserData(user.id)}>Delete</Button>
                <Button variant="contained" color='secondary' component={Link} to={`/edit/${user.id}`}>Edit</Button>
                </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers;