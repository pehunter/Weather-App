import WeatherCards from './WeatherCards';
import { useEffect, useState } from 'react';
import './App.css';

const cities = ["Worcester", "Greenlawn"]

function App() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      const getCards = async () => {
        const newCards = await createCards();
        console.log(newCards);
        setCards(newCards)
      }

      getCards();
    }, [])

    const createCards = async () => {
      let newCards = []
      for(const city of cities) {
        const data = await getWeatherData(city);
        const cardObj = {
          city: city,
          weather: data.weather[0].main,
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min)
        };
        newCards = [...newCards, cardObj];
        console.log(newCards);
      }
      console.log("thesecards: ");
      console.log(newCards);
      console.log("end");
      return newCards
    }

    const getWeatherData = async (city) => {
      const weatherData = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "cb99bb75a2msh1b5b0f02573b33bp1866fejsne9373f4a4a4e"
        }
      })

      const data = await weatherData.json();
      return data;
    }
  return (
    <div className="App">
      <WeatherCards cards={cards}></WeatherCards>
    </div>
  );
}

export default App;
