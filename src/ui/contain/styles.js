import styled from "styled-components";

const Container = styled.div`
    &::-webkit-scrollbar{
        display:none;
    }
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    padding:10px 10px;
    box-sizing:border-box;
    overflow:scroll;
    h1{
        margin-left:10px;
        letter-spacing:6px;
    }
    ${'' /* button{
        height:100px;
        width:220px;
        background-color:${p=>p.theme.primary};
        color:${p=>p.theme.text};
        padding:10px 20px;
        font-size:120%;
        border:2px solide ${p=>p.theme.bgColor};
    } */}
    section{
        ${'' /* margin-top:360px; */}

    }
`;

export default Container 