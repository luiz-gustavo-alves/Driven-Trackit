/* Import Styled Components and Dependencies */
import { Container, ProfilePicture } from "./styled";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate();

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

    return (
        <Container data-test="header">
            <Link to="/">
                <h1 title="TrackIt">TrackIt</h1>
            </Link>
            <ProfilePicture profileImage={profilePic}>
                <img data-test="avatar" src={profilePic} alt={`${userName} icon`} title={`${userName} icon`} />
            </ProfilePicture>
        </Container>
    );
}