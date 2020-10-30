import styled from "styled-components";

const Container = styled.div`
    &::-webkit-scrollbar{
        display:none;
    }
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    padding:20px 50px;
    box-sizing:border-box;
    overflow:scroll;
    ${'' /* background-color:${p=>p.theme.bgColor}; */}
    ${'' /* overflow: y-scroll; */}
    ${'' /* padding:20px; */}
`;

export default Container 