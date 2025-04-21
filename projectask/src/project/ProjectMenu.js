import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Fab,
  MenuItem,
  Chip,
  InputAdornment,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const priorities = ['Low', 'Medium', 'High'];

const ProjectMenu = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    taskName: '',
    teamMembers: '',
    collaborators: [],
    assignedTo: '',
    dueDate: '',
    priority: '',
    collaboratorInput: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      taskName: '',
      teamMembers: '',
      collaborators: [],
      assignedTo: '',
      dueDate: '',
      priority: '',
      collaboratorInput: '',
    });
    setOpen(false);
  };

  const handleAddCollaborator = () => {
    if (formData.collaboratorInput && !formData.collaborators.includes(formData.collaboratorInput)) {
      setFormData(prev => ({
        ...prev,
        collaborators: [...prev.collaborators, prev.collaboratorInput],
        collaboratorInput: '',
      }));
    }
  };

  const handleSave = () => {
    if (formData.taskName && formData.assignedTo) {
      setProjects([...projects, { ...formData }]);
      handleClose();
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header and Description */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        ProjectMenu
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Here are your projects. If there's a need for a new one, you can create one.
      </Typography>

      {/* FAB Button */}
      <Fab
        color="primary"
        variant="extended"
        onClick={handleOpen}
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
      >
        <AddIcon sx={{ mr: 1 }} />
        New Project
      </Fab>

    {/* Task Cards */}
<Grid container spacing={3} mt={1}>
  {projects.map((proj, i) => (
    <Grid item key={i} xs={12} sm={6} md={4}>
      <Card
        sx={{
          p: 4, // more padding
          minHeight: 150, // make the card taller
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 3, // optional: adds a soft shadow
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center">
          {proj.taskName}
        </Typography>
      </Card>
    </Grid>
  ))}
</Grid>

      {/* Create Project Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Create New Task Project</DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            label="Task Name"
            margin="dense"
            value={formData.taskName}
            onChange={e => setFormData({ ...formData, taskName: e.target.value })}
          />
          <TextField
            fullWidth
            label="Team Members"
            type="number"
            margin="dense"
            value={formData.teamMembers}
            onChange={e => setFormData({ ...formData, teamMembers: e.target.value })}
          />
          <TextField
            fullWidth
            label="Assigned To"
            margin="dense"
            value={formData.assignedTo}
            onChange={e => setFormData({ ...formData, assignedTo: e.target.value })}
          />
          <TextField
            fullWidth
            label="Due Date"
            type="date"
            margin="dense"
            InputLabelProps={{ shrink: true }}
            value={formData.dueDate}
            onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
          />
          <TextField
            fullWidth
            select
            label="Priority Level"
            margin="dense"
            value={formData.priority}
            onChange={e => setFormData({ ...formData, priority: e.target.value })}
          >
            {priorities.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Add Collaborator (Email)"
            margin="dense"
            value={formData.collaboratorInput}
            onChange={e => setFormData({ ...formData, collaboratorInput: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleAddCollaborator}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={1}>
            {formData.collaborators.map((email, idx) => (
              <Chip
                key={idx}
                label={email}
                onDelete={() =>
                  setFormData(prev => ({
                    ...prev,
                    collaborators: prev.collaborators.filter((_, i) => i !== idx),
                  }))
                }
                sx={{ mr: 1, mt: 1 }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectMenu;
