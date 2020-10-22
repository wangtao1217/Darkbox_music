import styled from "styled-components";

const Container = styled.div`
    &::-webkit-
    display:flex;
    height:100%;
    width:100%;
    padding:20px 120px;
    box-sizing:border-box;
    overflow:y-scroll;
    background-color:${p=>p.theme.bgColor};
    ${'' /* overflow: y-scroll; */}
    ${'' /* padding:20px; */}
`;

export default Container 