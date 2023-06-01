/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container } from "./styled";
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";

/* Local Imports */
import UserAuth from "../../contexts/UserAuth";

export default function History(props) {

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
                    <h2>Histórico</h2>
                    <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
                </Container>

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