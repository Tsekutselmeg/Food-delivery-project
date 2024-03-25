import { Stack, Box } from "@mui/material";
import Main from "@/components/Home/Main";
import Middle from "@/components/Home/Middle";
import Last from "@/components/Home/Last";
import Asia from "./Asia";

const Home = () => {
  return (
    <Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "center",
        }}
      >
        <img src="Desktop43.png" alt="" className="h-[1020px] w-[1950px]" />
      </Stack>
      <Stack
        sx={{
          padding: "80px 120px 80px 120px",
          display: "flex",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "140px",
            padding: "40px",
          }}
        >
          <Stack
            sx={{
              height: "170px",
              width: "300px",
              borderRadius: "16px",
              boxShadow: "3px 5px 10px #D6D8DB",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "16px",
            }}
          >
            <Stack>
              <img src="delivery1.png" alt="" className="h-[60px] w-[60px]" />
            </Stack>
            <Stack>
              <Box sx={{ fontSize: "20px", fontWeight: 700 }}>
                Хүргэлтийн төлөв хянах
              </Box>
              <Box sx={{ fontSize: "16px", fontWeight: 300, color: "#272727" }}>
                Захиалга бэлтгэлийн явцыг хянах
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "170px",
              width: "300px",
              borderRadius: "16px",
              boxShadow: "3px 5px 10px #D6D8DB",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "16px",
            }}
          >
            <Stack>
              <img src="delivery2.png" alt="" className="h-[60px] w-[60px]" />
            </Stack>
            <Stack>
              <Box sx={{ fontSize: "20px", fontWeight: 700 }}>
                Шуурхай хүргэлт
              </Box>
              <Box sx={{ fontSize: "16px", fontWeight: 300, color: "#272727" }}>
                Захиалга бэлтгэлийн явцыг хянах
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "170px",
              width: "300px",
              borderRadius: "16px",
              boxShadow: "3px 5px 10px #D6D8DB",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "16px",
            }}
          >
            <Stack>
              <img src="delivery3.png" alt="" className="h-[60px] w-[60px]" />
            </Stack>
            <Stack>
              <Box sx={{ fontSize: "20px", fontWeight: 700 }}>
                Эрүүл, баталгаат орц
              </Box>
              <Box sx={{ fontSize: "16px", fontWeight: 300, color: "#272727" }}>
                Захиалга бэлтгэлийн явцыг хянах
              </Box>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "170px",
              width: "300px",
              borderRadius: "16px",
              boxShadow: "3px 5px 10px #D6D8DB",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "16px",
            }}
          >
            <Stack>
              <img src="delivery1.png" alt="" className="h-[60px] w-[60px]" />
            </Stack>
            <Stack>
              <Box sx={{ fontSize: "20px", fontWeight: 700 }}>
                Хоолны өргөн сонголт
              </Box>
              <Box sx={{ fontSize: "16px", fontWeight: 300, color: "#272727" }}>
                Захиалга бэлтгэлийн явцыг хянах
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Main />
        <Asia />
        <Middle />
        <Last />
      </Stack>
    </Stack>
  );
};
export default Home;
