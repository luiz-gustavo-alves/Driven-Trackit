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
    gap: 8px;
    margin-bottom: 10px;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    h3 {
        font-size: 18;
        color: #BABABA;
    }
`;

export const ContentContainer = styled.div`

    width: 100%;
    margin: 0 auto;
`;

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px;
`;

export const Description = styled.div`

    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    word-break: break-word;

    h2 {
        font-size: 20px;
        color: #666666;
    }
`;

export const Details = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5px;

    h3 {
        font-size: 13px;
        color: #666666;
    }
`;

export const Status = styled.div`
    
    background-color: #EBEBEB;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;