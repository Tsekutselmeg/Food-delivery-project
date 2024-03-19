import Login from "@/components/Login/Login";
import { Stack } from "@mui/material";

export default function Loginn() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login />
    </Stack>
  );
}
