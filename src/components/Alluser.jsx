import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../service/api";
import {Link} from 'react-router-dom'

const useStyle =makeStyles({
    tstyle:{
        width:'90%',
        margin:'50px 0 0 50px'
    },
    thstyle:{
      '& > *':{
          background:'#2F4F2F',
          color:'white',
          fontSize:20,
          fontFamily: 'cursive'
      }
    },
    tdstyle:{
        '& > *':{
           
            fontSize:20,
            fontFamily: 'cursive'
        }
    }
})


const Alluser=()=>{
   const [users, setusers] = useState([])
    useEffect(() => {
        getAllUser();
    }, [])
    
const getAllUser = async()=>{ // we have to call this function inside Useeffect so autorending
    
       const response=await getUser();
       console.log(response.data);
       setusers(response.data)
}
const deleteUserData=async(id)=>{
    
    await deleteUser(id)
    getAllUser()
}
const classes =useStyle();
    return(
      //Returning the data inform of table 
        <Table className={classes.tstyle}>
            <TableHead>
                <TableRow className={classes.thstyle}>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>username</TableCell>
                <TableCell>email</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow className={classes.tdstyle}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.City}</TableCell>
                            <TableCell>{user.PhoneNo}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Update</Button>
                                <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                                </TableCell>
                            
                        </TableRow>
                    )
                    )
                }
            </TableBody>
        </Table>

    )
}

export default Alluser;