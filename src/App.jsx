/* Import Styled Components and Dependencies */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/* Import Pages */
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Today from "./pages/Today/Today";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

/* Local Imports */
import UserAuth from "./contexts/UserAuth";

export default function App() {

    const [userAuth, setUserAuth] = useState(false);
    const [userData, setUserData] = useState({});

    return (
        <UserAuth.Provider value={{userAuth, setUserAuth}}>
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
        </UserAuth.Provider>
    );
}