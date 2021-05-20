import React from 'react';
import PropTypes from 'prop-types';
import './adminpage.css'
import Header from '../components/header/header';
import MainBoard from '../components/mainBoard/mainBoard';
import {AccountCircle} from '@material-ui/icons';
import {Button, makeStyles} from '@material-ui/core';

function AdminPage(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    

    const handleClose = () => {
        localStorage.removeItem('user');
        props.setUserState();
        setAnchorEl(null);
    }

    
    return (
        <div className="adminPage">
            <Header></Header>
            <Button
                     className={classes.buttonSign} 
                     onClick={handleClose}  
                     color="inherit" fullWidth
            >
                Log Out
            </Button>
            <MainBoard></MainBoard>
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    buttonSign:{
        color:"#6326F0",
        fontSize:"15px",
        position: "absolute",
        bottom: "71px",
        left: "0",
        width: "20%",
        height:"50px"
    },
}));

export default AdminPage;