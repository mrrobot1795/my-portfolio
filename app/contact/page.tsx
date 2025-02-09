"use client";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Modal,
  Fade,
  IconButton,
  Stack,
  useTheme,
  Grid,
  Divider,
  Tooltip,
} from "@mui/material";
import {
  Close as CloseIcon,
  Download as DownloadIcon,
  Article as ArticleIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

const socialLinks = [
  {
    name: "Email",
    icon: <EmailIcon />,
    href: "mailto:shashidhar.sripada.17@gmail.com",
    tooltip: "Send me an email",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/shashidhar-sripada-899b2520a/",
    tooltip: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/mrrobot1795",
    tooltip: "View my GitHub",
  },
];

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post("/api/send-message", formData);
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send the message.");
      }
    } catch (error) {
      console.error("An error occurred while sending the message:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          py: { xs: 4, md: 8 },
          mt: { xs: 2, md: 4 }
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Fade in timeout={800}>
              <Stack spacing={4}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 4,
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                  }}
                >
                  Get in Touch
                </Typography>
                <Paper
                  component="form"
                  onSubmit={handleSubmit}
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        py: 1.5,
                        fontSize: "1.1rem",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Stack>
                </Paper>
              </Stack>
            </Fade>
          </Grid>

          <Grid item xs={12} md={5}>
            <Fade in timeout={800} style={{ transitionDelay: "200ms" }}>
              <Stack spacing={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 3 }}
                  >
                    Connect With Me
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    {socialLinks.map((link) => (
                      <Tooltip key={link.name} title={link.tooltip}>
                        <IconButton
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.dark,
                              transform: "scale(1.1)",
                            },
                            transition: "all 0.3s ease-in-out",
                          }}
                        >
                          {link.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </Stack>
                </Paper>

                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    My Resume
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => setIsModalOpen(true)}
                      startIcon={<ArticleIcon />}
                      fullWidth
                      sx={{
                        py: 1.5,
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      View Resume
                    </Button>
                    <Button
                      variant="outlined"
                      href="/ShashidharSripada4.pdf"
                      download
                      startIcon={<DownloadIcon />}
                      fullWidth
                      sx={{ py: 1.5 }}
                    >
                      Download Resume
                    </Button>
                  </Stack>
                </Paper>
              </Stack>
            </Fade>
          </Grid>
        </Grid>

        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          closeAfterTransition
        >
          <Fade in={isModalOpen} timeout={theme.transitions.duration.standard}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "75%",
                height: "75%",
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.shadows[24],
                p: theme.spacing(4),
                borderRadius: theme.shape.borderRadius,
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  right: theme.spacing(1),
                  top: theme.spacing(1),
                  color: theme.palette.grey[500],
                }}
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <Box
                component="iframe"
                src="/ShashidharSripada4.pdf"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: theme.shape.borderRadius,
                }}
                title="Resume"
              />
            </Box>
          </Fade>
        </Modal>

        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
      </Box>
    </Container>
  );
}
