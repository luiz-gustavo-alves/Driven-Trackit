/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Logo, Form, Redirect } from "../../styles/Entry";
import { Link } from "react-router-dom";

/* Import Locally Images */
import logo from "../../assets/trackit_logo.jpg";

export default function Registration() {

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
                    <input placeholder="nome"></input>
                    <input placeholder="foto"></input>
                    <button>Cadastrar</button>
                </Form>

                <Redirect>
                    <Link to="/">
                        <h2>Já tem uma conta? Faça login!</h2>
                    </Link>
                </Redirect>

            </PageContent>

        </PageContainer>
    );
}