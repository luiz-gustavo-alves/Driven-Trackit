import styled from "styled-components";

export const Content = styled.div`

    width: 100%;
    height: 95px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px;
`;

export const Description = styled.div`

    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        color: #666666;
        margin-bottom: 12px;
    }
`;

export const Weekdays = styled.div`

    display: flex;
    margin: 10px 0;
    gap: 5px;
`;

export const Day = styled.div`

    background-color: ${props => props.check ? "#CFCFCF" : "#FFF"};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    cursor: pointer;

    h3 {
        color: ${props => props.check ? "#FFF" : "#DBDBDB"};
        font-size: 20px;
    }
`;