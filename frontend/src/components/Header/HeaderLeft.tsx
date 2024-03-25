"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export const HeaderLeft = () => {
  const { push } = useRouter();
  const handlePush = () => {
    push("/Menu");
  };
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: "60px",
        width: "500px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
          fontFamily: "sans-serif",
          fontWeight: "600",
          gap: "35px",
        }}
      >
        <img src="Pinecone.png" alt="" width={50} height={40} />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <Grid>
            <Button
              variant="text"
              sx={{
                width: "134px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "600",
                color: "#000",
              }}
            >
              Нүүр
            </Button>
          </Grid>
          <Grid>
            <Button
              onClick={() => handlePush()}
              variant="text"
              sx={{
                width: "134px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
              }}
            >
              ХООЛНЫ ЦЭС
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="text"
              sx={{
                width: "154px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
                flexDirection: "row",
              }}
            >
              ХҮРГЭЛТИЙН БҮС
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};
