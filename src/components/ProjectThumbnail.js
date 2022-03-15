import React from 'react'

function ProjectThumbnail(props) {
  return (
    <div className='project_thumbnail'>
        <img src={props.image} alt={props.title} />
        <span className='project_title'>{props.title}</span>
    </div>
  )
}

export default ProjectThumbnail