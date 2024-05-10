import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/joy";
import Footer from "@/components/Footer";
import "@/app/global.css";
export const metadata = {
  title: "Donghee",
  description: "A personal portfolio site for Donghee.",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Sidebar />
            <Box
              component="main"
              className="MainContent"
              sx={{
                pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                height: "100dvh",
                gap: 1,
                overflow: "auto",
              }}
            >
              {props.children}
            </Box>
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
