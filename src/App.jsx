/* Import Styled Components and Dependencies */
import { Routes, Route } from "react-router-dom"
import axios from 'axios';

/* Import Pages */
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import TodayHabit from "./pages/TodayHabit/TodayHabit";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Registration />}></Route>
                <Route path="/habitos" element={<Habits />}></Route>
                <Route path="/hoje" element={<TodayHabit />}></Route>
                <Route path="/historico" element={<History />}></Route>
            </Routes>
        </>
    )
}