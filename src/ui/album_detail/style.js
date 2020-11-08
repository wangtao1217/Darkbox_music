import styled from 'styled-components';

const size = '270px' 

const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
    section{
        flex:6.5;
    }
`;

const Info_Container = styled.div`
    display:flex;
    justify-content:center;
    flex:3.5;
    height:80%;
    margin:20px 20px;
    box-sizing:border-box;
    ${'' /* background-color:white; */}
    .album_pic{
        background-color:white;
        height:${size};
        width:${size};
    }
`;
export { Container, Info_Container }
