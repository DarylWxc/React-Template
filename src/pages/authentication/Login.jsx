import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    let isValid = true;
    if (!username) {
      isValid = false;
      setError((prev) => ({ ...prev, username: "Username is required" }));
    }

    if (!password) {
      isValid = false;
      setError((prev) => ({ ...prev, password: "Password is required" }));
    }

    if (isValid) {
      console.log("Form submitted:", formData);
      // Perform login logic here
      location.href = "/dashboard";
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.light" }}>
          <AccountBoxIcon />
        </Avatar>
        <Typography variant="h5">
          Login Page
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
            error={!!error.username}
            helperText={error.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!error.password}
            helperText={error.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
