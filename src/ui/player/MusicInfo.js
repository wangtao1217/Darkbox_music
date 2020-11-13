import React, { useState, useCallback } from 'react';

import { Container } from './styled';

export const MusicInfo = ({name,picUrl,ar}) => {
    const [ loaded, setLoaded ] = useState(true)
    const [ show, setShow ] = useState(0)
    const author = (arr) => {
        if(!arr)return null;
        if(arr.length===1)return arr[0].name;
        let list = [];
        arr.map(i=>list.push(i.name));

        return list.join("/")
    } 

    

    const handleClick= useCallback(()=>{
        setShow(1?0:1)
    },[])
    return <Container picUrl={picUrl} onClick={handleClick} show={show}>
            {loaded?(<><span className='pic'/>
            <span className="text">
                <p className="name">{name}</p>
                <p>{author(ar)}</p>
            </span></>):"😄"}
        </Container>
}