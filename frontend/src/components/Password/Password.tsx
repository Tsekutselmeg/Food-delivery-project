"use client";
import { Stack, Box, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Password = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/Password-recovery");
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
        <Stack>
          <TextField
            id="outlined-basic"
            label="И-Мэйл"
            variant="outlined"
            sx={{
              width: "384px",
            }}
          />
        </Stack>
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
