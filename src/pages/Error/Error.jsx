/* Import Styled Components */
import { PageContainer } from "./style";

/* Import locally images */
import sad_face from "/sad_face.png";

export default function Error(props) {

    const { errorMessage } = props;

    return (
        <PageContainer>
            <div>
                {errorMessage}
            </div>
            <img src={sad_face} />
            <button>
                <a href="/">Reiniciar Aplicativo</a>
            </button>
        </PageContainer>
    );
}