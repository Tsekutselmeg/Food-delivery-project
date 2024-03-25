"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Modal, Stack } from "@mui/material";

const Second = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [count, setCount] = useState(1);

  const handleCount = () => {
    count = count + 1;
    setCount(count);
  };
  const handleMinus = () => {
    count = count - 1;
    setCount(count);
  };
  const home = [
    {
      Image: (
        <img
          src="seaweed soup.png"
          alt=""
          className="h-[186px] w-[286px] rounded-2xl"
        />
      ),
      text: "Seaweed soup",
      amount: "21,000₮",
    },
    {
      Image: (
        <img
          src="Beef-Soup.png"
          alt=""
          className="h-[186px] w-[286px] rounded-2xl"
        />
      ),
      text: "Beef-Soup",
      amount: "35,000₮",
    },
    {
      Image: (
        <img
          src="Takturitan.png"
          alt=""
          className="h-[186px] w-[286px] rounded-2xl"
        />
      ),
      text: "Takturitan",
      amount: "30,000₮",
    },
    {
      Image: (
        <img
          src="Egg-drop-soup.png"
          alt=""
          className="h-[186px] w-[286px] rounded-2xl"
        />
      ),
      text: "Egg drop soup",
      amount: "15,000₮",
    },
  ];
  return (
    <Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "70px",
          paddingBottom: "80px",
          paddingTop: "80px",
        }}
      >
        <div className="flex flex-row items-center justify-center gap-[125px]">
          {home.map(({ Image, text, amount }, index) => {
            return (
              <div
                onClick={handleOpen}
                key={index}
                className="flex flex-row justify-center items-center rounded-xl"
              >
                <div className="flex flex-col gap-2">
                  <div className="">{Image}</div>
                  <div className="text-lg font-semibold">{text}</div>
                  <div className="text-[#18BA51] text-lg font-semibold">
                    {amount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "961px",
              height: "524px",
              gap: "20px",
              padding: "32px",
              borderRadius: "16px",
              backgroundColor: "white",
            }}
          >
            <Stack>
              <img src="Jeyug.png" alt="" className="w-[450px] h-[470px]" />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                width: "420px",
                gap: "85px",
              }}
            >
              <Stack>
                <Box
                  sx={{
                    fontSize: "36px",
                    fontWeight: 600,
                  }}
                >
                  Жэюүг
                </Box>
                <Box
                  sx={{
                    color: "#18BA51",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  18,500₮
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Орц
                </Box>
                <Stack
                  sx={{
                    width: "418px",
                    backgroundColor: "#f6f6f6",
                    height: "50px",
                    padding: "5px 5px",
                    borderRadius: "6px",
                    marginTop: "7px",
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  <Box>
                    Гахайн мах, лууван, сонгино, жэюүг амтлагч, sesame oil
                  </Box>
                </Stack>
              </Stack>
              <Stack sx={{ gap: "10px" }}>
                <div style={{ fontFamily: "sans-serif" }}>Тоо</div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    onClick={handleMinus}
                    style={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      borderRadius: "10px",
                      width: "50px",
                      height: "40px",
                    }}
                  >
                    -
                  </button>
                  <div style={{ fontFamily: "sans-serif" }}>{count}</div>
                  <button
                    onClick={handleCount}
                    style={{
                      backgroundColor: "#18BA51",
                      color: "white",
                      borderRadius: "10px",
                      width: "50px",
                      height: "40px",
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  style={{
                    backgroundColor: "#18BA51",
                    color: "white",
                    borderRadius: "4px",
                    height: "40px",
                  }}
                >
                  Сагслах
                </button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
};
export default Second;
