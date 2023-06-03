/* Import Styled Components */
import { Content, Description, Weekdays, Day, TrashIcon } from "./styled";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import WEEKDAYS from "../../constants/weekdays";
import trash_icon from "../../assets/trash_icon.png";

export default function CreatedHabits(props) {

    const { habit, setHabitStatus } = props;
    
    const deleteHabit = (id) => {

        if (window.confirm(`Deseja excluir o hábito: ${habit.name}?`)) {

            const { token } = JSON.parse(localStorage.getItem("userData"));
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(() => setHabitStatus({status: "Deleted"}))
                .catch((err) => {
                    alert("Erro ao deletar hábito. Tente novamente mais tarde.");
                    console.log(err);
                });
        }
    }

    return (
        <Content data-test="habit-container">
            <Description>
                <div>
                    <h2 data-test="habit-name">{habit.name}</h2>
                    <Weekdays>
                        {WEEKDAYS.map((day) => {
                            const check = (habit.days.includes(day.id)) ? true : false;
                            return (
                                <Day key={day.id}
                                    data-test="habit-day"
                                    check={check}>
                                    <h3 title={day.title}>{day.name}</h3>
                                </Day>
                            );
                        })}
                        <TrashIcon type="button"
                            data-test="habit-delete-btn"
                            onClick={() => deleteHabit(habit.id)}>
                            <img src={trash_icon} alt="Delete habit" title="Delete" />
                        </TrashIcon>
                    </Weekdays>
                </div>
            </Description>
        </Content>
    );
}