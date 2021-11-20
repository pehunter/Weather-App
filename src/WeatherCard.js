import { useState } from "react";

const graphics = {
    "Sunny": '🌤️',
    "Rain": '🌧️',
    "Thunder": '⛈️',
    "Clear": '🟦'
}

const WeatherCard = ({card}) => {
    const [active, setActive] = useState(false);

    const mouseOver = (e) => {
        setActive(true);
    }

    const mouseOut = (e) => {
        setActive(false);
    }

    return(<div className="weatherCard" style={{borderStyle: active ? "solid" : "none", backgroundColor: active ? "whitesmoke" : "transparent"}} onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <h6 className="cityText">{card.city}</h6>
        <h5 className="weatherText">{card.weather}</h5>
        <h1 className="weatherContent">{graphics[card.weather]}</h1>
        <h6 className="weatherText">{`${card.low}°F to ${card.high}°F`}</h6>
    </div>);
}

export default WeatherCard