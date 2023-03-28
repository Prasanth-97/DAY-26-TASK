import axios from "axios";

const ApiUrl = "http://localhost:3002/users";

export const addUser = async (data) => {
    try{
        return await axios.post(ApiUrl,data);
    }
    catch(err){
        console.log("Error",err.message);
    }
 
}

//getting all users

export const getUsers = async () => {
    try{
        return await axios.get(ApiUrl);
    }
    catch(err){
        console.log("Error",err.message);
    }
 
}


export const getUser = async (data) => {
    try{
        return await axios.get(`${ApiUrl}/${data}`);
    }
    catch(err){
        console.log("Error",err.message);
    }
 
}

export const editUser = async(data,id) => {
    try{
        return await axios.put(`${ApiUrl}/${id}`,data);
    }
    catch(err){
        console.log("Error",err.message);
    }
 
}


export const deleteUser = async(id) => {
    try{
        return await axios.delete(`${ApiUrl}/${id}`);
    }
    catch(err){
        console.log("Error",err.message);
    }
 
}