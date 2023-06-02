/* Import Styled Components */
import { Content, Description, Weekdays, Day, TrashIcon } from "./styled";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import WEEKDAYS from "../../constants/weekdays";
import trash_icon from "../../assets/trash_icon.png";

export default function CreatedHabits(props) {

    const { habit, setHabitStatus, token } = props;
    
    const deleteHabit = (id) => {

        if (window.confirm(`Deseja excluir o hábito: ${habit.name} ?`)) {

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(() => {
                    setHabitStatus({status: "Deleted"});
                })
                .catch((err) => {
                    alert("Erro ao deletar hábito. Tente novamente mais tarde.");
                    console.log(err);
                });
        }
    }

    return (
        <Content>
            <Description>
                <div>
                    <h2>{habit.name}</h2>
                    <Weekdays>
                        {WEEKDAYS.map((day) => {
                            const check = (habit.days.includes(day.id)) ? true : false;
                            return (
                                <Day key={day.id}
                                    check={check}>
                                    <h3 title={day.title}>{day.name}</h3>
                                </Day>
                            );
                        })}
                        <TrashIcon type="button"
                            onClick={() => deleteHabit(habit.id)}>
                            <img src={trash_icon} alt="Delete habit" title="Delete" />
                        </TrashIcon>
                    </Weekdays>
                </div>
            </Description>
        </Content>
    );
}