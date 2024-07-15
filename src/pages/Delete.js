import { Button, Grid, TextField, Typography, Container } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Delete = () => {
    const [username, setUsername] = useState('');
    const [messege, setMessege] = useState('');

    const handleUsernameChange = (event) => {
        setMessege('');
        setUsername(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8080/users/${username}`)
            .then((response) => {
                console.log(response);
                if (response.data === true) {
                    setMessege('User deleted successfully');
                }else{
                    setMessege('User not found');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <Container component="main" maxWidth="xs">
            <div style={{ marginTop: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Delete User by username</Typography>
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

export default Delete;
