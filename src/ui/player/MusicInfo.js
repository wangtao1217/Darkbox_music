import React from 'react';

import { Container } from './styled';

export const MusicInfo = ({name,picUrl}) => {
    console.log(name)
    return <Container>
            <span className="picture">
                {picUrl?<img src={picUrl}/>:"null"}
                <h3>{name}</h3>
            </span>
        </Container>
}