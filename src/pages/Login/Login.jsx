/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Logo, Form, FormInput, SubmitButton, Redirect, Loader } from "../../styles/Entry";
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import UserAuth from "../../contexts/UserAuth";
import logo from "../../assets/trackit_logo.jpg";

export default function Login(props) {

    const { setUserData } = props;
    const { setUserAuth } = useContext(UserAuth);
    const navigate = useNavigate();

    const [disableForm, setdisableForm] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const updateLoginData = (newData) => {
        
        setLoginData(previousData => ({
            ...previousData,
            ...newData
        }));
    }

    const loginUser = (event) => {

        event.preventDefault();
        setdisableForm(true);

        axios.post(`${BASE_URL}/auth/login`, loginData)
            .then((res) => {

                const data = res.data;
                setUserData({
                    name: data.name,
                    image: data.image,
                    token: data.token
                });

                setUserAuth(true);
                navigate("/hoje");
            })
            .catch(() => {
                alert("Email ou senha incorretos.");
                setdisableForm(false);
            });
    }

    return (
        <PageContainer>
            <PageContent>

                <Logo>
                    <Link to="/">
                        <img src={logo} alt="trackit logo" />
                    </Link>
                </Logo>

                <Form onSubmit={loginUser}>
                    <FormInput type="text"
                        data-test="email-input"
                        required
                        maxLength="100"
                        value={loginData.email}
                        disabled={disableForm}
                        onChange={(e) => updateLoginData({email: e.target.value})}
                        placeholder="email"
                    />
                    <FormInput type="password"
                        data-test="password-input"
                        required
                        maxLength="100"
                        value={loginData.password}
                        disabled={disableForm}
                        onChange={(e) => updateLoginData({password: e.target.value})}
                        placeholder="senha"
                    />
                    <SubmitButton 
                        type="submit"
                        data-test="login-btn"
                        disabled={disableForm}>
                        {disableForm ? "" : "Entrar"}
                    </SubmitButton>
                    <Loader>
                        <ThreeDots 
                            height="70"
                            width="70"
                            radius="9"
                            color="#FFF"
                            ariaLabel="three-dots-loading"
                            visible={disableForm}
                        />
                    </Loader>
                </Form>

                <Redirect>
                    <Link data-test="signup-link" to="/cadastro">
                        <h2>Não tem uma conta? Cadastre-se!</h2>
                    </Link>
                </Redirect>

            </PageContent>
        </PageContainer>
    );
}