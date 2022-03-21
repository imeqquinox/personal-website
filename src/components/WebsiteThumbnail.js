import React from 'react'

function WebsiteThumbnail(props) {
  return (
    <div className='website_thumbnail'>
        <img src={props.image} alt={props.title} />
        <div className='website_info'>
            <span className='website_title'>{props.title}</span><br/>
            <span className='website_subtitle'>{props.subtitle}</span>
            <div className='website_links'>
                <a className='website_link' href={props.site} target='_blank' rel='noreferrer'>{props.siteText}</a>
                <a className='website_link' href={props.code} target='_blank' rel='noreferrer'>View Code</a>
            </div>
        </div>
    </div>
  )
}

export default WebsiteThumbnail