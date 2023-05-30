/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, Content, Description, Weekdays, Confirmation } from "./styled"
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Link } from "react-router-dom";

/* Import Locally Images */
import profileImage from "../../assets/goku.png";

export default function Habits() {

    return (
        <PageContainer>

            <Header>
                <Link to="/">
                    <h1>TrackIt</h1>
                </Link>
                <ProfilePicture>
                    <img src={profileImage} alt="icon" />
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