import { useParams, useNavigate } from "react-router-dom";

const ColorPage = ({ colors }) => {
    const params = useParams();
    const navigate = useNavigate();
    const backColor = colors.filter(color => color.name === params.name)
    return (
        <div style={{
            backgroundColor: `${backColor[0].value}`,
            minHeight: '100vh'
        }}>
            <h1>THIS IS {params.name}</h1>
            <h1>ISN'T IT  BEAUTIFUL?</h1>
            <button onClick={() => navigate(-1)}>GO BACK</button>
        </div>
    )
}
export default ColorPage;