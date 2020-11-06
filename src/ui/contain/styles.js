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
`;

export default Container 