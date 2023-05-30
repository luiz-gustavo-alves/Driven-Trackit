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
    gap: 35px;
`;

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        color: #FFF;
        background-color: #52B6FF;
        font-size: 23px;
        border: none;
        border-radius: 5px;
        padding-bottom: 3px;
    }
`;

export const Content = styled.div`

    width: 100%;
    height: 180px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px;
    margin: 0 auto;
`;

export const Description = styled.div`

    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 25px;

    input {
        width: 95%;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        outline-color: #52B6FF;
        font-size: 20px;
        padding: 0 10px;
        ::placeholder {
            color: #CACACA;
        }
    }
`;

export const Weekdays = styled.div`

    display: flex;
    margin: 10px 0;
    gap: 5px;

    button {
        width: 30px;
        height: 30px;
        border: 1px solid #D4D4D4;
        background-color: #FFF;
        border-radius: 5px;
        font-size: 20px;
        color: #DBDBDB;
        cursor: pointer;
    }
`;

export const Confirmation = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    gap: 20px;

    h3 {
        color: #52B6FF;
        cursor: pointer;
    }

    button {

        width: 84px;
        height: 36px;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;
        color: #FFF;
        cursor: pointer;
    }
`;