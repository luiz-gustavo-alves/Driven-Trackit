/* Import Styled Components */
import { Content, Description, Weekdays, Day } from "./styled";

/* Local Imports */
import WEEKDAYS from "../../constants/weekdays";

export default function CreatedHabits(props) {

    const { habit } = props;

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
                                    <h3>{day.name}</h3>
                                </Day>
                            );
                        })}
                    </Weekdays>
                </div>
            </Description>
        </Content>
    );
}