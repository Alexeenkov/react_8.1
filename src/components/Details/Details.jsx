import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Details = ({ info, isLoading }) => {
    const { avatar, details: { city, company, position }, name } = info;

    return (
        <div className='card'>
            <div>
                <div className='avatar'>
                    {!isLoading && <img key={uuidv4()} src={avatar} alt={name} />}
                </div>
                <div className='name'>{name}</div>
                <div className='city'>City: {city}</div>
                <div className='company'>Company: {company}</div>
                <div className='position'>Position: {position}</div>
            </div>
        </div>
    );
}

export default Details;