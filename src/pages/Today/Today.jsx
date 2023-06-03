/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, Habits, CenterLoader } from "./styled";
import { Oval } from 'react-loader-spinner';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import axios from "axios";

/* Import Components */
import TodayHabits from "../../components/TodayHabits/TodayHabits";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import ProgressCircle from "../../contexts/ProgressCircle";

export default function Today() {

    const { progressCircle, setProgressCircle } = useContext(ProgressCircle);
    const navigate = useNavigate();

    const [todayHabitsList, setTodayHabitsList] = useState(null);
    const [habitStatus, setHabitStatus] = useState({status: "None"});

    useEffect(() => {

        let config = {};
        if (localStorage.getItem("userData")) {

            const { token } = JSON.parse(localStorage.getItem("userData"));
            config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

        } else {
            
            /* Unauthorized Access or localStorage data expired */
            navigate("/");
        }

        const getCurrentProgress = (habitsList) => {

            if (habitsList.length === 0) {
                return 0;
            }
    
            let habitsDone = 0;
            habitsList.forEach(habit => {
                if (habit.done) {
                    habitsDone += 1;
                }
            });
    
            const numberOfHabits = habitsList.length;
            const currentProgress = Number((habitsDone / numberOfHabits) * 100).toFixed(0);
            return currentProgress;
        }

        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                const habitsList = res.data;
                const currentProgress = getCurrentProgress(habitsList);
                setProgressCircle(currentProgress);
                setTodayHabitsList(habitsList);
            })
            .catch(err => console.log(err));

    }, [habitStatus]);

    if (todayHabitsList === null) {
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

    const getCurrentDay = () => {

        let currentDay = dayjs().locale('pt-br').format('dddd, DD/MM');
        currentDay = currentDay.replace("-feira", "");
        currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);

        return currentDay;
    }

    const currentDay = getCurrentDay();
    const doneAnyHabits = (progressCircle > 0) ? true : false;
    const message = (doneAnyHabits) ? `${progressCircle}% dos hábitos concluídos` : "Nenhum hábito concluído ainda";

    return (
        <PageContainer>
            <PageContent>
                <Container doneAnyHabits={doneAnyHabits}>
                    <h2 data-test="today">{currentDay}</h2>
                    <h3 data-test="today-counter">{message}</h3>
                </Container>
                <Habits>
                    {todayHabitsList.map((habit) => 
                        <TodayHabits
                            key={habit.id}
                            habit={habit}
                            setHabitStatus={setHabitStatus}
                        />
                    )}
                </Habits>
            </PageContent>
        </PageContainer>
    );
}