import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    h1 {
        text-shadow: 0px 0px 4px var(--purple2);
        color: var(--purple);
        font-size: 60px;
    }
`;

export const Content = styled.div`
    width: 600px;
    display: flex;
    margin-bottom: 200px;
`;