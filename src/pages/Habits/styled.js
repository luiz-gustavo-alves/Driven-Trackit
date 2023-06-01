import styled from "styled-components";

export const PageContainer = styled.main`

    background-color: #F4F4F4;
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
        cursor: pointer;
    }
`;

export const Content = styled.div`

    width: 100%;
    height: 165px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px;
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FormInput = styled.input`

    cursor: ${props => props.disabled ? "not-allowed" : "auto"};

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
`;

export const Weekdays = styled.div`

    display: flex;
    margin: 10px 0;
    gap: 5px;
`;

export const Day = styled.button`

    background-color: ${props => props.check ? "#D4D4D4" : "#FFF"};
    color: ${props => props.check ? "#FFF" : "#D4D4D4"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
`;

export const Confirmation = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    gap: 20px;
    width: 90%;
    margin-left: 20px;
    position: relative;
`;

export const CancelButton = styled.div`

    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

    border-radius: 5px;
    background-color: #FFF;
    border: none;
    color: #52B6FF;

    &:hover{
        text-decoration: ${props => props.disabled ? "none" : "underline"};
    }
`;

export const SubmitButton = styled.button`

    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

    width: 84px;
    height: 36px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    color: #FFF;
`;

export const Loader = styled.div`

    position: absolute;
    bottom: 0px;
    right: 23px;
`;

export const CenterLoader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;