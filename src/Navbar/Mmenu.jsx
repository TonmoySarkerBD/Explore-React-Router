import React from 'react';

const Mmenu = ({route}) => {
    return (
        <li><a href={route.path}>{route.name}</a></li>
    );
};

export default Mmenu;