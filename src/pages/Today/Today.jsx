/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, Habits, CenterLoader } from "./styled";
import { Oval } from 'react-loader-spinner';
import { useContext, useState, useEffect } from "react";
import 'react-circular-progressbar/dist/styles.css';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import axios from "axios";

/* Import Components */
import TodayHabits from "../../components/TodayHabits/TodayHabits";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import UserAuth from "../../contexts/UserAuth";
import ProgressCircle from "../../contexts/ProgressCircle";

export default function Today(props) {

    const { userData } = props;
    const { userAuth } = useContext(UserAuth);
    const { progressCircle, setProgressCircle } = useContext(ProgressCircle);

    const [todayHabitsList, setTodayHabitsList] = useState(null);
    const [habitStatus, setHabitStatus] = useState({status: "None"});

    useEffect(() => {

        if (!userAuth) {
            return (<h1>Erro de Autentificação...</h1>);
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
            const currentProgress = ((habitsDone / numberOfHabits) * 100).toFixed(0);

            return Number(currentProgress);
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        };

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
    const doneAnyHabits = progressCircle > 0 ? true : false;

    return (
        <PageContainer>
            <PageContent>
                <Container doneAnyHabits={doneAnyHabits}>
                    <h2>{currentDay}</h2>
                    {!doneAnyHabits && 
                        <h3>Nenhum hábito concluído ainda</h3>
                    }
                    {doneAnyHabits &&
                        <h3>{progressCircle}% dos hábitos concluídos</h3>
                    }
                </Container>
                <Habits>
                    {todayHabitsList.map((habit) => 
                        <TodayHabits
                            key={habit.id}
                            habit={habit}
                            setHabitStatus={setHabitStatus}
                            token={userData.token}
                        />
                    )}
                </Habits>
            </PageContent>
        </PageContainer>
    );
}