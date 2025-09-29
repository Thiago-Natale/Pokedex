import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 100vw;
    width:100vw;
    max-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background: ${(props)=>props.background};
    background-size: cover;
    overflow-y:hidden;
    overflow-x:hidden;
`

