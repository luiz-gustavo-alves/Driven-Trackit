import styled from "styled-components";

export const PageContainer = styled.div`

    background-color: #FAFAFA;
    height: 100vh;
`;

export const PageContent = styled.div`

    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const Logo = styled.h1`

    img {
        width: 200px;
        mix-blend-mode: multiply;
    }
`;

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
        width: 300px;
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

    button {
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        font-size: 21px;
        color: #FFF;
        cursor: pointer;
    }
`;

export const Redirect = styled.h2`

    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
`;