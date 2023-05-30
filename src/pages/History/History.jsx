/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container } from "./styled"
import { Header, ProfilePicture } from "../../styles/Header";
import { Footer } from "../../styles/Footer";
import { Link } from "react-router-dom";

/* Import Locally Images */
import profileImage from "../../assets/goku.png";

export default function History() {

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