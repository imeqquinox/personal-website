import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import './css/ImageSlider.css';

function ImageSlider(props) {
    const [current, setCurrent] = useState(0);
    const length = props.images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <>        
            <div className='image_slider'>
                <ArrowBackIcon className='back_arrow' onClick={prevSlide}/>
                {props.images.map((image, index) => (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img className='image' src={image} alt={props.alt}/>
                        )} 
                    </div>
                ))}
                <ArrowForwardIcon className='forward_arrow' onClick={nextSlide}/>
            </div>
            <div className='icon_wrapper'>
                {props.images.map((icon, index) => (
                    <CheckBoxOutlineBlankIcon 
                        className={index === current ? 'position_icon_active' : 'position_icon'}
                    />
                ))}
            </div>
        </>
    )
}

export default ImageSlider