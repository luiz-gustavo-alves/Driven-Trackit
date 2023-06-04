/* Import Styled Components and Dependencies */
import { Container, ProfilePicture, ProfileOptions } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {

    const navigate = useNavigate();

    const [showProfileOptions, setShowProfileOptions] = useState(false);

    let profilePic = "";
    let userName = "";

    if (localStorage.getItem("userData")) {

        const { image, name } = JSON.parse(localStorage.getItem("userData"));
        profilePic = image;
        userName = name;

    } else {

        /* Unauthorized Access or localStorage data expired */
        navigate("/");
    }

    const toggleProfileOptions = () => {
        (showProfileOptions) ? setShowProfileOptions(false) : setShowProfileOptions(true);
    }

    const clickExitApp = () => {

        setTimeout(() => {
            localStorage.removeItem("userData");
            navigate("/");
        }, 1000)
    }

    return (
        <Container data-test="header">
            <Link to="/">
                <h1 title="TrackIt">TrackIt</h1>
            </Link>
            <ProfilePicture profileImage={profilePic}>
                <img data-test="avatar" 
                    src={profilePic} 
                    alt={`${userName} icon`} 
                    title={`${userName} icon`} 
                    onClick={toggleProfileOptions}
                />
            </ProfilePicture>
            {showProfileOptions &&
                <ProfileOptions>
                    <h2>{userName}</h2>
                    <button onClick={clickExitApp}>Sair</button>
                </ProfileOptions>
            }
        </Container>
    );
}