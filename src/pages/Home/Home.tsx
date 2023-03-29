import { useEffect, useState } from "react";
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
    <Container className="py-4">
      <h2 className="text-center text-light">Current</h2>
      {weather ? <CurrentDisplay weather={weather} /> : <Loading />}
    </Container>
  );
};

export default Home;
