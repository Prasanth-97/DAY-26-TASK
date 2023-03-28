import { FormControl, FormGroup, InputLabel, Typography, Input, Button , styled } from '@mui/material';
import React, { useState ,useEffect } from 'react';
// import { addUser } from '../Service/api';
import { useNavigate,useParams } from 'react-router-dom';
import { getUser , editUser } from '../Service/api';

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


 function EditUsers() {
     const [user,setUser] = useState(initialValues);
     console.log("ussssser",user)
     const navigate = useNavigate();
     const {id} = useParams();
     useEffect(() => {
          getUserData()
     },[])
     
    const getUserData = async () => {
        let response  = await getUser(id);
        console.log("res",response)
        setUser(response.data);
    }

     const onValueChange = (e) => {         
            setUser({...user,[e.target.name]:e.target.value});
            // console.log(user);
     }

     const addUserDetails = async() => {
          await editUser(user,id);
          navigate("/all")
     }
  return (
    <Container>
        <Typography variant="h4" >Edit user</Typography>
        <Margining>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
        </Margining>
        <Margining>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="userName" value={user.userName}/>
        </Margining>
        <Margining>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </Margining>
        <Margining>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
        </Margining>
        <Btn  onClick={()=> addUserDetails()} variant="contained">Edit user</Btn>
    </Container>
      )
}

export default EditUsers;