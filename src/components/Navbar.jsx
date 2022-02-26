import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle=makeStyles({
    header:{
     background:"#2C3531"
    },
    tab:{
        color:'white',
        textDecoration:'none',
        marginRight:25,
        fontSize:25,
        fontFamily: 'cursive'
    }
})
 
const Navbar =()=>{
    const classes=useStyle();
    return(
       
        <AppBar className={classes.header} position={"static"}  >
            <Toolbar  >
                <NavLink   to="/" className={classes.tab}>CRUD Navbar</NavLink>
                <NavLink to='add' className={classes.tab}>Add User </NavLink>
                <NavLink to='all' className={classes.tab}>All User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;