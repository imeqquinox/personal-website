import React from 'react'
import { Link } from 'react-router-dom';

function ProjectThumbnail(props) {
  return (
    <Link to={props.title}>
      <div className='project_thumbnail'>
        <img src={props.image} alt={props.title} />
        <span className='project_title'>{props.title}</span>
      </div>
    </Link>
  )
}

export default ProjectThumbnail