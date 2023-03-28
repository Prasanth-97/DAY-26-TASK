import { FormControl, FormGroup, InputLabel, Typography, Input, Button , styled } from '@mui/material';
import React, { useState } from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const  Container = styled(FormGroup)`
    width : 70%;
    margin : 5% auto 
`
const Margining = styled(FormControl)`
   margin-top : 20px;
`
const Btn = styled(Button)`
   margin-top : 10px;
`
const initialValues = {
    name : "",
    userName : "",
    email : "",
    phone : ""
};


 function AddUsers() {
     const [user,setUser] = useState(initialValues);
     const navigate = useNavigate();

     const onValueChange = (e) => {         
            setUser({...user,[e.target.name]:e.target.value});
            console.log(user);
     }

     const addUserDetails = async() => {
          await addUser(user);
          navigate("/all")
     }
  return (
    <Container>
        <Typography variant="h4" >Add user</Typography>
        <Margining>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name"/>
        </Margining>
        <Margining>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="userName"/>
        </Margining>
        <Margining>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email"/>
        </Margining>
        <Margining>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" />
        </Margining>
        <Btn  onClick={()=> addUserDetails()} variant="contained">Add user</Btn>
    </Container>
      )
}

export default AddUsers;