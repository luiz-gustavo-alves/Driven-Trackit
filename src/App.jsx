/* Import Styled Components and Dependencies */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/* Import Pages */
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Today from "./pages/Today/Today";
import Error from "./pages/Error/Error";

/* Import Components */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

/* Local Imports */
import ProgressCircle from "./contexts/ProgressCircle";

export default function App() {

    const [progressCircle, setProgressCircle] = useState(0);
    const [errorMessage, setErrorMessage] = useState("Not Found");

    const { pathname } = useLocation();

    return (
        <ProgressCircle.Provider value={{progressCircle, setProgressCircle}}>
            {pathname !== "/" && pathname !== "/cadastro" && pathname !== "/error" && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Registration />} />
                <Route path="/habitos" element={<Habits setErrorMessage={setErrorMessage} />} />
                <Route path="/hoje" element={<Today setErrorMessage={setErrorMessage} />} />
                <Route path="/historico" element={<History setErrorMessage={setErrorMessage} />} />
                <Route path="/error" element={<Error errorMessage={errorMessage} />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            {pathname !== "/" && pathname !== "/cadastro" && pathname !== "/error" && <Footer />}
        </ProgressCircle.Provider>
    );
}