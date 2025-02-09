"use client";

import { Box, Container, Typography, Grid, Paper, Fade, Grow, Chip, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Web as WebIcon 
} from '@mui/icons-material';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <WebIcon fontSize="large" />,
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Backend Development",
    icon: <CodeIcon fontSize="large" />,
    skills: ["Node.js", "Express.js", "Nest.js", "Spring Boot"]
  },
  {
    title: "Database & Cloud",
    icon: <CloudIcon fontSize="large" />,
    skills: ["MongoDB", "AWS", "Docker", "Kafka"]
  },
  {
    title: "Programming Languages",
    icon: <DatabaseIcon fontSize="large" />,
    skills: ["C++", "Python", "Java", "TypeScript"]
  }
];

export default function SkillsPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          textAlign: 'center',
          py: 8,
          px: 2,
        }}
      >
        <Fade in={true} timeout={800}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
              },
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technical Skills
          </Typography>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} md={6} key={category.title}>
              <Grow
                in={true}
                timeout={800}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mb: 2,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      mb: 3,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        sx={{
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
