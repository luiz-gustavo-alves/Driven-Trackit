import styled from "styled-components";

import profileImage from "../assets/goku.png";

export const Header = styled.header`

    width: 100%;
    min-width: 300px;
    height: 70px;
    background-color: #126BA5;
    padding: 0 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    h1 {
        font-family: 'Playball', cursive;
        font-size: 40px;
        color: #FFF;
    }
`;

export const ProfilePicture = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #FFF;

    img {
        background-image: url(${profileImage});
        width: 50px;
        height: 50px;
        border-radius: 25px;
        cursor: pointer;
    }
`;