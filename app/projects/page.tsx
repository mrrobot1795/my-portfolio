"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Chip, 
  Button, 
  Fade, 
  Grow,
  useTheme 
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import Image from "next/image";

const projects = [
  {
    title: "Tarot Card App",
    description: "A tarot card reading app",
    link: "https://tarot-mrrobot.vercel.app/",
    image: "/images/project-tarot-card-app.png",
    github: "https://github.com/mrrobot1795/tarot-app",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "TailWind CSS",
    ],
  },
  {
    title: "My Portfolio",
    description: "A portfolio which showcases my projects",
    link: "https://shashidhar-web.vercel.app",
    github: "https://github.com/mrrobot1795/my-portfolio",
    image: "/images/project-portfolio.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CSS",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Spotify Client App",
    description: "A Spotify client that let's you define start and end times for the songs you want to play",
    link: "https://spotify-mrrobot.vercel.app/",
    image: "/images/project-spotify-client-app.png",
    github: "https://github.com/mrrobot1795/spotify-frontend",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Spotify Web SDK",
    ],
  },
];

export default function ProjectsPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          py: theme.spacing(10),
          px: theme.spacing(4),
        }}
      >
        <Fade in={true} timeout={800}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: theme.spacing(8),
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
              },
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </Typography>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Grow
                in={true}
                timeout={800}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      position: 'relative',
                      height: 220,
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                      },
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 'bold',
                        color: theme.palette.text.primary 
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6 
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          mb: 1.5,
                          color: theme.palette.text.primary,
                          fontWeight: 'medium'
                        }}
                      >
                        Technologies Used:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.primary.contrastText,
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                transform: 'scale(1.05)',
                              },
                              transition: 'all 0.2s ease-in-out',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      startIcon={<Launch />}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      variant="contained"
                      size="medium"
                      sx={{
                        mr: 1,
                        fontWeight: 500,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      size="medium"
                      sx={{
                        fontWeight: 500,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      Source Code
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
