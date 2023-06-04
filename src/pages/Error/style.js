import styled from "styled-components";

export const PageContainer = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
    }

    button {

        color: #52B6FF;
        background-color: inherit;
        border: none;
        font-size: 20px;
        text-decoration: underline;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;