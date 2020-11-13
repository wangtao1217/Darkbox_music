import styled from "styled-components";

const Log_container = styled.div`
    position:fixed;
    top: 0; left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${p=>p.theme.primary};
    display: flex;
    flex-direction:column;
    align-items: center;
    z-index: 300;

    input
    {
        outline: 2px black solid;
        background-color: ${p=>p.theme.bgColor};
        padding: 10px 16px;
        margin-bottom:20px;
        color: ${p=>p.theme.text};
    }


    button
    {
        
    }

`;

export default Log_container;