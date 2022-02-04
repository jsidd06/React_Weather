import axios from "axios";
import React, { useState } from "react";
import { Container, Input, Button, Card,CardImg } from "reactstrap";
import Image1 from "../Images/weather.jpg"
function HomeScreen() {
  // weather app state
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  // weather app api key
  const getWeather = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85ce601f31f707c153537eac865348f&units=metric`
      )
      .then((response) => {
        console.log();
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container style={{ textAlign: "center" }} className="mt-5">
      <h1>Weather 🌦 Live Service</h1>
      {/* Add the state here [setcity]*/}
      <Input
        className="mt-3 p-2 text-center"
        placeholder="Enter Your City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      {/* Add the value of data here  {getweather}*/}
      <Button type="submit" className="mt-3 mb-3" onClick={getWeather}>
        Check Now
      </Button>
      {/* Add the value of data here  {weather}*/}
      {/* set api Data here */}
      {weather ? (
        <Card
          className="mt-3 p-3"
          style={{ backgroundColor: "#1572A1", color: "#FFFFFF" }}
        >
          <h3>City Name :- {weather.name}</h3>
          <h3>Weather :- {weather.weather[0].main}</h3>
          <h3>Description :- {weather.weather[0].description}</h3>
          <h3>City Temperature :- {weather.main.temp}</h3>
          <h3>Feels Like :- {weather.main.feels_like}</h3>
          <h3>Temperature min :- {weather.main.temp_min}</h3>
          <h3>Temperature max :- {weather.main.temp_max}</h3>
          <h3>Humidity :- {weather.main.humidity}</h3>
          <h3>Wind Speed :- {weather.wind.speed}</h3>
          <h3>Clouds :- {weather.clouds.all}</h3>
          <h3>Sunrise :- {weather.sys.sunrise}</h3>
          <h3>Sunset :- {weather.sys.sunset}</h3>
        </Card>
      ) : (
        <CardImg src={Image1} alt="Card image cap" />
      )}
    </Container>
  );
}

export default HomeScreen;