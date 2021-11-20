import WeatherCard from "./WeatherCard"

const WeatherCards = ({cards}) => {
    return (<>
        {cards.map((card) => <WeatherCard card={card}></WeatherCard>)}
    </>);
}

export default WeatherCards