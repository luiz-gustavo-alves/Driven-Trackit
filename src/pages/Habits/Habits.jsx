/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, Content, Description, Weekdays, Confirmation } from "./styled";
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";

/* Local Imports */
import UserAuth from "../../contexts/UserAuth";

export default function Habits(props) {

    const { userData } = props;
    const { userAuth } = useContext(UserAuth);

    if (!userAuth) {
        return (<h1>Erro de Autentificação...</h1>);
    }

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
                <Container>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </Container>
                <Content>
                    <Description>
                        <div>
                            <input placeholder="nome do habito"></input>
                            <Weekdays>
                                <button>D</button>
                                <button>S</button>
                                <button>T</button>
                                <button>Q</button>
                                <button>Q</button>
                                <button>S</button>
                                <button>S</button>
                            </Weekdays>
                        </div>
                        <Confirmation>
                            <h3>Cancelar</h3>
                            <button>
                                Salvar
                            </button>
                        </Confirmation>
                    </Description>
                </Content>
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
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