import React, {Component, useState} from 'react';




const Navigation = ({home,fav}) => {

    return (

        <nav className="flex-m">

            <p onClick={home} className='grow  hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5'> Home Page</p>
            <p onClick={fav} className='grow  hover-bg-green bg-light-green br3 pa3 ma3 dib  shadow-5'> favorites</p>

        </nav>
    );
}

export default Navigation;