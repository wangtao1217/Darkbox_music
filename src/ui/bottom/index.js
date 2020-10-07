import React from 'react'

import {Main,Imag,Text,TextDiv} from './styled';
import Time from "./time/index";
import Sound from "./sound/index";
import { ThemeProvider } from 'styled-components';

export default props => {
    return (
        <Main>
            <Imag  jpg="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            <TextDiv>
                <Text text='music' size='22px'>{'稻香'}</Text>
                <Text size='12px '>{"周杰伦"}</Text>
            </TextDiv>
            <Time/>
            <Sound/>
        </Main>
    )
}
