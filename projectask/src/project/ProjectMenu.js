import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectCard = ({ header, subheader, title }) => (
  <Card
    sx={{
      maxWidth: 280,
      boxShadow: 3,
      borderRadius: 2,
      overflow: 'hidden',
      '&:hover': {
        boxShadow: 6,
        transform: 'scale(1.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
      },
    }}
  >
    <CardContent>
      <Typography variant="caption" color="text.secondary">
        {subheader}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/200"
        alt="Project"
        sx={{ my: 2 }}
      />
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const ProjectMenu = () => {
  return (
    <>
      {/* Header and Search Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mb={4}
        sx={{ gap: 3, p: 4 }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" color="primary.main">
            Project Menu
          </Typography>
          <TextField
            label="Search Projects"
            variant="outlined"
            sx={{ mt: 2, width: 250 }}
            InputLabelProps={{
              style: { color: '#1976d2' },
            }}
            fullWidth
          />
        </Box>
        <Box textAlign="right" mt={{ xs: 3, sm: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Create your project in this Project Menu Board and craft your things to do, then perform them!
          </Typography>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            Create Project
          </Button>
        </Box>
      </Box>

      {/* Grid of Projects */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <ProjectCard subheader="Project 1" title="Project Task" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectCard subheader="Project 2" title="Bold Title" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectCard subheader="Project 3" title="Bold Header Title" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectCard subheader="Project 4" title="Another Task" />
        </Grid>
      </Grid>

      {/* View All Projects Button */}
      <Box textAlign="center" mt={4} p={4}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ fontWeight: 'bold', borderColor: '#1976d2', color: '#1976d2' }}
        >
          View All Projects
        </Button>
      </Box>
    </>
  );
};

export default ProjectMenu;
