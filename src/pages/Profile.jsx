import Info from '../components/Profile/Info.jsx';
import Weather from '../components/Profile/Weather.jsx';
import Notes from '../components/Profile/Notes.jsx';
import News from '../components/Profile/News.jsx';
import Timer from '../components/Profile/Timer.jsx';
import { useNavigate } from 'react-router-dom';

function Page3() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/movies")
    }
    return (
        <div style={{ marginTop: "4vh" }}>
            <div style={{ display: "flex" }}>
                <div>
                    <Info />
                    <Weather />
                    <Timer />
                </div>
                <Notes />
                <News />
            </div>
            <button style={{ position: "absolute", bottom: "2vh", right: "3vw", background: "green", border: "none", color: "#FFFFFF", padding: "0.5% 3%", borderRadius: "19px", fontSize: "1.15rem", letterSpacing: "0.02em", fontWeight: "500" }} onClick={handleClick}>Browse</button>
        </div>
    );
}

export default Page3;