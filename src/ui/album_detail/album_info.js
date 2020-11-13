import React from 'react'

import { Info_Container } from './style';

const Album_info = ({data}) => {
    console.log(data)
    const {name, description, coverImgUrl, playCount, tags} = data
    return (
        <Info_Container url={coverImgUrl}>
            <span className='album_pic'>
            </span>
            <span className='text'>
                <p>{name}</p>
            </span>
            <span className='description'>
                <p>{description}</p>
            </span>
        </Info_Container>
    )
}

export default Album_info
