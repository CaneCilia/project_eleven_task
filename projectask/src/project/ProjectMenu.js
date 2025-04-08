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
  <Card sx={{ maxWidth: 200, p: 1 }}>
    <CardContent>
      <Typography variant="caption" color="text.secondary">
        {subheader}
      </Typography>
      <CardMedia
        component="img"
        height="100"
        image="https://via.placeholder.com/150"
        alt="Project"
        sx={{ my: 1 }}
      />
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const ProjectMenu = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" mb={4}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Project Menu
          </Typography>
          <TextField
            label="Projects"
            variant="outlined"
            sx={{ mt: 2, width: 200 }}
            InputLabelProps={{
              style: { color: '#f44336' }, // Optional red underline
            }}
          />
        </Box>
        <Box textAlign="right" mt={{ xs: 3, sm: 0 }}>
          <Typography>
            Create your project in this Project Menu Board and craft your things to do and perform these even things!
          </Typography>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            sx={{ mt: 2, backgroundColor: '#1976d2' }}
          >
            Create Project
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item>
          <ProjectCard subheader="Project 1" title="Project Task" />
        </Grid>
        <Grid item>
          <ProjectCard subheader="SUBHEADER" title="Bold Title" />
        </Grid>
        <Grid item>
          <ProjectCard subheader="SUBHEADER" title="Bold Header Title" />
        </Grid>
        <Grid item>
          <ProjectCard subheader="SUBHEADER" title="Bold Title" />
        </Grid>
      </Grid>

      <Box mt={3}>
        
      </Box>
    </Box>
  );
};

export default ProjectMenu;
