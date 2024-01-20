import React, { useState } from 'react';
import Continent from './Continent';

function Home() {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d36ecb5651722754fc2cc601e6ee784`;
  // const weather = useSelector((state) => state.weather);
  const fetchWeather = async (e) => {
    if (e.key === 'Enter') {
      const response = await fetch(url);
      const weather = await response.json();
      setData(weather);
      setCity('');
    }
  };
  // const dispatch = useDispatch;
  return (
    <div>
      <div className="inputContainer">
        <input
          type="text"
          value={city}
          className="input"
          placeholder="Enter a city"
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={fetchWeather}
        />
      </div>
      <div className="sectionOne">
        <div className="sectorOne">
          {data ? <p>{data.name}</p> : null}
          {data.main ? (
            <h1>
              {data.main.temp}
              °F
            </h1>
          ) : null}
        </div>
        <div className="sectorTwo">
          {data.weather ? (
            <p>
              {data.weather[0].main}
            </p>
          ) : null}
        </div>
      </div>
      <div className="divider">More Details</div>
      <div className="sectionTwo">
        {data.main ? (
          <h1>
            {data.main.humidity}
            °F
          </h1>
        ) : null}
        <div className="right">
          {data.wind ? (
            <h1>
              {data.wind.speed}
              °F
            </h1>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
      <Continent />
    </div>
  );
}
export default Home;
