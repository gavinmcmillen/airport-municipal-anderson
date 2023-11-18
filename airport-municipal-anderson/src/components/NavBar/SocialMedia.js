import React from 'react';
import FBimg from '../../assets/Facebook_Logo_2023.png'

const SocialMedia = () => {
    const facebookLink = 'https://www.facebook.com/AndersonMunicipalAirportDarlingtonField/'; 
 
    return (
        <div>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <img src={FBimg} alt="Facebook" style={{ width: '20px', height: 'auto' }} />
            </a>
        </div>
    )
};

export default SocialMedia;

