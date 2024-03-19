"use client";
import { Box, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div className="w-[2240px] h-[650px] bg-[#18BA51] relative">
      <img src="Footer.png" alt="" className="h-[650px] w-[2240px]" />
      <div className="flex flex-col absolute bottom-[100px] left-[180px] w-[1880px] h-[350px] gap-10 items-center">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <img src="Logo.png" alt="" height={40} width={40} />
          <Box
            sx={{
              color: "white",
              fontSize: "25px",
              fontWeight: 700,
            }}
          >
            Food Delivery
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "1200px",
            height: "22px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <Link href="#" color="#FFFFFF">
            Нүүр
          </Link>
          <Link href="#" color="#FFFFFF">
            Холбоо барих
          </Link>
          <Link href="#" color="#FFFFFF">
            Хоолны цэс
          </Link>
          <Link href="#" color="#FFFFFF">
            Үйлчилгээний нөхцөл
          </Link>
          <Link href="#" color="#FFFFFF">
            Хүргэлтийн бүс
          </Link>
          <Link href="#" color="#FFFFFF">
            Нуууцлалын бодлого
          </Link>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <FacebookRoundedIcon sx={{ color: "white", fontSize: "50px" }} />
          <InstagramIcon sx={{ color: "white", fontSize: "50px" }} />
          <TwitterIcon sx={{ color: "white", fontSize: "50px" }} />
        </Stack>
        <Stack sx={{ border: "1px solid white", width: "1300px" }}></Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              color: "white",
            }}
          >
            © 2024 Pinecone Foods LLC{" "}
          </Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              color: "white",
            }}
          >
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Box>
        </Stack>
      </div>
    </div>
  );
};
export default Footer;
