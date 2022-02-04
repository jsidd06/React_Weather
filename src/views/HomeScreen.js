import axios from "axios";
import React, { Fragment, useState } from "react";
import { Container, Input, Button, Card, Col, Row } from "reactstrap";

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
      <h1>weather</h1>
      <Input
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" className="mt-3 mb-3" onClick={getWeather}>
        Check Now
      </Button>
      {weather && (
        <Card className="mt-3 p-3">
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
      )}
    </Container>
  );
}

export default HomeScreen;

    /* {weather && (
        <Fragment>
          <p>{weather.main.temp}</p>
          <span>{weather.weather[0].icon}</span>
          <p>{weather.sys.country}</p>
          <p>{weather.wind.speed}</p>
        </Fragment>
      )} */