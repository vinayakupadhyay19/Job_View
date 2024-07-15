import React from 'react';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginOption = () => {
    return (

        <div>

            <div className="LoginOption" style={{ textAlign: "center", margin: "20px" }}>
                <h2>Login Option</h2>

                <Link to="/employer/UserLogin" style={{ textDecoration: "none", marginRight: "10px" }}>
                    <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>User Login</Button>
                </Link>
                <Link to="/employer/AdminLogin" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">Admin Login</Button>
                </Link>
            </div>


        </div>
    )
}

export default LoginOption