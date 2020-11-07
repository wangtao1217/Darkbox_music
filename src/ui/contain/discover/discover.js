import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import {getDiscover} from "../../../api/discover"
import List from '../../table/index'
import Container from "../styles"
import Album_List from "./albumList"


const Discover = () => {
    const discover = getDiscover();
    const [ data, setData ] = useState([{name:"sss",picUrl:null}])
    console.log(discover)
    useEffect(()=>{
        getDiscover().then(res=>setData(res))
    },[])
    return (
        <Container>
            <h1>{"It' Inevitable, to sometimes do things you don't realy like."}</h1>   
            <Album_List data={data}/>
        </Container>
    )
}

export default Discover