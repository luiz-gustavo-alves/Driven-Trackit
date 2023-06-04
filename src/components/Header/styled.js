import styled from "styled-components";

export const Container = styled.header`

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
    z-index: 100;

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
        background-image: url(${props => props.profileImage});
        width: 50px;
        height: 50px;
        border-radius: 25px;
        cursor: pointer;
    }
`;

export const ProfileOptions = styled.div`

    width: 150px;
    height: auto;
    position: fixed;
    background-color: #126BA5;
    border: 2px solid #F4F4F4;
    top: 70px;
    right: 0px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
        color: #FFF;
        word-break: break-word;
        font-size: 14px;
    }

    button {

        background-color: inherit;
        font-size: 14px;
        font-weight: 700;
        border: none;
        color: #FFF;
        text-decoration: underline;
        cursor: pointer;
    }
`;