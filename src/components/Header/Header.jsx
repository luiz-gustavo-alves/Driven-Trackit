/* Import Styled Components and Dependencies */
import { Container, ProfilePicture } from "./styled";
import { Link } from "react-router-dom";


export default function Header(props) {

    const { userData } = props;

    return (
        <Container data-test="header">
            <Link to="/">
                <h1 title="TrackIt">TrackIt</h1>
            </Link>
            <ProfilePicture profileImage={userData.image}>
                <img data-test="avatar" src={userData.image} alt={`${userData.name} icon`} title={`${userData.name} icon`} />
            </ProfilePicture>
        </Container>
    );
}