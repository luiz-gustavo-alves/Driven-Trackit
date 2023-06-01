/* Import Styled Components and Dependencies */
import { 
        PageContainer, 
        PageContent, 
        Container, 
        Content, 
        Form, 
        FormInput, 
        Weekdays, 
        Day, 
        Confirmation, 
        CancelButton, 
        SubmitButton,
        Loader, 
        CenterLoader } from "./styled";

import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Oval, ThreeDots } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";

/* Import Components */
import CreatedHabits from "../../components/CreatedHabits/CreatedHabits";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import WEEKDAYS from "../../constants/weekdays";
import UserAuth from "../../contexts/UserAuth";

export default function Habits(props) {

    const { userData } = props;
    const { userAuth } = useContext(UserAuth);

    const [createdHabits, setCreatedHabits] = useState(null);
    const [createHabit, setCreateHabit] = useState(false);
    const [disableForm, setDisableForm] = useState(false);
    const [habit, setHabit] = useState({
        name: "",
        days: []
    });

    useEffect(() => {

        if (!userAuth) {
            return (<h1>Erro de Autentificação...</h1>);
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        };

        axios.get(`${BASE_URL}/habits`, config)
            .then(res => setCreatedHabits(res.data))
            .catch(err => console.log(err));

    }, [userAuth, userData]);

    if (createdHabits === null){
        return (
            <CenterLoader>
                <Oval
                    height="200"
                    width="200"
                    color="#52B6FF"
                    ariaLabel='oval-loading'
                    secondaryColor="#2fa8ff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                    visible={true}
                />
            </CenterLoader>
        );
    }

    const updateHabit = (newData) => {

        setHabit(previousData => ({
            ...previousData,
            ...newData
        }));
    }

    const dayCondition = (id) => {

        const selectedDays = habit.days;

        for (let i = 0; i < selectedDays.length; i++) {
            if (id === selectedDays[i]) {
                return {isAlreadySelected: true, index: i};
            }
        }
        return {isAlreadySelected: false, index: -1};
    }

    const selectDay = (id) => {

        const { isAlreadySelected, index } = dayCondition(id);

        let newDays;
        if (!isAlreadySelected) {
            newDays = [...habit.days, id];
        } else {
            habit.days.splice(index, 1);
            newDays = [...habit.days];
        }
        updateHabit({days: newDays})
    }

    const createNewHabit = (event) => {
        
        event.preventDefault();
        console.log(habit)
        setDisableForm(true);

        setTimeout(() => {
            
            if (habit.days.length == 0) {
                alert("Por favor, selecione um dia de semana.");
            } else {

                const config = {
                    headers: {
                        "Authorization": `Bearer ${userData.token}`
                    }
                };

                axios.post(`${BASE_URL}/habits`, habit, config)
                    .then(() => {
                        setDisableForm(false);
                        setCreateHabit(false);
                        updateHabit({
                            name: "",
                            days: []
                        });
                    })
                    .catch((err) => console.log(err));
            }
        }, 500);
    }

    return (
        <PageContainer>

            <Header>
                <Link to="/">
                    <h1 title="TrackIt">TrackIt</h1>
                </Link>
                <ProfilePicture>
                    <img src={userData.image} alt={`${userData.name} icon`} title={`${userData.name} icon`} />
                </ProfilePicture>
            </Header>

            <PageContent>
                <Container>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setCreateHabit(true)}>+</button>
                </Container>

                {createHabit && 
                    <Content>
                        <Form onSubmit={createNewHabit}>
                            <div>
                                <FormInput type="text"
                                    required
                                    maxLength="100"
                                    value={habit.name}
                                    disabled={disableForm}
                                    onChange={(e) => updateHabit({name: e.target.value})}
                                    placeholder="nome do habito"></FormInput>
                                <Weekdays>
                                {WEEKDAYS.map((day) => {
                                    const check = (habit.days.includes(day.id)) ? true : false;
                                    return (
                                        <Day type="button"
                                            key={day.id}
                                            check={check}
                                            disabled={disableForm}
                                            onClick={() => selectDay(day.id)}
                                        >{day.name}</Day>
                                    );
                                })}
                                </Weekdays>
                            </div>
                            <Confirmation>
                                <CancelButton type="submit"
                                    disabled={disableForm}
                                    >Cancelar
                                </CancelButton>
                                <SubmitButton type="submit"
                                    disabled={disableForm}
                                    >{disableForm ? "" : "Salvar"}
                                </SubmitButton>
                                <Loader>
                                    <ThreeDots 
                                        height="35"
                                        width="35"
                                        radius="9"
                                        color="#FFF"
                                        ariaLabel="three-dots-loading"
                                        visible={disableForm}
                                    />
                                </Loader>
                            </Confirmation>
                        </Form>
                    </Content>
                }

                {createdHabits.length === 0 ?
                    <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
                    :
                    createdHabits.map(habit =>
                        <CreatedHabits
                            key={habit.id}
                            habit={habit}
                        />
                    )
                }

            </PageContent>

            <Footer>
                <Link to="/habitos">
                    <button>Hábitos</button>
                </Link>
                <Link to="/hoje">
                    <button>Hoje</button>
                </Link>
                <Link to="/historico">
                    <button>Histórico</button>
                </Link>
            </Footer>

        </PageContainer>
    );
}