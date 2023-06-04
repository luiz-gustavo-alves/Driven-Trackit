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
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* Import Components */
import CreatedHabits from "../../components/CreatedHabits/CreatedHabits";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import WEEKDAYS from "../../constants/weekdays";
import ProgressCircle from "../../contexts/ProgressCircle";
import getCurrentCircularProgress from "../../scripts/getCurrentCircularProgress";

export default function Habits() {

    const navigate = useNavigate();
    const { setProgressCircle } = useContext(ProgressCircle);

    const [disableForm, setDisableForm] = useState(false);
    const [createdHabitsList, setCreatedHabitsList] = useState(null);
    const [createHabit, setCreateHabit] = useState(false);
    const [habitStatus, setHabitStatus] = useState({status: "None"});
    const [habit, setHabit] = useState({
        name: "",
        days: []
    });

    useEffect(() => {

        if (localStorage.getItem("userData")) {

            const { token } = JSON.parse(localStorage.getItem("userData"));
            getCurrentCircularProgress(token, setProgressCircle);

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            axios.get(`${BASE_URL}/habits`, config)
                .then(res => setCreatedHabitsList(res.data))
                .catch(err => console.log(err));

        } else {

            /* Unauthorized Access or localStorage data expired */
            navigate("/");
        }

    }, [habitStatus]);

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

        if (habit.days.length == 0) {
            alert("Por favor, selecione um dia de semana.");
            setDisableForm(false);

        } else {

            if (localStorage.getItem("userData")) {

                const { token } = JSON.parse(localStorage.getItem("userData"));
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
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

            } else {
                /* Unauthorized Access or localStorage data expired */
                navigate("/");
            }
        }
    }

    const dayCondition = (id) => {

        const selectedDays = habit.days;
        if (selectedDays.includes(id)) {
            return {isAlreadySelected: true, index: selectedDays.indexOf(id)};
        } else {
            return {isAlreadySelected: false, index: -1};
        }
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
                        data-test="habit-create-btn"
                        title="Create habit"
                        onClick={toggleCreateHabit}>+</button>
                </Container>
                <Content>
                    {createHabit && 
                        <CreateHabitBox data-test="habit-create-container">
                            <Form onSubmit={createNewHabit}>
                                <div>
                                    <FormInput type="text"
                                        data-test="habit-name-input"
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
                                                data-test="habit-day"
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
                                        data-test="habit-create-cancel-btn"
                                        disabled={disableForm}
                                        title="Cancel"
                                        onClick={toggleCreateHabit}
                                        >Cancelar
                                    </CancelButton>
                                    <SubmitButton type="submit"
                                        data-test="habit-create-save-btn"
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
                            />
                        )
                    }
                </Content>
            </PageContent>
        </PageContainer>
    );
}