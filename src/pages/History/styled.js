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

    display: flex;
    flex-direction: column;
    gap: 30px;

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

export const CenterLoader = styled.div`

    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
`;