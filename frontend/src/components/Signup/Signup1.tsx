"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import TextField from "@mui/material/TextField";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/Login");
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center flex-col h-[780px] w-[450px] p-8 gap-8">
      <Box
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: "26px",
        }}
      >
        Бүртгүүлэх
      </Box>
      <TextField
        id="outlined-basic"
        label="Нэр"
        variant="outlined"
        sx={{
          width: "300px",
        }}
      />
      <TextField
        id="outlined-basic"
        label="И-Мэйл"
        variant="outlined"
        sx={{
          width: "300px",
        }}
      />
      <TextField
        id="outlined-basic"
        label="Хаяг"
        variant="outlined"
        sx={{
          width: "300px",
        }}
      />
      <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Нууц үг</InputLabel>
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
      <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
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
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox {...label} sx={{ width: "30px" }} />
          <Box>Үйлчилгээний нөхцөл зөвшөөрөх</Box>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "384px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#EEEFF2",
          }}
        >
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
    </div>
  );
};
export default Signup;
