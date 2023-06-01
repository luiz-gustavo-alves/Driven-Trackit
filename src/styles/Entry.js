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
    position: relative;
`;

export const FormInput = styled.input`

    cursor: ${props => props.disabled ? "not-allowed" : "auto"};

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
`;

export const SubmitButton = styled.button`

    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    width: 300px;
    height: 45px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    font-size: 21px;
    color: #FFF;
`;

export const Redirect = styled.h2`

    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
`;

export const Loader = styled.div`

    position: absolute;
    bottom: 0;
    bottom: -12px;
    left: 112px;
`;