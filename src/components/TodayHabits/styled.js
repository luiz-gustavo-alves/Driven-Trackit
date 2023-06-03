import styled from "styled-components";

export const ContentContainer = styled.div`

    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
        color: #666666;
        font-size: 13px;
    }

    span {
        color: ${props => props.isRecord ? "#8FC549" : "#666666"};
    }
`;

export const Status = styled.button`
    
    background-color: ${props => props.isDone ? "#8FC549": "#EBEBEB"};
    
    border: none;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;