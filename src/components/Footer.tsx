import { Box, Typography } from "@mui/joy";

import { footer } from "@/data/footer";
import { SocialList } from "./Layout";
const Footer = () => {
  return (
    <>
      <Box
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        sx={{
          p: 2,
        }}
      >
        <Box>
          <SocialList />
        </Box>
        <Typography color="neutral" textAlign={"center"} fontSize={"10px"}>
          {footer.contents}
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
