"use client";
import * as React from "react";
import { useState } from "react";
import { Stack, Box, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Modal from "@mui/material/Modal";

const Asia = () => {
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

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          width: "2040px",
          padding: "40px 180px 40px 180px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src="Star1.png" alt="" className="h-[25px] w-[25px]" />
          <Box
            sx={{
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            Солонгос хоол
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Link href="#" color="#18BA51">
            Бүгдийг харах
          </Link>
          <KeyboardArrowRightIcon className="text-[#18BA51]" />
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "2040px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "150px",
          alignItems: "center",
        }}
      >
        <Stack
          onClick={handleOpen}
          sx={{
            display: "flex",
            gap: "14px",
          }}
        >
          <img
            src="Jeyug.png"
            alt=""
            className="w-[282px] h-[200px] rounded-xl"
          />
          <Stack
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Box
              sx={{
                fontSize: "18px",
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
        </Stack>
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
        <Stack
          sx={{
            display: "flex",
            gap: "14px",
          }}
        >
          <img
            src="bulgogi.png"
            alt=""
            className="w-[282px] h-[200px] rounded-xl"
          />
          <Stack
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Бүлгүүги
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              24,800₮
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <img
            src="Takturitan.png"
            alt=""
            className="w-[282px] h-[200px] rounded-xl"
          />
          <Stack
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Тактуритан
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              24,500₮
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <img
            src="Bibimbap.png"
            alt=""
            className="w-[282px] h-[200px] rounded-xl"
          />
          <Stack
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Бибимбаб
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              24,800₮
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Asia;
