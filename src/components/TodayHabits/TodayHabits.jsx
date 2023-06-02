/* Import Styled Components and Dependencies */
import { ContentContainer, Content, Description, Details, Status } from "./styled";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import check from "../../assets/check.png";

export default function TodayHabits(props) {

    const { habit, setHabitStatus, token } = props;

    const toggleDoneHabit = (id) => {

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

    const isHighestSequence = (habit.currentSequence > 0 && habit.currentSequence === habit.highestSequence) ? true : false;

    return (
        <ContentContainer>
            <Content>
                <Description>
                    <h2>{habit.name}</h2>
                    <Details isHighestSequence={isHighestSequence}>
                        <h3>Sequencia atual: {habit.currentSequence} dias</h3>
                        <h3>Seu recorde: {habit.highestSequence} dias</h3>
                    </Details>
                </Description>
                <Status 
                    isDone={habit.done}
                    onClick={() => toggleDoneHabit(habit.id)}>
                    <img src={check} alt="check" />
                </Status>
            </Content>
        </ContentContainer>
    );
}