import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.header,
        color: theme.palette.text.header,
        py: 3, // Add some padding
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="inherit" // Changed from text.primary to inherit
          align="center"
          sx={{ mb: 2 }}
        >
          &copy; 2024 Shashidhar Sripada. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            href="https://www.linkedin.com/in/shashidhar-sripada-899b2520a/"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'inherit', // Changed from color="primary"
              "&:hover": {
                transform: "scale(1.1)",
                color: theme.palette.primary.main,
                transition: theme.transitions.create(["transform", "color"]),
              },
            }}
          >
            <FaLinkedin size={24} />
          </IconButton>
          <IconButton
            href="https://github.com/mrrobot1795"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'inherit', // Changed from color="primary"
              "&:hover": {
                transform: "scale(1.1)",
                color: theme.palette.primary.main,
                transition: theme.transitions.create(["transform", "color"]),
              },
            }}
          >
            <FaGithub size={24} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
