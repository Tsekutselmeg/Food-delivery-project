import { Stack, Box, Link } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Middle = () => {
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
            Салад ба зууш
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
          <img src="Chicken.png" alt="" />
          <Stack>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Чихэрлэг тахиа
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
          }}
        >
          <img src="Lunch.png" alt="" />
          <Stack>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Lunch
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
          }}
        >
          <img src="Sandwich.png" alt="" />
          <Stack>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Сэндвич
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
          <img src="Apple-pie.png" alt="" />
          <Stack>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Apple pie
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
      </Stack>
    </Stack>
  );
};
export default Middle;
