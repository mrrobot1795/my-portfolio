"use client";

import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: theme.palette.background.header, color: theme.palette.text.header }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            "& .MuiButton-root": {
              color: "text.header",
              "&:hover": {
                color: "primary.main",
              },
            },
          }}
        >
          <Box sx={{ display: "flex", gap: theme.spacing(2) }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: pathname === item.path ? theme.palette.primary.main : theme.palette.text.header, // Use header text color instead of primary
                    position: "relative",
                    padding: theme.spacing(1, 2),
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: pathname === item.path ? "0" : "50%",
                      width: pathname === item.path ? "100%" : "0",
                      height: "2px",
                      bgcolor: theme.palette.primary.main,
                      transition: theme.transitions.create(["width", "left"], {
                        duration: theme.transitions.duration.shorter,
                      }),
                    },
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "transparent",
                      "&::after": {
                        width: "100%",
                        left: 0,
                      },
                    },
                    "&:active": {
                      transform: "scale(0.95)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
