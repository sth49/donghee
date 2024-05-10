import { Box, Card, Typography } from "@mui/joy";
import { about, news } from "@/data/about";

import moment from "moment";
const About = () => {
  return (
    <Box sx={{ mt: 5, p: 2 }}>
      <Card variant="plain" sx={{ mb: 2, maxWidth: "900px" }}>
        <Typography level="h2" sx={{ mb: 1 }}>
          About
        </Typography>
        <Typography level="title-lg">{about.name}</Typography>

        <Typography level="body-sm">{about.Bio}</Typography>
      </Card>
      <Card variant="outlined" sx={{ mb: 2, maxWidth: "900px" }}>
        <Typography level="title-lg">⭐ News</Typography>
        {news.map((item, index) => (
          <Box key={index} sx={{ mb: 2, display: "flex" }}>
            <Typography level="title-sm" sx={{ mr: 2 }}>
              {moment(item.date).format("YYYY.MM")}
            </Typography>
            <Typography level="body-sm">{item.content}</Typography>
          </Box>
        ))}
      </Card>
    </Box>
  );
};
export default About;
