import React from 'react'
import {AppBar,Toolbar,Typography,styled} from '@mui/material';
import { Link } from 'react-router-dom';


const Tabs = styled(Link)`
   font-size : 20px;
   margin-right : 20px;
   text-decoration : none;
   color : inherit
`

export const NavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Tabs to="/">Home</Tabs>
            <Tabs to="/all">All users</Tabs>
            <Tabs to="/add">Add users</Tabs>
        </Toolbar>
    </AppBar>
  )
}
