/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, Habits, CenterLoader } from "./styled";
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Oval } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import axios from "axios";

/* Import Components */
import TodayHabits from "../../components/TodayHabits/TodayHabits";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import UserAuth from "../../contexts/UserAuth";

export default function Today(props) {

    const { userData } = props;
    const { userAuth } = useContext(UserAuth);

    const [todayHabitsList, setTodayHabitsList] = useState(null);
    const [habitStatus, setHabitStatus] = useState({status: "None"});

    useEffect(() => {

        if (!userAuth) {
            return (<h1>Erro de Autentificação...</h1>);
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        };

        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => setTodayHabitsList(res.data))
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

    const getCurrentProgress = () => {

        let habitsDone = 0;
        todayHabitsList.forEach(habit => {
            if (habit.done) {
                habitsDone += 1;
            }
        });

        const numberOfHabits = todayHabitsList.length;
        const currentProgress = ((habitsDone / numberOfHabits) * 100).toFixed(0);

        return Number(currentProgress);
    }

    const currentDay = getCurrentDay();
    const currentProgress = getCurrentProgress();
    const doneAnyHabits = currentProgress > 0 ? true : false;

    console.log(todayHabitsList)

    return (
        <PageContainer>

            <Header>
                <Link to="/">
                    <h1 title="TrackIt">TrackIt</h1>
                </Link>
                <ProfilePicture>
                    <img src={userData.image} alt={`${userData.name} icon`} title={`${userData.name} icon`} />
                </ProfilePicture>
            </Header>

            <PageContent>

                <Container doneAnyHabits={doneAnyHabits}>
                    <h2>{currentDay}</h2>
                    {!doneAnyHabits && 
                        <h3>Nenhum hábito concluído ainda</h3>
                    }
                    {doneAnyHabits &&
                        <h3>{currentProgress}% dos hábitos concluídos</h3>
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

            <Footer>
                <Link to="/habitos">
                    <button>Hábitos</button>
                </Link>
                <Link to="/hoje">
                    <button>Hoje</button>
                </Link>
                <Link to="/historico">
                    <button>Histórico</button>
                </Link>
            </Footer>

        </PageContainer>
    );
}