/* Import Styled Components and Dependencies */
import { PageContainer, PageContent, Logo, Form, FormInput, SubmitButton, Redirect, Loader } from "../../styles/Entry";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/* Local Imports */
import BASE_URL from "../../constants/urls";
import logo from "../../assets/trackit_logo.jpg";

export default function Registration() {

    const navigate = useNavigate();

    const [disableForm, setdisableForm] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    const updateRegistrationData = (newData) => {
        
        setRegistrationData(previousData => ({
            ...previousData,
            ...newData
        }));
    }

    const registerUser = (event) => {

        event.preventDefault();
        setdisableForm(true);

        axios.post(`${BASE_URL}/auth/sign-up`, registrationData)
            .then(() => navigate("/"))
            .catch(() => {
                alert("Não possível realizar o cadastro, tente novamente mais tarde.");
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

                <Form onSubmit={registerUser}>
                    <FormInput type="text"
                        data-test="email-input"
                        required
                        maxLength="100"
                        value={registrationData.email}
                        disabled={disableForm}
                        onChange={(e) => updateRegistrationData({email: e.target.value})}
                        placeholder="email"
                    />
                    <FormInput type="password"
                        data-test="password-input"
                        required
                        maxLength="100"
                        value={registrationData.password}
                        disabled={disableForm}
                        onChange={(e) => updateRegistrationData({password: e.target.value})}
                        placeholder="senha"
                    />
                    <FormInput type="text"
                        data-test="user-name-input"
                        required
                        maxLength="100"
                        value={registrationData.name}
                        disabled={disableForm}
                        onChange={(e) => updateRegistrationData({name: e.target.value})}
                        placeholder="nome"
                    />
                    <FormInput type="text"
                        data-test="user-image-input"
                        required
                        maxLength="256"
                        value={registrationData.image}
                        disabled={disableForm}
                        onChange={(e) => updateRegistrationData({image: e.target.value})}
                        placeholder="foto"
                    />
                    <SubmitButton type="submit"
                        data-test="signup-btn"
                        disabled={disableForm}
                        >{disableForm ? "" : "Cadastar"}
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
                    <Link data-test="login-link" to="/">
                        <h2>Já tem uma conta? Faça login!</h2>
                    </Link>
                </Redirect>

            </PageContent>
        </PageContainer>
    );
}