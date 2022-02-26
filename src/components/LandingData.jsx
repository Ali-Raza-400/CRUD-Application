import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import leftimage from '../Assets/pic1.jpeg';
import rightimage from '../Assets/pic2.jpeg';

const useStyle =makeStyles({
    image:{
        width:'50%',
        height:"50%"
    },
    component:{
        margin:20
    }
})

const LandingData =()=>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
            <Typography style={{marginBottom:20}} variant="h4">Welcome to CRUD Application</Typography>
            <Box style={{display:'flex'}}>
                <img className={classes.image} src={leftimage} alt="" />
                <img className={classes.image} src={rightimage} alt="" />
            </Box>
            </Box>
           
    )
}

export default LandingData;