import axios from "axios";
import React, { Fragment, useState } from "react";
import { Container, Input, Button } from "reactstrap";

function HomeScreen() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
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
    <Container>
      <h1>weather</h1>
      <Input
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" onClick={getWeather}>
        Check Now
      </Button>

      {weather && (
        <Fragment>
          <p>{weather.main.temp}</p>
          <span>{weather.weather[0].icon}</span>
          <p>{weather.sys.country}</p>
          <p>{weather.wind.speed}</p>
        </Fragment>
      )}
    </Container>
  );
}

export default HomeScreen;
