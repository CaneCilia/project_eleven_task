import React from 'react';

const ProjectMenu = ({ projects, onCreateProject, onSelectProject }) => {
  return (
    <div>
      <h2>Project Menu</h2>
      <button onClick={onCreateProject}>Create New Project</button>
      <h3>Existing Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelectProject(project)}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMenu;