import React, { useState } from "react";
import { nanoid } from "nanoid";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { id: '', profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = [
    {
      name: "Javascript"
    },
    {
      name: "Java"
    },
    {
      name: "Python"
    },
    {
      name: "Django"
    },
    {
      name: "Rust"
    }
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, id: nanoid() }); // Generating unique ID
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate('/AdminHome');
  };

  const { profile, exp, desc } = form;

  const handleChange = (e) => {
    setForm({ ...form, techs: [...form.techs, e.target.value], id: nanoid() });
  }

  return (
    <Paper sx={{ padding: "2%" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value, id: nanoid() })}
            label="Job-profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value, id: nanoid() })}
            label="Years of Experience"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value, id: nanoid() })}
            label="Job-desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: "1% auto" }}>
            <h3>Please mention required skills</h3>
            <ul>
              {skillSet.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <div >
                      <div>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          onChange={handleChange}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                      </div>
                    </div>
                  </li>
                );
              })}

            </ul>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
