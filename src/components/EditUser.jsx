import { FormControl, FormGroup, InputLabel, Input, makeStyles ,Typography ,Button} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from 'react-router-dom';


const useStyle=makeStyles({
    forms:{
        margin:"5% 0 0 25%",
        width:'50%',
        '& > *':{
            marginTop:20,
            fontFamily: 'cursive'
        }
    }
})

const intialvalues={
   name:"",
   username:"",
   eamil:"",
   City:"",
   PhoneNo:""
}
const EditUser=()=>{
    const[user,setUser]=useState(intialvalues);
    const{name,username,email,City,PhoneNo}=user;
    const classes=useStyle();
    const navigate =useNavigate();
    const {id}=useParams();


    useEffect(() => {
      loadUserData()
     
    },[]);
    const loadUserData=async()=>{
     const response =await getUser(id);
     setUser(response.data);
    }
    

    const onValueChange=(e)=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }

    const edituserDetail=async()=>{
          await editUser(id,user);

          navigate('../all');
    }
    return(
        <div>
            
           <FormGroup className={classes.forms}>
               <Typography variant="h4">Edit User</Typography>
           <FormControl >
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
            </FormControl>   
            <FormControl> 
                <InputLabel>username</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
            </FormControl> 
            <FormControl> 
                <InputLabel>email</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
            </FormControl> 
            <FormControl>  
              <InputLabel>City</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='City' value={City}/>
            </FormControl> 
               <FormControl>  
                <InputLabel>Phone No</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='PhoneNo' value={PhoneNo}/>
           </FormControl>
           <Button variant="contained" color="primary" onClick={()=>edituserDetail()}>Edit User</Button>
           </FormGroup>
        </div>
    )
}
export default EditUser;