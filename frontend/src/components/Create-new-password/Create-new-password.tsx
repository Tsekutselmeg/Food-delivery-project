"use client";
import {
  Stack,
  Box,
  FormControl,
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import * as React from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";

export function Newpassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  interface State extends SnackbarOrigin {
    open: boolean;
  }

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const buttons = (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "500px",
        }}
      >
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Үргэлжлүүлэх
        </Button>
      </Box>
    </React.Fragment>
  );
  const { push } = useRouter();
  const handlePush = () => {
    push("/Home");
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "32px",
          gap: "55px",
          marginTop: "150px",
          marginBottom: "150px",
        }}
      >
        <Box
          sx={{
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          Шинэ нууц үг зохиох
        </Box>
        <Stack
          sx={{
            gap: "20px",
          }}
        >
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "384px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үг давтах
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Stack>
        <Box sx={{ width: 500 }}>
          {buttons}
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            onClick={() => handlePush()}
            message="Нууц үг амжилттай солигдлоо."
            key={vertical + horizontal}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
