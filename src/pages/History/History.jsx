/* Import Styled Components and Dependencies */
import { 
        PageContainer,
        PageContent,
        Container,
        HabitListBox,
        TopContainer,
        HabitBox,
        HabitContainer,
        HabitContent,
        CenterLoader } from "./styled";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from "dayjs";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";

export default function History() {

    const navigate = useNavigate();

    const [calendar, setCalendar] = useState(new Date());
    const [calendarHabits, setCalendarHabits] = useState(null);
    const [doneAllHabitsDays, setDoneAllHabitsDays] = useState(null);
    const [notDoneAllHabitsDays, setNotDoneAllHabitsDays] = useState(null);
    const [showHabit, setShowHabit] = useState({
        hidden: true,
        day: "",
        habits: []
    });

    useEffect(() => {

        if (localStorage.getItem("userData")) {

            const checkCalendarHabitStatus = (calendarData) => {

                const doneAllHabitsDays = [];
                const notDoneAllHabitsDays = [];

                for (let i = 0; i < calendarData.length; i++) {

                    let allDayHabitsDone = true;
                    const dayHabits = calendarData[i].habits;

                    for (let j = 0; j < dayHabits.length; j++) {

                        const habit = dayHabits[j];
                        if (!habit.done) {
                            allDayHabitsDone = false;
                            break;
                        }
                    }

                    const currentDay = calendarData[i].day;
                    (allDayHabitsDone) ? doneAllHabitsDays.push(currentDay) : notDoneAllHabitsDays.push(currentDay);
                }

                setDoneAllHabitsDays(doneAllHabitsDays);
                setNotDoneAllHabitsDays(notDoneAllHabitsDays);
            }

            const { token } = JSON.parse(localStorage.getItem("userData"));
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            
            axios.get(`${BASE_URL}/habits/history/daily`, config)
                .then(res => {

                    const calendarData = res.data;

                    /* This code only runs when user refresh or redirect to history page */
                    if (doneAllHabitsDays === notDoneAllHabitsDays) {
                        checkCalendarHabitStatus(calendarData);
                    }
                    setCalendarHabits(calendarData);
                })
                .catch(err => console.log(err));

        } else {
            /* Unauthorized Access or localStorage data expired */
            navigate("/");
        }

    }, [calendar]);

    if (calendarHabits === null) {
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

    const getHabitListDay = (date) => {
        
        const currentDate = dayjs(date).format('DD/MM/YYYY');
        const checkDateInCalendar = (currentDate) => {

            for (let i = 0; i < calendarHabits.length; i++) {

                const habitDay = calendarHabits[i].day;
                if (habitDay === currentDate) {
                    return {dateInCalendar: true, index: i};
                }
            }
            return {dateInCalendar: false, index: -1};
        }

        const { dateInCalendar, index } = checkDateInCalendar(currentDate);
        if (dateInCalendar && showHabit.hidden) {

            const weekDay = dayjs(date).locale('pt-br').format('dddd');
            const currentDay = `${weekDay}, ${calendarHabits[index].day}`;

            setShowHabit({
                hidden: false,
                day: currentDay,
                habits: calendarHabits[index].habits
            });
        }
    }

    const closeHabitList = () => {
        
        setShowHabit({
            hidden: true,
            day: "",
            habits: ""
        });
    }

    const getTileClassName = ({ date }) => {

        const currentDate = dayjs(date).format('DD/MM/YYYY');

        if (currentDate === presentDay) {
            return 'react-calendar__tile--now';

        } else if (doneAllHabitsDays.includes(currentDate)) {
            return 'react-calendar__tile--all-habits-done';

        } else if (notDoneAllHabitsDays.includes(currentDate)) {
            return 'react-calendar__tile--not-all-habits-done';

        } else {
            return 'react-calendar__tile';
        }
    }

    const presentDay = dayjs(new Date()).format('DD/MM/YYYY');

    return (
        <PageContainer>
            <PageContent>
                <Container showHabit={showHabit.hidden}>
                    <h2>Histórico</h2>
                    <Calendar
                        className='react-calendar'
                        calendarType={'US'}
                        onChange={setCalendar}
                        value={calendar}
                        tileClassName={getTileClassName}
                        onClickDay={(date) => getHabitListDay(date)}
                        formatDay={(locale, date) => <p>{dayjs(date).format('DD')}</p>}
                    />
                </Container>
                {!showHabit.hidden && 
                    <HabitBox>
                        <HabitListBox>
                            <TopContainer>
                                <h2>{showHabit.day}</h2>
                                <button onClick={closeHabitList}>X</button>
                            </TopContainer>
                            <HabitContainer>
                                {showHabit.habits.map((habit, index) => {
                                    const habitStatus = (habit.done) ? "Concluído" : "Pendente";
                                    return (
                                        <HabitContent 
                                            key={index}
                                            done={habit.done}
                                            >
                                            <h3>{habit.name}</h3>
                                            <h4>{habitStatus}</h4>
                                        </HabitContent>
                                    );
                                })}
                            </HabitContainer>
                        </HabitListBox>
                    </HabitBox>
                }
            </PageContent>
        </PageContainer>
    );
}