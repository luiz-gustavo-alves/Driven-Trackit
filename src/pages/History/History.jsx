/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Container } from "./styled";
import { useNavigate } from "react-router-dom";

export default function History() {

    const navigate = useNavigate();

    if (localStorage.getItem("userData")) {

        const { token } = JSON.parse(localStorage.getItem("userData"));
        console.log(token);

    } else {
        /* Unauthorized Access or localStorage data expired */
        navigate("/");
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