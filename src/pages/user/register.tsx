import React, { useState } from "react";
import Link from "next/link";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    error: {
      main: "#d32f2f",
    },
  },
});

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const router = useRouter();
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: formData.username.trim() === "",
      email: !validateEmail(formData.email),
      password: !validatePassword(formData.password),
      confirmPassword: formData.password !== formData.confirmPassword,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // 提交表单逻辑
      axios({
        url: "/api/user/regist",
        method: "post",
        data: formData,
      }).then((res) => {
        if (res.data) {
          router.push("/api/user/login");
        }
      });
      console.log("Form  submitted:", formData);
    }
  };

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8, p: 4, boxShadow: 0, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            用户注册
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="用户名"
                  variant="outlined"
                  error={errors.username}
                  helperText={errors.username && "用户名不能为空"}
                  onChange={handleChange("username")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="邮箱"
                  type="email"
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email && "请输入有效的邮箱地址"}
                  onChange={handleChange("email")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="密码"
                  type={formData.showPassword ? "text" : "password"}
                  variant="outlined"
                  error={errors.password}
                  helperText={
                    errors.password && "至少8个字符，包含大写字母和数字"
                  }
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
                <TextField
                  fullWidth
                  label="确认密码"
                  type="password"
                  variant="outlined"
                  error={errors.confirmPassword}
                  helperText={errors.confirmPassword && "两次输入的密码不一致"}
                  onChange={handleChange("confirmPassword")}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="我已阅读并同意服务条款"
                />
                <Button variant="text" size="small">
                  <Link href="/user/login" replace>
                    登录
                  </Link>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  立即注册
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
