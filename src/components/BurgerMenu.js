import React from 'react'

function BurgerMenu(props) {
    const ToggleBurger = () => {
        props.setBurger(!props.state);
    }

    return (
        <div className='nav_burger' onClick={ToggleBurger}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    )
}

export default BurgerMenu