import styled from "styled-components";

export const Footer = styled.footer`

    width: 100%;
    min-width: 300px;
    height: 70px;
    padding: 0 20px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    lefT: 0;
    z-index: 100;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    button {
        font-size: 18px;
        background-color: inherit;
        border: none;
        color: #52B6FF;
        cursor: pointer;
    }
`;