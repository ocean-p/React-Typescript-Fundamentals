import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from './Project';

const formatDescription = (description: string): string => (
  description.substring(0, 60) + '...'
)

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void
}

const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {
  const handleEditClick = (projectEdited: Project) => {
    onEdit(projectEdited)
  }

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className='section dark'>
        <Link to={'/projects/' + project.id}>
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget: {project.budget.toLocaleString()}</p>
        </Link>
        <button className="bordered"
          onClick={() => handleEditClick(project)}
        >
          <span className='icon-edit'></span>
          Edit
        </button>
      </section>
    </div>
  )
}

export default ProjectCard