import { Button, Grid, TextField, Typography, Container } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Update = () => {
    const [username, setUsername] = useState('');
    const [messege, setMessege] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setMessege('');
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setMessege('');
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length !== 0 && username.length !== 0) {
            await axios.put(`http://localhost:8080/update`, { username, password })
                .then((response) => {
                    console.log(response);
                    if (response.data === true) {
                        setMessege('Password changed...');
                        // window.location.href = "http://localhost:3000/admin/updateDetail";
                    } else {
                        if (response.data.username === "")
                            setMessege('User not found');
                        else
                            setMessege('Do not submit its changed..');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            if (password.length === 0)
                setMessege('Please enter password');
            if (username.length === 0)
                setMessege('Please enter username');
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <div style={{ marginTop: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Update detail by username</Typography>
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
                    </Grid>
                    <br></br>
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
                    {
                        messege.length > 0 &&
                        (<Typography variant="body2" color="error">
                            {messege}
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
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Update;
