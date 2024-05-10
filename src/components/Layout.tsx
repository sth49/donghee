import ColorSchemeToggle from "./ThemeRegistry/ColorSchemeToggle";
import { AspectRatio, Button } from "@mui/joy";
import Image from "next/image";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";

import { navItems } from "@/data/navigation";
import { about } from "@/data/about";
import Link from "next/link";
import { socials } from "@/data/social";
export function Profile() {
  return (
    <>
      <Stack direction="column" spacing={1} mt={5}>
        <AspectRatio
          ratio="1"
          sx={{ flex: 1, minWidth: 100, borderRadius: "50%" }}
        >
          <Image
            src={about.profileImage}
            alt="Avatar"
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>
      </Stack>
      <Typography level="title-md" textAlign={"center"}>
        {about.name}
      </Typography>
      <SocialList size="md" />
      <Divider />
    </>
  );
}

export function SideNavigation({ pathname }: { pathname: string }) {
  return (
    <>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {navItems.map((item) => (
            <Link key={item.route} href={item.route}>
              <Button
                sx={{
                  justifyContent: "flex-start",
                }}
                fullWidth
                startDecorator={<item.icon />}
                variant={pathname === item.route ? "solid" : "soft"}
                color="neutral"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </List>
      </Box>
    </>
  );
}

export function SocialList({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        {socials.map((social) => (
          <Button
            key={social.name}
            variant="plain"
            size={size}
            sx={{ p: 1 }}
            color="neutral"
            startDecorator={<social.icon />}
          ></Button>
        ))}
      </Box>
    </>
  );
}
