import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocationContext } from "../../context/Location.context";
import Forecast from "../../interfaces/forecast";
import DayDisplay from "../../components/DayDisplay/DayDisplay";
import Loading from "../../components/Loading/Loading";

const Threeday = () => {
  const { activeCoords } = useLocationContext();

  const [weather, setWeather] = useState<Forecast | null>(null);

  useEffect(() => {
    !(process.env.NODE_ENV === "test") &&
      activeCoords &&
      (async () => {
        const api = await import("../../api");
        const response = await api.default.weather.getThreeDay(activeCoords);
        response && setWeather(response);
      })();
  }, [activeCoords]);

  return (
    <Container>
      <h2 className="text-center m-4">Three Day Forecast</h2>

      {weather ? (
        <Row>
          {weather.forecast.forecastday.map((day) => (
            <Col>
              <DayDisplay weather={day} />
            </Col>
          ))}
        </Row>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Threeday;
