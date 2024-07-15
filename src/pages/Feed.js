import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();
  const [ui, setUi] = useState(false);
  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      console.log(response);
      setPost(response.data);
    }
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query, ui]);
  console.log(post);

  async function handleApply(id) {
    console.log(id)
    // e.preventDefault();
    await axios.delete(`http://localhost:8080/apply/${id}`)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          // window.location.href = "http://localhost:3000/employee/feed";

          setUi(!ui);
          console.log(ui);
        }
      })
      .then((data) => {
        console.log("Deleted Successfully :", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/" style={{ textDecoration: "none" }} >Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {post &&
        post.map((p) => {
          console.log(p._id)
          return (

            < Grid key={p._id} item xs={12} md={6} lg={4} >
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {p.profile}
                </Typography>
                <Typography sx={{ color: "#585858", marginTop: "2%" }} variant="body" >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Years of Experience: {p.exp} years
                </Typography>

                <Typography gutterBottom variant="body">Skills : </Typography>
                {p.techs.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })}
                <Button
                  sx={{ float: "right", margin: '4%' }}
                  variant="contained"
                  onClick={(e) => handleApply(p.id)}
                >

                  Apply
                </Button>
              </Card>
            </Grid>
          );
        })}
    </Grid >
  );
};

export default Feed;
