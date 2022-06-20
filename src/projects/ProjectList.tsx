import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void
}

const ProjectList = ({projects, onSave}: ProjectListProps) => {
  const [projectEdited, setProjectEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectEdited(project);
  }

  const cancelEditing = () => {
    setProjectEdited({});
  }

  return (
    <div className="row">
      {projects.map(project => (
        <div key={project.id} className='cols-sm'>
          {project === projectEdited ? 
            <ProjectForm onCancel={cancelEditing} onSave={onSave}
              project={project}
            /> :
            <ProjectCard project={project} onEdit={handleEdit} />
          }
        </div>
      ))}
    </div>
  )
}

export default ProjectList