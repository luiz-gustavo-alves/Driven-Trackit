import styled from "styled-components";

export const PageContainer = styled.main`

    background-color: #F4F4F4;
    height: 100vh;
`;

export const PageContent = styled.main`

    padding: 100px 20px;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #666666;
    gap: 10px;
`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    h3 {
        font-size: 18;
        color: #BABABA;
    }
`;