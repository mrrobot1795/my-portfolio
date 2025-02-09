"use client";

import { 
  Box, 
  Container, 
  Typography, 
  Fade, 
  useTheme, 
  Paper,
  Grid,
  Avatar,
  Stack,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { 
  School,
  Work,
  Code,
  Psychology,
  Code as CodeIcon, 
  Cloud as CloudIcon, 
  Storage as StorageIcon,
  School as SchoolIcon 
} from '@mui/icons-material';

export default function AboutPage() {
  const theme = useTheme();

  const highlights = [
    {
      icon: <CodeIcon />,
      title: "Software Development",
      description: "MERN Stack, Next.js, Nest.js, Spring Boot, Django"
    },
    {
      icon: <CloudIcon />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, CI/CD"
    },
    {
      icon: <StorageIcon />,
      title: "Database & Architecture",
      description: "MongoDB, Microservices, Kafka"
    },
    {
      icon: <SchoolIcon />,
      title: "Core Programming",
      description: "C++, Python, Java"
    }
  ];

  const timeline = [
    {
      icon: <School />,
      title: "Education",
      period: "2014 - 2017",
      description: "Bachelor's in Computer Application",
      details: "Maharaja Surajmal Institute(GGSIPU)"
    },
    {
      icon: <Work />,
      title: "Professional Experience",
      period: "2018 - Present",
      description: "Software Developer",
      details: "Working on enterprise-level web applications"
    },
    {
      icon: <Code />,
      title: "Projects & Achievements",
      period: "2018 - Present",
      description: "Personal Projects",
      details: "Built multiple full-stack applications"
    },
    {
      icon: <Psychology />,
      title: "Skills Development",
      period: "2013 - Present",
      description: "Continuous Learning",
      details: "Mastering new technologies and frameworks"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: theme.spacing(10), px: theme.spacing(4) }}>
        <Grid container spacing={6}>
          {/* Left Section - Personal Info */}
          <Grid item xs={12} md={4}>
            <Fade in timeout={800}>
              <Stack spacing={4} alignItems="center">
                <Avatar
                  src="/images/IMG_4755.jpg"
                  alt="Shashidhar Sripada"
                  sx={{
                    width: 250,
                    height: 250,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[3],
                  }}
                />
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                  Shashidhar Sripada
                </Typography>
                <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" color="primary">Quick Facts</Typography>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Based in
                      </Typography>
                      <Typography variant="body1">Hyderabad, India</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Specialization
                      </Typography>
                      <Typography variant="body1">Software Development</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Experience
                      </Typography>
                      <Typography variant="body1">7+ Years</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </Fade>
          </Grid>

          {/* Technical Highlights */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      {highlight.icon}
                      <Box>
                        <Typography variant="h6">{highlight.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Timeline position="alternate">
              {timeline.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      {item.icon}
                    </TimelineDot>
                    {index < timeline.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Fade in timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                      <Paper elevation={3} sx={{ 
                        p: 3,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}>
                        <Typography variant="h6" component="h3" color="primary">
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {item.period}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {item.details}
                        </Typography>
                      </Paper>
                    </Fade>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
