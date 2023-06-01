/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container, ContentContainer, Content, Description, Details, Status } from "./styled";
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";

/* Local Imports */
import UserAuth from "../../contexts/UserAuth";
import check from "../../assets/check.png";

export default function TodayHabit(props) {

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
                    <h2>Segunda, 17/05</h2>
                    <h3>Nenhum hábito concluído ainda</h3>
                </Container>

                <ContentContainer>
                    <Content>
                        <Description>
                            <h2>Ler 1 capítulo de livro</h2>
                            <Details>
                                <h3>Sequencia atual: 3 dias</h3>
                                <h3>Seu recorde: 5 dias</h3>
                            </Details>
                        </Description>
                        <Status>
                            <img src={check} alt="check" />
                        </Status>
                    </Content>
                </ContentContainer>

                <ContentContainer>
                    <Content>
                        <Description>
                            <h2>Ler 1 capítulo de livro</h2>
                            <Details>
                                <h3>Sequencia atual: 3 dias</h3>
                                <h3>Seu recorde: 5 dias</h3>
                            </Details>
                        </Description>
                        <Status>
                            <img src={check} alt="check" />
                        </Status>
                    </Content>
                </ContentContainer>

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