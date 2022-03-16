import React from 'react'
import { Link } from 'react-router-dom';

function ProjectThumbnail(props) {
  return (
    <Link className='project_thumbnail' to={props.title}>
        <img src={props.image} alt={props.title} />
        <span className='project_title'>{props.title}</span>
    </Link>
  )
}

export default ProjectThumbnail