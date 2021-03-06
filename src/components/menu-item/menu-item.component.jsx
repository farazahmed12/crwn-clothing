import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss'



const MenuItem = ({ title, imageurl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageurl})`
        }}></div>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase() }</h2>
            <span className='text'>SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem);