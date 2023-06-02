import styled from "styled-components";

export const PageContainer = styled.div`

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
    gap: 25px;
`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 10px;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    h3 {
        color: ${props => props.doneAnyHabits ? "#8FC549" : "#BABABA"};
        font-size: 18;
    }
`;

export const Habits = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const CenterLoader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;