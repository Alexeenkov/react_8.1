import React from 'react';

const List = ({ list, handlerClickOnName, idForDetails }) => {
    return (
        <ul className='list'>
            {list.map(item => (
                <li key={item.id}>
                    <a href="#0" className={idForDetails === item.id ? '_active' : ''} onClick={(e) => handlerClickOnName(e, item.id)}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default List;