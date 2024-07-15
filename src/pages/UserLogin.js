import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';
const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error , setError] = useState('');

    //const [form, setForm] = useState(initial);

    const handleUsernameChange = (event) => {
        setError('');
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setError('');
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your login logic here, for example:
        console.log('Username:', username);
        console.log('Password:', password);
        if(username.length === 0 || password.length === 0){
            setError("Please enter Username or Password");
        }
        else{
        await axios.post("http://localhost:8080/UserLogin", {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response);
                if (response.data === true) {
                    window.location.href = "http://localhost:3000/employee/feed";
                }else{
                    setError("Wrong Credentials Either Username or Password");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ marginTop: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Login</Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '32px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="username"
                                label="Username"
                                value={username}
                                onChange={handleUsernameChange}
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                
                            />
                        </Grid>
                    </Grid>
                    {
                        error.length>0 &&
                        (<Typography variant="body2" color="error">
                            {error}
                        </Typography>
                        )
                    }
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ marginTop: '32px' }}
                    >
                        Login
                    </Button>
                    <Link to="/employer/UserRegistration" style={{ textDecoration: "none" }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ marginTop: '32px' }}
                        >
                            Register
                        </Button>
                    </Link>
                </form>
            </div>
        </Container>
    );
};

export default UserLogin;