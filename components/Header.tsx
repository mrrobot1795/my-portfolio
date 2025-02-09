"use client";

import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: theme.palette.background.header, color: theme.palette.text.header }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", 
            gap: 2,
            paddingTop: 1, 
            "& .MuiButton-root": {
              color: "text.header",
              height: "45px", 
              marginTop: "-4px",
              "&:hover": {
                color: "primary.main",
              },
            },
          }}
        >
          <Box sx={{ display: "flex", gap: theme.spacing(2) }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: "/skills", label: "Skills" },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Button
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                sx={{
                  color: 'text.header',
                  '&.active': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
