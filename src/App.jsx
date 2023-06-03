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
import ProgressCircle from "./contexts/ProgressCircle";

export default function App() {

    const [progressCircle, setProgressCircle] = useState(0);

    const { pathname } = useLocation();

    return (
        <ProgressCircle.Provider value={{progressCircle, setProgressCircle}}>
            {pathname !== "/" && pathname !== "/cadastro" && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Registration />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<History />} />
            </Routes>
            {pathname !== "/" && pathname !== "/cadastro" && <Footer />}
        </ProgressCircle.Provider>
    );
}