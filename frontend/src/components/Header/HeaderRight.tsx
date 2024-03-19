import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

export const HeaderRight = () => {
  return (
    <Grid
      sx={{
        width: "fit-content",
        display: "flex",
        gap: "100px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          borderRadius: "8px",
          borderColor: "black",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Хайх"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "10px",
          display: "flex",
          fontSize: "20px",
          gap: "10px",
          fontFamily: "sans-serif",
          marginBottom: "10px",
          fontWeight: "500px",
        }}
      >
        <ShoppingBasketOutlinedIcon sx={{ fontSize: "30px" }} />
        <Box>Сагс</Box>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: "38px",
          marginLeft: "20px",
          display: "flex",
          fontSize: "20px",
          gap: "10px",
          fontFamily: "sans-serif",
          marginBottom: "10px",
          fontWeight: "500px",
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: "30px" }} />
        <Grid>Нэвтрэх</Grid>
      </Stack>
    </Grid>
  );
};
