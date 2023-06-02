/* Import Styled Components and Dependencies */
import {
        PageContainer,
        PageContent,
        Container,
        Content,
        CreateHabitBox,
        Form,
        FormInput,
        Weekdays,
        Day,
        Confirmation,
        CancelButton,
        SubmitButton,
        Loader,
        CenterLoader } from "./styled";
import { Oval, ThreeDots } from 'react-loader-spinner';
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

    const [disableForm, setDisableForm] = useState(false);
    const [createdHabitsList, setCreatedHabitsList] = useState(null);
    const [createHabit, setCreateHabit] = useState(false);
    const [habitStatus, setHabitStatus] = useState({status: "None"});
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
            .then(res => setCreatedHabitsList(res.data))
            .catch(err => console.log(err));

    }, [userAuth, userData, habitStatus]);

    if (createdHabitsList === null) {
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

    const createNewHabit = (event) => {
        
        event.preventDefault();
        setDisableForm(true);

        setTimeout(() => {

            if (habit.days.length == 0) {
                alert("Por favor, selecione um dia de semana.");
                setDisableForm(false);

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
                        setHabitStatus({status: "Created"});
                    })
                    .catch((err) => console.log(err));
            }
        }, 250);
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

    const toggleCreateHabit = () => {
        (createHabit === true) ? setCreateHabit(false) : setCreateHabit(true);
    }

    const emptyHabitList = (createdHabitsList.length === 0) ? true : false;

    return (
        <PageContainer>
            <PageContent>
                <Container>
                    <h2>Meus hábitos</h2>
                    <button type="button"
                        title="Create habit"
                        onClick={toggleCreateHabit}>+</button>
                </Container>
                <Content>
                    {createHabit && 
                        <CreateHabitBox>
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
                                                title={day.title}
                                                onClick={() => selectDay(day.id)}
                                            >{day.name}</Day>
                                        );
                                    })}
                                    </Weekdays>
                                </div>
                                <Confirmation>
                                    <CancelButton type="button"
                                        disabled={disableForm}
                                        title="Cancel"
                                        onClick={toggleCreateHabit}
                                        >Cancelar
                                    </CancelButton>
                                    <SubmitButton type="submit"
                                        disabled={disableForm}
                                        title="Save"
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
                        </CreateHabitBox>
                    }
                    {emptyHabitList &&
                        <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
                    }
                    {!emptyHabitList &&
                        createdHabitsList.map(habit =>
                            <CreatedHabits
                                key={habit.id}
                                habit={habit}
                                setHabitStatus={setHabitStatus}
                                token={userData.token}
                            />
                        )
                    }
                </Content>
            </PageContent>
        </PageContainer>
    );
}