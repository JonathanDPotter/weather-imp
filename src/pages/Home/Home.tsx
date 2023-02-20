import React, { useEffect, useState } from "react";
import Current from "../../interfaces/current";
import { useLocationContext } from "../../context/Location.context";
import CurrentDisplay from "../../components/CurrentDisplay/CurrentDisplay";
import { Container } from "react-bootstrap";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { activeCoords } = useLocationContext();

  const [weather, setWeather] = useState<Current | null>(null);

  useEffect(() => {
    !(process.env.NODE_ENV === "test") &&
      activeCoords &&
      (async () => {
        const api = await import("../../api");
        const response = await api.default.weather.getCurrent(activeCoords);
        response && setWeather(response);
      })();
  }, [activeCoords]);

  return (
    <Container>
      <h2 className="text-center m-4">Current</h2>
      {weather ? <CurrentDisplay weather={weather} /> : <Loading />}
    </Container>
  );
};

export default Home;
