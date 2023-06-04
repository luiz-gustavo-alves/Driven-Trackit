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
import getCurrentCircularProgress from "../../scripts/getCurrentCircularProgress";

export default function Today() {

    const { progressCircle, setProgressCircle } = useContext(ProgressCircle);
    const navigate = useNavigate();

    const [todayHabitsList, setTodayHabitsList] = useState(null);
    const [habitStatus, setHabitStatus] = useState({status: "None"});

    useEffect(() => {

        if (localStorage.getItem("userData")) {

            const { token } = JSON.parse(localStorage.getItem("userData"));
            getCurrentCircularProgress(token, setProgressCircle);
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            axios.get(`${BASE_URL}/habits/today`, config)
                .then(res => {
                    const habitsList = res.data;
                    setTodayHabitsList(habitsList);
                })
                .catch(err => console.log(err));

        } else {
            
            /* Unauthorized Access or localStorage data expired */
            navigate("/");
        }

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