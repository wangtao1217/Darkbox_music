import styled from "styled-components";

const Container = styled.div`
    display: grid;
`;

const Span = styled.span`
    display: flex;
    flex: ${ i => i.flex?i.flex:1}; 
    align-items: center;
    justify-content: ${a => a.position?a.position:'center'};
    height: 100%;
`

export { Container, Span }