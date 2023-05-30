/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Logo, Form, Redirect } from "../../styles/Entry";
import { Link } from "react-router-dom"

/* Import Locally Images */
import logo from "../../assets/trackit_logo.jpg";

export default function Login() {

    return (
        <PageContainer>

            <PageContent>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="trackit logo" />
                    </Link>
                </Logo>
                <Form>
                    <input placeholder="email"></input>
                    <input placeholder="senha"></input>
                    <button>Entrar</button>
                </Form>
                <Redirect>
                    <Link to="/cadastro">
                        <h2>Não tem uma conta? Cadastre-se!</h2>
                    </Link>
                </Redirect>
            </PageContent>

        </PageContainer>
    );
}