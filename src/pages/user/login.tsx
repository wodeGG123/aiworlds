import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import axios from "axios";
import localforage from "localforage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    error: { main: "#d32f2f" },
  },
});

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
    remember: false,
  });

  const [errors, setErrors] = useState({
    username: false,
    // email: false,
    password: false,
  });
  const router = useRouter();
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      //   email: !validateEmail(formData.email),
      username: formData.username.trim() === "",
      password: formData.password.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // 登录逻辑
      console.log("Login  submitted:", formData);
      // 这里可以添加axios.post('/api/login',  formData)等API调用
      axios({
        url: "/api/user/login",
        method: "post",
        data: formData,
      }).then((res) => {
        if (formData.remember) {
          localforage.setItem("access_token", res.data.access_token);
        }
        router.push("/journey/content");
      });
    }
  };

  const handleChange = (prop) => (event) => {
    setFormData({
      ...formData,
      [prop]: prop === "remember" ? event.target.checked : event.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            p: 4,
            boxShadow: 0,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            用户登录
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="邮箱"
                  type="email"
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email && "请输入有效的邮箱地址"}
                  onChange={handleChange("email")}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="用户名"
                  type="username"
                  variant="outlined"
                  error={errors.username}
                  helperText={errors.username && "请输入有效的邮箱地址"}
                  onChange={handleChange("username")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="密码"
                  type={formData.showPassword ? "text" : "password"}
                  variant="outlined"
                  error={errors.password}
                  helperText={errors.password && "密码不能为空"}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setFormData({
                              ...formData,
                              showPassword: !formData.showPassword,
                            })
                          }
                        >
                          {formData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="记住我"
                    onChange={handleChange("remember")}
                  />
                  <Button variant="text" size="small">
                    忘记密码？
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  立即登录
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
