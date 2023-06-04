import styled from "styled-components";

export const PageContainer = styled.main`

    background-color: #F4F4F4;
    height: 100vh;
`;

export const PageContent = styled.main`

    padding: 100px 20px;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #666666;
    gap: 10px;
`;

export const Container = styled.div`

    opacity: ${props => props.showHabit ? 1 : 0.5};

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    .react-calendar {

        margin: 0 auto;
        width: 340px;
        background-color: #FFF;
        border-radius: 10px;
        border: none;

        &__tile {

            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFF;
            margin-top: 15px;
            border: none;

            &--now {

                abbr {

                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    color: #000;
                    background-color: #F9F236;
                }
            }

            &--all-habits-done {

                abbr {

                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    color: #000;
                    background-color: #00C62E;
                }
            }

            &--not-all-habits-done {

                abbr {

                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    color: #000;
                    background-color: #DD0037;
                }
            }

            &--active {

                background-color: #FFF;
                color: #000;

                abbr {

                    width: 35px;
                    height: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    background-color: #0095E5;
                }

                &:enabled {
                    &:focus {

                        background-color: #FFF;

                        abbr {

                            width: 35px;
                            height: 35px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 20px;
                            background-color: #0095E5;
                        }
                    }
                }
            }

            &:hover {
                background-color: #FFF;
                cursor: pointer;
            }
        }
    }
`;

export const HabitBox = styled.div`

    width: calc(100% - 5vh);
    height: 100vh;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    position: absolute;
`;

export const HabitListBox = styled.div`

    width: 340px;
    height: auto;
    background-color: #F4F4F4;
    border: 3px solid #126BA5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: absolute;
    padding: 20px;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
`;

export const TopContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 16px;
        color: #000;
    }

    button {
        width: 25px;
        height: 25px;
        border: none;
        background-color: #52B6FF;
        cursor: pointer;
    }
`;

export const HabitContainer = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const HabitContent = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        width: 180px;
        color: #000;
        font-size: 16px;
        word-break: break-word;
    }

    h4 {
        font-size: 14px;
        color: ${props => props.done ? "#00C62E" : "#DD0037"}
    }
`;

export const CenterLoader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;