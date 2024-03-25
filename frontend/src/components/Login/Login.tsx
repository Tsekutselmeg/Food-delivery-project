"use client";
import {
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";

import * as React from "react";

const Login = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/Signup");
  };
  const handleC = () => {
    push("/Home");
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "900px",
        width: "500px",
        padding: "32px",
        gap: "40px",
      }}
    >
      <Box
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "26px",
        }}
      >
        Нэвтрэх
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="И-Мэйл"
          variant="outlined"
          sx={{
            width: "384px",
          }}
        />
        <Stack>
          <FormControl sx={{ m: 1, width: "384px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үг
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Link href="Password" color="#000">
              Нууц үг сэргээх
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Button
          onClick={() => handleC()}
          sx={{
            width: "384px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "600",
            border: 2,
          }}
        >
          Нэвтрэх
        </Button>
        <Box>Эсвэл</Box>
        <Button
          variant="text"
          onClick={() => handlePush()}
          sx={{
            width: "384px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: "600",
            border: 2,
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
export default Login;
