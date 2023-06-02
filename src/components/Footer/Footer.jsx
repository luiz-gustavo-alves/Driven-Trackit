/* Import Styled Components and Dependencies */
import { useContext } from "react";
import { Container, Progress } from "./styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";

/* Local Imports */
import ProgressCircle from "../../contexts/ProgressCircle";

export default function Footer() {

    const { progressCircle } = useContext(ProgressCircle);

    return (
        <Container>
            <Link to="/habitos">
                <button>Hábitos</button>
            </Link>
            <Link to="/hoje">
                <Progress>
                    <CircularProgressbar 
                        value={progressCircle} 
                        text="Hoje"
                        backgroundPadding={6}
                        background={true}
                        styles={buildStyles({
                            pathColor:"#FFF",
                            textColor: "#FFF",
                            trailColor: "#52B6FF",
                            backgroundColor: "#52B6FF"
                        })} />
                </Progress>
            </Link>
            <Link to="/historico">
                <button>Histórico</button>
            </Link>
        </Container>
    );
}