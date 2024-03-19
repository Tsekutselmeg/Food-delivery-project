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
import { useRouter } from "next/navigation";

const Password = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/Create-new-password");
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
          Нууц үг сэргээх
        </Box>
        <Box
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            width: "350px",
          }}
        >
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
        </Box>
        <FormControl sx={{ m: 1, width: "384px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Нууц үг сэргээх код
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
            border: 1,
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
export default Password;
