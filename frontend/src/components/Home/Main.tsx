import { Stack, Box, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Main = () => {
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
            Үндсэн хоол
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
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <img
            src="Pizza.png"
            alt=""
            className="w-[286px] h-[200px] rounded-xl"
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
              Main Pizza
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              34,800₮
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <img src="Pie.png" alt="" />
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
              Food tart
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              22,800₮
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="Image2.png" alt="" />
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
              Өглөөний хоол
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              14,800₮
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="Image3.png" alt="" />
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
              Зутан шөл
            </Box>
            <Box
              sx={{
                color: "#18BA51",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              17,800₮
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Main;
