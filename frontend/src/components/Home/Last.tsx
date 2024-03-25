import { Stack, Box, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Last = () => {
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
            Амттан
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
          }}
        >
          <img src="Cake.png" alt="" />
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
              Торт
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
          }}
        >
          <img src="Shake.png" alt="" />
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
              Oreo shake
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
          <img src="Chocolate.png" alt="" />
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
              Chocolate
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
          <img src="Yogurt.png" alt="" />
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
              Yoghurt
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
      </Stack>
    </Stack>
  );
};
export default Last;
