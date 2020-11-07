import React, { useState } from 'react';

import { Container } from './styled';

export const MusicInfo = ({name,picUrl}) => {
    console.log(name)
    const [ loaded, setLoaded ] = useState(true)
    return <Container>
            {loaded?(<><span className='pic'>
                <img/>
            </span>
            <span className="text">
                <p className="name">{name}</p>
                <p>{name}</p>
            </span></>):"😄"}
        </Container>
}