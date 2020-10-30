import styled from "styled-components";

const Log_container = styled.div`
    height: 300px;
    width: 540px;
    background-color: black;
    display: flex;
    justify-content: center;
    input{
        outline: 2px black solid;
        background-color: ${p=>p.theme.bgColor};
        padding: 10px 16px;
        color: ${p=>p.theme.text};
    }
`;

export default Log_container;