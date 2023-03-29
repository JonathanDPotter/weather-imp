import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Forecast, { ForecastHour } from "../../interfaces/forecast";
import { useLocationContext } from "../../context/Location.context";
import HourlyDisplay from "../../components/HourlyDisplay/HourlyDisplay";
import Loading from "../../components/Loading/Loading";

const Hourly = () => {
  const [weather, setWeather] = useState<Forecast | null>(null);
  const [hoursArray, setHoursArray] = useState<ForecastHour[]>([]);

  const { activeCoords } = useLocationContext();

  useEffect(() => {
    !(process.env.NODE_ENV === "test") &&
      activeCoords &&
      (async () => {
        const api = await import("../../api");
        const response = await api.default.weather.getThreeDay(activeCoords);
        response && setWeather(response);
      })();
  }, [activeCoords]);

  useEffect(() => {
    if (weather)
      setHoursArray(
        [
          ...weather.forecast.forecastday[0].hour,
          ...weather.forecast.forecastday[1].hour,
        ].filter((item) => {
          const hour = new Date(item.time);
          const now = new Date();
          return hour > now;
        })
      );
  }, [weather]);

  return (
    <Container fluid className="py-4">
      <h2 className="text-center text-light">Hourly</h2>
      <Row className=" d-flex flex-row">
        {hoursArray ? (
          hoursArray.map((hour, i) => {
            return i < 24 ? (
              <HourlyDisplay weather={hour} key={hour.time_epoch} />
            ) : null;
          })
        ) : (
          <Loading />
        )}
      </Row>
    </Container>
  );
};

export default Hourly;
