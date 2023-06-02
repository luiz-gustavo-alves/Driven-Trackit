/* Import Styled Components and Dependencies */
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/* Import Pages */
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Today from "./pages/Today/Today";

/* Import Components */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

/* Local Imports */
import UserAuth from "./contexts/UserAuth";
import ProgressCircle from "./contexts/ProgressCircle";

export default function App() {

    const [userAuth, setUserAuth] = useState(false);
    const [progressCircle, setProgressCircle] = useState(0)
    const [userData, setUserData] = useState({});

    let currentLocation = useLocation();

    return (
        <UserAuth.Provider value={{userAuth, setUserAuth}}>
            <ProgressCircle.Provider value={{progressCircle, setProgressCircle}}>
                {currentLocation.pathname != "/" && currentLocation.pathname != "/cadastro" &&
                    <>
                        <Header
                            userData={userData}
                        />
                        <Footer />
                    </>
                }
                <Routes>
                    <Route path="/" element=
                        {<Login
                            setUserData={setUserData}
                        />}
                    />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/habitos" element=
                        {<Habits
                            userData={userData}
                        />}
                    />
                    <Route path="/hoje" element=
                        {<Today
                            userData={userData}
                        />}
                    />
                    <Route path="/historico" element=
                        {<History
                            userData={userData}
                        />}
                    />
                </Routes>
            </ProgressCircle.Provider>
        </UserAuth.Provider>
    );
}