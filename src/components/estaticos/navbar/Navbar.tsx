import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css'

function Navbar(){

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return(
     <div  className="container border">
        <div className="center">
            <a href="index.html"><img className="tm" src="https://static.vecteezy.com/system/resources/thumbnails/008/863/695/small/medical-health-logo-icon-design-template-health-logo-for-clinic-hospital-medical-center-vector.jpg" alt="" /> </a>
        </div>
        <div className="btn center">
            <a href="/home"><button className="btn btn-design">Home</button></a>
        </div>
        <div className="btn center">
            <a href="/sobre"><button className="btn btn-design">Sobre a Probem</button></a>
        </div>
        <div className="btn center">
            <a href="/contato"><button className=" btn btn-design">Contato</button></a>
        </div>
        <div className="btn center">
            <a href="/doacoes"><button className="btn btn-design">Doações</button></a>
        </div>
        <div className="btn center">
            <a href="/login"><button className="btn btn-design">Login</button></a>
        </div>
        <div className="center">
            <a href="//google.com"><img className="tm" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" alt=""/></a>
        </div>
     </div>
    );
}

export default Navbar;