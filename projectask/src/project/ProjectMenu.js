import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectMenu = () => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [members, setMembers] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProjectName('');
    setMembers('');
    setCollaborators('');
  };

  const handleSubmit = () => {
    if (!projectName.trim()) {
      return;
    }
    const newProject = {
      name: projectName,
      members,
      collaborators,
      createdAt: new Date(),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            InputLabelProps={{ style: { color: '#1976d2' } }}
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
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
            onClick={handleClickOpen}
          >
            Create Project
          </Button>
        </Box>
      </Box>

      {/* Project List */}
      <Box sx={{ p: 4 }}>
        {filteredProjects.length === 0 ? (
          <Typography variant="body1" color="text.secondary" textAlign="center">
            No projects found.
          </Typography>
        ) : (
          <List>
            {filteredProjects.map((project, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={project.name}
                  secondary={`Created at: ${project.createdAt.toLocaleString()}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

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

      {/* Dialog for creating a new project */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Members"
            type="text"
            fullWidth
            variant="standard"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Collaborators"
            type="text"
            fullWidth
            variant="standard"
            value={collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectMenu;
