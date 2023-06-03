/* Import Styled Components and Dependencies */
import { ContentContainer, Content, Description, Details, Status } from "./styled";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import check from "../../assets/check.png";

export default function TodayHabits(props) {

    const { habit, setHabitStatus } = props;

    const toggleDoneHabit = (id) => {

        const { token } = JSON.parse(localStorage.getItem("userData"));

        const body = {};
        const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
        
        if (!habit.done) { 

            axios.post(`${BASE_URL}/habits/${id}/check`, body, config)
                .then(() => setHabitStatus({status: "Check"}))
                .catch((err) => {
                    alert("Erro ao marcar hábito como feito, tente novamente mais tarde.");
                    console.log(err);
                });

        } else {

            axios.post(`${BASE_URL}/habits/${id}/uncheck`, body, config)
            .then(() => setHabitStatus({status: "Uncheck"}))
            .catch((err) => {
                alert("Erro ao marcar hábito como não feito, tente novamente mais tarde.");
                console.log(err);
            });
        }
    }

    const isRecord = (habit.currentSequence > 0 && habit.currentSequence === habit.highestSequence) ? true : false;

    return (
        <ContentContainer data-test="today-habit-container">
            <Content>
                <Description>
                    <h2 data-test="today-habit-name">{habit.name}</h2>
                    <Details isRecord={isRecord}>
                        <h3 data-test="today-habit-sequence">Sequencia atual: <span>{habit.currentSequence} dias</span></h3>
                        <h3 data-test="today-habit-record">Seu recorde: <span>{habit.highestSequence} dias</span></h3>
                    </Details>
                </Description>
                <Status 
                    isDone={habit.done}
                    data-test="today-habit-check-btn"
                    onClick={() => toggleDoneHabit(habit.id)}>
                    <img src={check} alt="check" />
                </Status>
            </Content>
        </ContentContainer>
    );
}