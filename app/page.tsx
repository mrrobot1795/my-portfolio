"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Fade, 
  Slide, 
  useTheme,
  Paper,
  Grid,
  Avatar,
  Divider,
  Stack,
  Chip
} from "@mui/material";
import { 
  CodeRounded, 
  CloudDone, 
  Storage, 
  Speed,
  DataArray,
  Code,
  Psychology 
} from '@mui/icons-material';

export default function HomePage() {
  const theme = useTheme();

  const features = [
    {
      icon: <CodeRounded />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: <CloudDone />,
      title: "Cloud Solutions",
      description: "Deploying and managing applications on AWS"
    },
    {
      icon: <Storage />,
      title: "Database Management",
      description: "Working with MongoDB and other database systems"
    },
    {
      icon: <Speed />,
      title: "Performance Optimization",
      description: "Creating fast and scalable solutions"
    }
  ];

  const dsaSkills = [
    {
      language: "C++",
      icon: <Code />,
      topics: [
        "STL Containers",
        "Dynamic Programming",
        "Graph Algorithms",
        "Trees & BST",
        "Sorting & Searching"
      ]
    },
    {
      language: "Python",
      icon: <DataArray />,
      topics: [
        "Data Structures",
        "NumPy & Pandas",
        "Algorithmic Problems",
        "Object-Oriented Design",
        "Collections Framework"
      ]
    },
    {
      language: "Java",
      icon: <Psychology />,
      topics: [
        "Collections Framework",
        "Threading & Concurrency",
        "Design Patterns",
        "Problem Solving",
        "Algorithm Analysis"
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          textAlign: "center",
          my: 8,
          px: { xs: 2, md: 4 },
        }}
      >
        <Slide direction="down" in={true} timeout={800}>
          <Box sx={{ mb: 6 }}>
            <Avatar
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto',
                mb: 3,
                border: `4px solid ${theme.palette.primary.main}`,
              }}
              alt="Shashidhar Sripada"
              src="/images/IMG_4755.jpg"
            />
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "2.5rem" },
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome to My Portfolio
            </Typography>
          </Box>
        </Slide>

        <Fade in={true} timeout={800} style={{ transitionDelay: "500ms" }}>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Software Developer with expertise in MERN, Next.js, C++, Python,
            Java, and AWS
          </Typography>
        </Fade>

        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in={true} timeout={800} style={{ transitionDelay: `${(index + 2) * 200}ms` }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)'
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Divider sx={{ my: 8 }} />

      <Box>
        <Fade in={true} timeout={800}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              fontSize: { xs: "1.75rem", sm: "2.25rem" },
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Data Structures & Algorithms
          </Typography>
        </Fade>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {dsaSkills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.language}>
              <Fade
                in={true}
                timeout={800}
                style={{ transitionDelay: `${(index + 6) * 200}ms` }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <Box
                      sx={{
                        color: theme.palette.primary.main,
                        transform: 'scale(1.5)',
                        mb: 1
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 'bold' }}
                    >
                      {skill.language}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'center'
                      }}
                    >
                      {skill.topics.map((topic, topicIndex) => (
                        <Chip
                          key={topicIndex}
                          label={topic}
                          size="small"
                          sx={{
                            backgroundColor: 'background.paper',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'primary.contrastText',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
