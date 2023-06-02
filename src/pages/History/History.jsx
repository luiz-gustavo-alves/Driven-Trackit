/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container } from "./styled";
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
            <PageContent>
                <Container>
                    <h2>Histórico</h2>
                    <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
                </Container>
            </PageContent>
        </PageContainer>
    );
}