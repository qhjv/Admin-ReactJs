import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

const useStyles= makeStyles((theme)=>({
    root:{},
    buttonSign:{
        color:"#6326F0",
        fontSize:"15px"
    },
}))

Header.propTypes = {
    
};

function Header(props) {
    const classes = useStyles()
    const [signOpen, setSignOpen] = useState(false)
    // const [anchorEl,setAnchorEl]=useState('user')
    const handleSignOn =(event)=>{
        setSignOpen(true)
        // setAnchorEl(event.currentTarget)
    }
    const handleSignClose =()=>{
        // localStorage.removeItem('user');
        // props.setUserState();
        // setAnchorEl(null);
        setSignOpen(false)
    }
    
    return (
             <div className="navbar d-flex flex-column">
                 <Link className="navbar__logo d-flex align-items-center" to="/">
                <img src={logo} />
                </Link>
                <div className="navbar__lists">
                <div className="navbar__lists--tool">
                    <div className="navbar__lists--title">
                    <h4>Tools</h4>
                    </div>
                    <div className="navbar__list">
                    <ul className="nav navbar-nav">
                        <NavLink className="navbar-li" to="/dashboards">
                            <i className="fas fa-border-all" />
                            <a className="navbar-a" >Dashboard</a>
                        </NavLink>
                        <NavLink className="navbar-li" to="/offers">
                            <i className="fab fa-buffer" />
                            <a className="navbar-a" >Offers</a>
                        </NavLink>
                        <NavLink className="navbar-li" to="/">
                            <i className="fas fa-user" />
                            <a className="navbar-a" >People</a>
                        </NavLink>
                        <NavLink className="navbar-li" to="/statistics"> 
                            <i className="fas fa-chart-bar" />
                            <a className="navbar-a" >Statistics</a>
                        </NavLink>
                        <NavLink className="navbar-li" to="/documents">
                            <i className="fas fa-file-alt" />
                            <a className="navbar-a" >Documents</a>
                        </NavLink>
                    </ul>
                    </div>
                </div>
                <div className="navbar__list--other">
                    <div className="navbar__lists--title">
                    <h4>Other</h4>
                    </div>
                    <div className="navbar__list">
                    <ul className="nav navbar-nav">
                        <li className="navbar-li">
                        <i className="fas fa-comment-alt" />
                        <a className="navbar-a" href="#">Chat</a>
                        <div className="number__chat">5</div>
                        </li>
                        <li className="navbar-li">
                        <i className="fas fa-exclamation-circle" />
                        <a className="navbar-a" href="#">Support</a>
                        </li>
                        <li className="navbar-li">
                        <i className="far fa-calendar-alt" />
                        <a className="navbar-a" href="#">Calendar</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="nameadmin d-flex justify-content-center align-items-center">
                <div className="nameadmin__img">
                    <img src="./img/admin-img.png" alt="" />
                </div>
                <div className="nameadmin__infor">
                    <h3>Mr. Quang Huy</h3>
                    <small>Admin</small>
                </div>
                
                </div>
                
                
            </div>
    );        
}

export default Header;