import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import React from 'react';

const AdminHome = () => {
    return (
        <div>
            <Typography
                sx={{ margin: "5%" }} variant="h4" align="center"
            >
                Welcome to Admin Page.
            </Typography>

            {/* Link to the Create Job page */}
            <div style={{ textAlign: "center", margin: "10%" }}>
                <Link to="/admin/create" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: "1%", marginBottom: "1%" }}>
                        Create Job
                    </Button>
                </Link>
                <Link to="/admin/delete" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: "1%", marginBottom: "1%" }}>
                        Delete
                    </Button>
                </Link>
                <Link to="/admin/update" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: "1%", marginBottom: "1%" }}>
                        Update
                    </Button>
                </Link>
                <Link to="/admin/view" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: "1%", marginBottom: "1%" }}>
                        View
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default AdminHome;
